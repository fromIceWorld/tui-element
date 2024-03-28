const TUI_SPINNER_CONFIG = {
  className: 'TuiSpinnerComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        width: {
          type: 'string',
          value: '100%',
        },
        value: {
          type: 'number',
          value: 0,
        },
        min: {
          type: 'number',
          value: 0,
        },
        max: {
          type: 'number',
          value: 100,
        },
        step: {
          type: 'number',
          value: 1,
        },
      },
    },
  ],
  component: {
    event: [],
    methods: [],
    data: ['value'],
    params: [],
  },
};
export { TUI_SPINNER_CONFIG };
