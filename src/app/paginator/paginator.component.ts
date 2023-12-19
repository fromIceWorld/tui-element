import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_PAGINATOR_CONFIG } from './paginator.config';

@config(TUI_PAGINATOR_CONFIG)
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less'],
})
export class TuiPaginatorComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-paginator';
  rows = 10;
  totalRecords = 0;
  displayRecords = true;
  displayPages = true;
  jumpToPage = true;
  displayPole = true;

  constructor() {}
  onPageChange(e: any) {
    console.log(e);
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
           MyTuiPaginator${index}.ɵcmp = {
            ...MyTuiPaginator${index}.ɵcmp,
            factory:() => { return new MyTuiPaginator${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiPaginator${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
