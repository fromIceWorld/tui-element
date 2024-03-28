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
  label = '确定';
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiButtonComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const {
      label,
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
                  this.label = '${label.value}';
                  this.width = '${width.value}';
                  this.type = '${type.value}';
                  this.iconPos = '${iconPos.value}';
                  this.loading = ${loading.value};
                  this.rounded = ${rounded.value};
                  this.icon = '${icon.value}';
                  this.status = '${status.value}';
                }
           }
           MyTuiButton${index}.ɵcmp = {
            ...MyTuiButton${index}.ɵcmp,
            factory:() => { return new MyTuiButton${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiButton${index}, {  injector: injector});
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
                setLoading(){
                  this.instance.loading = true;
                  this.check();
                }
                setNormal(){
                  this.instance.loading = false;
                  this.instance.disabled = false;
                  this.check();
                }
                setDisabled(){
                  this.instance.disabled = true;
                  this.check();
                }
                set label(value){
                  this.instance.label = value;
                  this.check();
                }
                get label(){
                  return this.instance.label;
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
