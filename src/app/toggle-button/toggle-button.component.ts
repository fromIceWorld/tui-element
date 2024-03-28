import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { config } from 'src/decorators/config';
import { TOGGLE_BUTTON_CONFIG } from './toggle-button.config';

@config(TOGGLE_BUTTON_CONFIG)
@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.less'],
})
export class TuiToggleButtonComponent implements OnInit {
  static tagNamePrefix: string = 'my-toggle-button';
  @Output('click') click = new EventEmitter();
  @Output('change') change = new EventEmitter();
  @Input('input')
  set inputConfig(configJSON: string) {
    try {
      const config = JSON.parse(configJSON);
      this.optional = config?.optional || this.optional;
    } catch {
      // 当只传入一个值时，不使用
      // this.icon = configJSON;
    }
  }
  width = '100%';
  optional = [
    {
      icon: 'icon-plus5',
      value: 'add',
      lable: '添加',
      tooltip: '添加',
      checked: true,
    },
    {
      icon: 'icon-editorial-team',
      value: 'edit',
      lable: '编辑',
      tooltip: '编辑',
    },
    { icon: 'icon-delete3', value: 'delete', lable: '删除', tooltip: '删除' },
    { icon: 'icon-release', value: 'release', lable: '发布', tooltip: '发布' },
  ];
  fullcolour = true;
  fullPosition = true;
  selected: any;
  constructor() {}
  onToggleHandler(item: any) {
    if (JSON.stringify(this.selected) !== JSON.stringify(item.value)) {
      this.change.emit();
      this.selected = item.value;
    }
    this.click.emit();
  }
  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiToggleButtonComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { width, fullcolour, fullPosition, optional } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiToggleButton${index} extends ${className}{
               constructor(){
                  super();
                  this.width = '${width.value}';
                  this.fullPosition = ${fullPosition.value};
                  this.fullcolour = ${fullcolour.value};
                  this.optional = ${optional.value};
                }
           }
           MyTuiToggleButton${index}.ɵcmp = {
            ...MyTuiToggleButton${index}.ɵcmp,
            factory:() => { return new MyTuiToggleButton${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiToggleButton${index}, {  injector: injector});
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
                get selected(){
                  return this.instance.selected;
                }
                set selected(val){
                  this.instance.selected = val || [];
                  this.check();
                }
                get optional(){
                  return this.instance.optional;
                }
                set optional(optional){
                  this.instance.optional = optional || [];
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
