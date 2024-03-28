import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { config } from 'src/decorators/config';
import { ICON_CONFIG } from './icon-config';
@config(ICON_CONFIG)
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
})
export class TuiIconComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-icon';
  @Input('input')
  set inputConfig(configJSON: string) {
    try {
      const config = JSON.parse(configJSON);
      this.label = config.label !== undefined ? config.label : this.label;
      this.icon = config.icon !== undefined ? config.icon : this.icon;
    } catch {
      // 当只传入一个值时，不使用
      // this.icon = configJSON;
    }
  }
  @Output('click') click = new EventEmitter();
  label = '图标';
  icon = 'icon-plus';
  margin = '0 2px';
  direction = 'ltr';
  iconColor = '#000000D9';
  textColor = '#000000D9';
  textFontSize = '12px';
  iconFontSize = '12px';
  clickIcon() {
    this.click.emit();
  }
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiIconComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const {
      label,
      icon,
      direction,
      margin,
      iconColor,
      textColor,
      textFontSize,
      iconFontSize,
    } = html[0].config;
    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiIcon${index} extends ${className}{
               constructor(){
                  super();
                  this.label = '${label.value}';
                  this.icon = '${icon.value}';
                  this.direction = '${direction.value}';
                  this.margin = '${margin.value}';
                  this.iconColor = '${iconColor.value}';
                  this.textColor = '${textColor.value}';
                  this.textFontSize = '${textFontSize.value}${textFontSize.postfix}';
                  this.iconFontSize = '${iconFontSize.value}${iconFontSize.postfix}';
                }
           }
           MyTuiIcon${index}.ɵcmp = {
            ...MyTuiIcon${index}.ɵcmp,
            factory:() => { return new MyTuiIcon${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiIcon${index}, {  injector: injector});
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
                set label(value){
                  this.instance.label = value;
                  this.check();
                }
                get label(){
                  return this.instance.label;
                }
                set icon(value){
                  this.instance.icon = value;
                  this.check();
                }
                get icon(){
                  return this.instance.icon;
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
