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
  color = 'black';
  icon = 'default';
  type = 'default ';
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiTitleComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { text, color, icon, type } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiTitle${index} extends ${className}{
               constructor(){
                  super();
                  this.text = '${text.value}';
                  this.icon = '${icon.value}';
                  this.type = '${type.value}';
                }
           }
           MyTuiTitle${index}.ɵcmp = {
            ...MyTuiTitle${index}.ɵcmp,
            factory:() => { return new MyTuiTitle${index}()},
           },
           (()=>{
              let angularClass = createCustomElement(MyTuiTitle${index}, {  injector: injector});
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
                get text(){
                  return this.instance.text;
                }
                set text(val){
                  this.instance.text = val || '';
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
