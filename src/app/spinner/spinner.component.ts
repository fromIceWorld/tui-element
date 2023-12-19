import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_SPINNER_CONFIG } from './spinner.config';

@config(TUI_SPINNER_CONFIG)
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less'],
})
export class TuiSpinnerComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-spinner';
  width = '100%';
  value = 0;
  min = 0;
  max = 100;
  step = 1;
  iSnumberInput = true;
  iSminusInput = true;
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiSpinnerComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { min, max, step, iSnumberInput, iSminusInput, value, width } =
      html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiSpinner${index} extends ${className}{
               constructor(){
                  super();
                  this.value = ${value.value};
                  this.min = ${min.value};
                  this.max = ${max.value};
                  this.step = ${step.value};
                  this.width = '${width.value}';
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
           MyTuiSpinner${index}.ɵcmp = {
            ...MyTuiSpinner${index}.ɵcmp,
            factory:() => { return new MyTuiSpinner${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiSpinner${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
