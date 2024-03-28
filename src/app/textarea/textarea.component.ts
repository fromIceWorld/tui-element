import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_TEXTAREA_CONFIG } from './textarea.config';

@config(TUI_TEXTAREA_CONFIG)
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.less'],
})
export class TuiTextareaComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-textarea';
  maxlength = 100;
  rows = 5;
  cols = 30;
  value = '';
  constructor() {}
  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiTextareaComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { maxlength, rows, cols, value } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiTextarea${index} extends ${className}{
               constructor(){
                  super();
                  this.value = '${value.value}';
                  this.cols = ${cols.value};
                  this.rows = ${rows.value};
                  this.maxlength = ${maxlength.value};
                }
           }
           MyTuiTextarea${index}.ɵcmp = {
            ...MyTuiTextarea${index}.ɵcmp,
            factory:() => { return new MyTuiTextarea${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiTextarea${index}, {  injector: injector});
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
                get value(){
                  return this.instance.value;
                }
                set value(val){
                  this.instance.value = val || '';
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
