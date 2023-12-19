const TOGGLE_BUTTON_CONFIG = {
  className: 'TuiToggleButtonComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        width: {
          type: 'string',
          value: '100%',
        },
        fullcolour: {
          type: 'select',
          options: [
            { label: '主题色', value: true },
            { label: 'icon', value: false },
            { label: '尖角', value: "'model'" },
          ],
          value: true,
        },
        fullPosition: {
          type: 'boolean',
          value: true,
        },
        optional: {
          type: 'json',
          value:
            '[{"icon":"icon-plus5","value":"add","lable":"添加","tooltip":"添加","checked":true},{"icon":"icon-editorial-team","value":"edit","lable":"编辑","tooltip":"编辑"},{"icon":"icon-delete3","value":"delete","lable":"删除","tooltip":"删除"},{"icon":"icon-release","value":"release","lable":"发布","tooltip":"发布"}]',
        },
      },
    },
  ],
  component: {
    event: [],
    methods: [],
    data: [],
    params: [],
  },
};
export { TOGGLE_BUTTON_CONFIG };
