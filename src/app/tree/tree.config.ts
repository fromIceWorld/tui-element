const TUI_TREE_CONFIG = {
  className: 'TuiTreeComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        data: {
          type: 'json',
          value:
            '[{"label":"网络攻击","data":"网络攻击","children":[{"label":"安装植入","data":"安装植入","children":[{"label":"漏洞利用","data":"漏洞利用"},{"label":"网络事件","data":"网络事件"}]},{"label":"僵尸软件","data":"僵尸软件","children":[{"label":"命令与控制","data":"命令与控制"}]}]}]',
        },
      },
    },
  ],
  component: {
    event: [{ label: 'selectionChange', value: 'selectionChange' }],
    methods: [],
    data: ['tree', 'selectedList'],
    params: [],
  },
};
export { TUI_TREE_CONFIG };
