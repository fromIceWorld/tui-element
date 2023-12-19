import { Component, OnInit } from '@angular/core';
import { config } from 'src/decorators/config';
import { TUI_TREE_CONFIG } from './tree.config';

@config(TUI_TREE_CONFIG)
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less'],
})
export class TuiTreeComponent implements OnInit {
  static tagNamePrefix: string = 'my-tui-tree';
  data = [
    {
      label: '网络攻击',
      data: '网络攻击',
      children: [
        {
          label: '安装植入',
          data: '安装植入',
          children: [
            { label: '漏洞利用', data: '漏洞利用' },
            { label: '网络事件', data: '网络事件' },
          ],
        },
        {
          label: '僵尸软件',
          data: '僵尸软件',
          children: [{ label: '命令与控制', data: '命令与控制' }],
        },
      ],
    },
  ];
  selectedList = [];
  constructor() {}

  ngOnInit(): void {}
  static extends(option: any): { html: string; js: string } {
    // web component 的索引不能递增，因为索引重置后会重复，而且cache后apply会有冲突。
    const index = String(Math.random()).substring(2),
      tagName = `${TuiTreeComponent.tagNamePrefix}-${index}`;
    const { html, className } = option;
    const { data } = html[0].config;

    return {
      html: `<${tagName} _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></${tagName}>`,
      js: `class MyTuiTree${index} extends ${className}{
               constructor(){
                  super();
                  this.data = ${data.value};
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
           MyTuiTree${index}.ɵcmp = {
            ...MyTuiTree${index}.ɵcmp,
            factory:() => { return new MyTuiTree${index}()},
           };
           (()=>{
              let customEl = createCustomElement(MyTuiTree${index}, {  injector: injector});
              customElements.get('${tagName}') || customElements.define('${tagName}',customEl);
           })();
           `,
    };
  }
}
