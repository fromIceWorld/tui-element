import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_TABLE_CONFIG } from './table.config';

@config(TUI_TABLE_CONFIG)
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TuiTableComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-table';
  leftType = '';
  noDataType = true;
  headers = [
    { label: '设备名称', key: 'name', width: '100px' },
    { label: '所属安全域', key: 'belong' },
    { label: 'IP地址', key: 'IP', width: '300px' },
    { label: '风险等级', key: 'riskLevel', width: '50%' },
  ];
  slots: any[] = [[], [], [], []];
  tableData = [
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.66.66.66',
      riskLevel: '严重',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.66.87.66',
      riskLevel: '高危',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.45.66.66',
      riskLevel: '低危',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.66.64.66',
      riskLevel: '严重',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.66.03.66',
      riskLevel: '严重',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.75.66.66',
      riskLevel: '低危',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.66.66.40',
      riskLevel: '低危',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.66.86.66',
      riskLevel: '低危',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.96.66.66',
      riskLevel: '低危',
    },
    {
      name: '设备资产A',
      belong: '/设备资产/安全域A',
      IP: '10.66.66.56',
      riskLevel: '低危',
    },
  ];
  selectedItems = [];
  rowData = {};
  constructor() {}
  focusRow(rowData: any) {
    this.rowData = rowData;
  }
  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiTableComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { headers, tableData, leftType, slots } = html[0].config;
    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiTable${index} extends ${className}{
               constructor(){
                  super();
                  this.headers = ${JSON.stringify(headers.value)};
                  this.tableData = ${tableData.value};
                  this.leftType = '${leftType.value}';
                  this.slots = ${JSON.stringify(slots.value)};
                }
           }
           MyTuiTable${index}.ɵcmp = {
            ...MyTuiTable${index}.ɵcmp,
            factory:() => { return new MyTuiTable${index}()},
           };
           (()=>{
              let angularClass = createCustomElement(MyTuiTable${index}, {  injector: injector});
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
                get tableData(){
                  return this.instance.tableData;
                }
                get rowData(){
                  return this.instance.rowData;
                }
                get selectedItems(){
                  return this.instance.selectedItems;
                }
                set tableData(val){
                  this.instance.tableData = val || [];
                  this.check();
                }
              }  
              customElements.get('${tagName}') || customElements.define('${tagName}',customClass);
           })();
           `,
    };
  }
}
