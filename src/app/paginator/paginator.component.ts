import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_PAGINATOR_CONFIG } from './paginator.config';

@config(TUI_PAGINATOR_CONFIG)
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less'],
})
export class TuiPaginatorComponent implements OnInit {
  @Output() pageChange = new EventEmitter();
  static tagNamePrefix: string = 'my-tui-paginator';
  pageIndex = 0;
  rows = 10;
  totalRecords = 0;
  displayRecords = true;
  displayPages = true;
  jumpToPage = true;
  displayPole = true;

  constructor() {}
  onPageChange(e: any) {
    this.pageIndex = e.page;
    this.pageChange.emit();
  }
  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiPaginatorComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const {
      rows,
      totalRecords,
      displayRecords,
      displayPages,
      jumpToPage,
      displayPole,
    } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiPaginator${index} extends ${className}{
               constructor(){
                  super();
                  this.rows = ${rows.value};
                  this.totalRecords = ${totalRecords.value}; 
                  this.displayRecords = ${displayRecords.value};
                  this.displayPages = ${displayPages.value};
                  this.jumpToPage = ${jumpToPage.value};
                  this.displayPole = ${displayPole.value};

                }
           }
           MyTuiPaginator${index}.ɵcmp = {
            ...MyTuiPaginator${index}.ɵcmp,
            factory:() => { return new MyTuiPaginator${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiPaginator${index}, {  injector: injector});
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
                get total(){
                  return this.instance.totalRecords;
                }
                set total(val){
                  this.instance.totalRecords = val || 0 ;
                  this.check();
                }
                get pageIndex(){
                  return this.instance.pageIndex;
                }
                set pageIndex(val){
                  this.instance.pageIndex = val || 0 ;
                  this.check();
                }
                get rows(){
                  return this.instance.rows;
                }
                set rows(val){
                  this.instance.rows = val || 10 ;
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
