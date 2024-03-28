import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_CALENDAR_CONFIG } from './calendar.config';

@config(TUI_CALENDAR_CONFIG)
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class TuiCalendarComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-calendar';
  width = '100%';
  value = '';
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiCalendarComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { options, filter, width } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiCalendar${index} extends ${className}{
               constructor(){
                  super();
                  this.width = '${width.value}';

                }
           }
           MyTuiCalendar${index}.ɵcmp = {
            ...MyTuiCalendar${index}.ɵcmp,
            factory:() => { return new MyTuiCalendar${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiCalendar${index}, {  injector: injector});
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
                  this.instance.value = val;
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
