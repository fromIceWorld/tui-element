import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { BUTTON_CONFIG } from './button.config';

@config(BUTTON_CONFIG)
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class TuiButtonComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-button';
  type = '';
  width = '100%';
  iconPos = 'left';
  loading = false;
  disabled = false;
  rounded = true;
  icon = '';
  status = '';
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiButtonComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const {
      name,
      width,
      type,
      iconPos,
      disabled,
      loading,
      rounded,
      icon,
      status,
    } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiButton${index} extends ${className}{
               constructor(){
                  super();
                  this.disabled = ${disabled.value};
                  this.name = '${name.value}';
                  this.width = '${width.value}';
                  this.type = '${type.value}';
                  this.iconPos = '${iconPos.value}';
                  this.loading = ${loading.value};
                  this.rounded = ${rounded.value};
                  this.icon = '${icon.value}';
                  this.status = '${status.value}';
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
                setLoading(){
                  this.loading = true;
                  this.check();
                }
                setNormal(){
                  this.loading = false;
                  this.disabled = false;
                  this.check();
                }
                setDisabled(){
                  this.disabled = true;
                  this.check();
                }
           }
           MyTuiButton${index}.ɵcmp = {
            ...MyTuiButton${index}.ɵcmp,
            factory:() => { return new MyTuiButton${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiButton${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
