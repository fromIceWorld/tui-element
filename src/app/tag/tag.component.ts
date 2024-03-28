import { Component, Input, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_TAG_CONFIG } from './tag.config';

@config(TUI_TAG_CONFIG)
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less'],
})
export class TuiTagComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-tag';
  @Input('input')
  set inputConfig(configJSON: string) {
    try {
      const config = JSON.parse(configJSON);
      this.tags = config?.tags || this.tags;
    } catch {
      // 当只传入一个值时，不使用
      // this.icon = configJSON;
    }
  }
  tagMode: any = 'default';
  tags = [
    {
      lable: '告警类型A',
      tagColor: 'default',
    },
    {
      lable: '告警类型B',
      tagColor: 'success',
    },
    {
      lable: '告警类型C',
      tagColor: 'processing',
    },
    {
      lable: '告警类型D',
      tagColor: 'warning',
    },
    {
      lable: '自定义颜色',
      tagColor: '#ee82ee',
    },
  ];
  constructor() {}
  tagCheckedChange(e: any) {
    console.log('tagCheckedChange', e);
  }
  tagOnClose(e: any) {
    console.log('tagOnClose', e);
  }
  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiTagComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { tags, tagMode } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiTag${index} extends ${className}{
               constructor(){
                  super();
                  this.tags = ${tags.value};
                  this.tagMode = '${tagMode.value}'; 
                }
           }
           MyTuiTag${index}.ɵcmp = {
            ...MyTuiTag${index}.ɵcmp,
            factory:() => { return new MyTuiTag${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiTag${index}, {  injector: injector});
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
                get tags(){
                  return this.instance.tags;
                }
                set tags(val){
                  this.instance.tags = val || [];
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
