import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_TITLE_CONFIG } from './title.config';

@config(TUI_TITLE_CONFIG)
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less'],
})
export class TuiTitleComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-title';
  text = 'TUI 通用组件示例';
  icon = 'default';
  type = 'default ';
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiTitleComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { text, icon, type } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiTitle${index} extends ${className}{
               constructor(){
                  super();
                  this.text = '${text.value}';
                  this.icon = '${icon.value}';
                  this.type = '${type.value}';
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
           MyTuiTitle${index}.ɵcmp = {
            ...MyTuiTitle${index}.ɵcmp,
            factory:() => { return new MyTuiTitle${index}()},
           },
           (()=>{
              let customEl = createCustomElement(MyTuiTitle${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
