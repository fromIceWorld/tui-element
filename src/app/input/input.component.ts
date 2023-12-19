import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_INPUT_CONFIG } from './input.config';

@config(TUI_INPUT_CONFIG)
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
})
export class TuiInputComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-input';
  width = '100%';
  value = '';
  placeholder = '请输入搜索内容';
  empty = false;
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiInputComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { value, placeholder, empty, width } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiInput${index} extends ${className}{
               constructor(){
                  super();
                  this.width = '${width.value}';
                  this.value = '${value.value}';
                  this.placeholder = '${placeholder.value}';
                  this.empty = ${empty.value};
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
           MyTuiInput${index}.ɵcmp = {
            ...MyTuiInput${index}.ɵcmp,
            factory:() => { return new MyTuiInput${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiInput${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
