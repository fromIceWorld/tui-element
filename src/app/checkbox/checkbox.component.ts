import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_CHECKBOX_CONFIG } from './checkbox.config';

@config(TUI_CHECKBOX_CONFIG)
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
})
export class TuiCheckboxComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-checkbox';
  options: any = [
    {
      label: '关联到资产',
      value: '关联到资产',
    },
    {
      label: '关联到网络',
      value: '关联到网络',
    },
    {
      label: '关联到其他',
      value: '关联到其他',
    },
  ];
  value = [];
  constructor() {}
  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiCheckboxComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { options } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiCheckbox${index} extends ${className}{
               constructor(){
                  super();
                  this.options = ${options.value};
                }
           }
           MyTuiCheckbox${index}.ɵcmp = {
            ...MyTuiCheckbox${index}.ɵcmp,
            factory:() => { return new MyTuiCheckbox${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiCheckbox${index}, {  injector: injector});
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
                  this.instance.value = val || [];
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
