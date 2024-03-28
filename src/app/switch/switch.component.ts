import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output('change') change = new EventEmitter();
  @Input('input')
  set inputConfig(configJSON: string) {
    try {
      const config = JSON.parse(configJSON);
      this.checked =
        config?.checked !== undefined ? config.checked : this.checked;
      this.checkedYes = config?.checkedYes || this.checkedYes;
      this.checkedNo = config?.checkedNo || this.checkedNo;
    } catch {
      // 当只传入一个值时，不使用
      // this.icon = configJSON;
    }
  }
  onChange() {
    this.change.emit();
  }
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
           }
           MyTuiSwitch${index}.ɵcmp = {
            ...MyTuiSwitch${index}.ɵcmp,
            factory:() => { return new MyTuiSwitch${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiSwitch${index}, {  injector: injector});
              class customClass extends angularClass{
                constructor(){
                  super();
                }
                check(){
                  // extends的class 无法依赖注入cd,只能自己查找
                  let cd = this._ngElementStrategy;
                  cd.detectChanges();
                }
                get instance(){
                  return this._ngElementStrategy.componentRef.instance
                }
                get checked(){
                  return this.instance.checked;
                }
                set checked(val){
                  this.instance.checked = !!val;
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
