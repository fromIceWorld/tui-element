const TUI_TITLE_CONFIG = {
  className: 'TuiTitleComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        text: {
          type: 'string',
          value: 'TUI 通用组件示例',
        },
        icon: {
          type: 'string',
          value: 'default',
        },
        type: {
          type: 'select',
          options: [
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'sharp',
              value: 'sharp',
            },
            {
              label: 'line',
              value: 'line',
            },
            {
              label: 'tip',
              value: 'tip',
            },
            {
              label: 'warnTip',
              value: 'warnTip',
            },
          ],
          value: 'default',
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
export { TUI_TITLE_CONFIG };
