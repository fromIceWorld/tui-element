import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ɵdn } from '@tui/charts-library';
import { config } from 'src/decorators/config';
import { TUI_TOPN_CONFIG } from './topn.config';
@config(TUI_TOPN_CONFIG)
@Component({
  selector: 'app-topn',
  templateUrl: './topn.component.html',
  styleUrls: ['./topn.component.less'],
})
export class TuiTopnComponent implements OnInit, AfterViewChecked {
  @ViewChild('tuiChart', { static: true, read: ɵdn }) tuiChart: any;
  static tagNamePrefix: string = 'my-tui-topn';
  dataConfig = {
    x: ['name'],
    y: ['value'],
    data: [
      { name: '上海市', value: 6000 },
      { name: '河南省', value: 4600 },
      { name: '广东省', value: 4200 },
      { name: '湖北省', value: 2000 },
      { name: '天津市', value: 1800 },
    ],
  };
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewChecked() {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiTopnComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { data } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiTopn${index} extends ${className}{
               constructor(){
                  super();
                  this.dataConfig.data = ${data.value};
                }
           }
           MyTuiTopn${index}.ɵcmp = {
            ...MyTuiTopn${index}.ɵcmp,
            factory:() => { return new MyTuiTopn${index}()},
           },
           (()=>{
              let angularClass = createCustomElement(MyTuiTopn${index}, {  injector: injector});
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
                get list(){
                  return this.instance.dataConfig.list;
                }
                set list(val){
                  this.instance.dataConfig.list = val || [];
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
