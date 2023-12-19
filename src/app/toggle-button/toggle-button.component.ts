import { Component, OnInit } from '@angular/core';
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
    this.selected = item.value;
    console.log(item);
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
           MyTuiToggleButton${index}.ɵcmp = {
            ...MyTuiToggleButton${index}.ɵcmp,
            factory:() => { return new MyTuiToggleButton${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiToggleButton${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
