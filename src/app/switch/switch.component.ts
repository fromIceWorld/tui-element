import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_SWITCH_CONFIG } from './switch.config';

@config(TUI_SWITCH_CONFIG)
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less'],
})
export class TuiSwitchComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-switch';
  checked = false;
  checkedYes = '';
  checkedNo = '';
  constructor() {}
  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiSwitchComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { checked, checkedYes, checkedNo } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiSwitch${index} extends ${className}{
               constructor(){
                  super();
                  this.checked = ${checked.value};
                  this.checkedYes = '${checkedYes.value}';
                  this.checkedNo = '${checkedNo.value}';
                }
                // extends的class 无法依赖注入cd,只能自己查找
                get cd(){
                  const dom = document.querySelector('${tagName}');
                  return dom._ngElementStrategy;
                }
                set cd(value){}
                check(){
                  this.cd.detectChanges();
                  setTimeout(()=>this.cd.detectChanges())
                }
           }
           MyTuiSwitch${index}.ɵcmp = {
            ...MyTuiSwitch${index}.ɵcmp,
            factory:() => { return new MyTuiSwitch${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiSwitch${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
