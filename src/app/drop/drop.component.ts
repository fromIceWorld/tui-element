import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_DROP_CONFIG } from './drop.config';

@config(TUI_DROP_CONFIG)
@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class TuiDropComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-drop';
  options = [
    { label: '高危', value: '高危' },
    { label: '中危', value: '中危' },
    { label: '低危', value: '低危' },
    { label: '正常', value: '正常' },
  ];
  width = '100%';
  value = '';
  filter = false;
  placeholder = '';
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiDropComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { options, filter, width } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiDrop${index} extends ${className}{
               constructor(){
                  super();
                  this.width = '${width.value}';
                  this.options = ${options.value};
                  this.filter = ${filter.value};
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
           MyTuiDrop${index}.ɵcmp = {
            ...MyTuiDrop${index}.ɵcmp,
            factory:() => { return new MyTuiDrop${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiDrop${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
