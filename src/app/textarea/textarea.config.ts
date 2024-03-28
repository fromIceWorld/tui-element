const TUI_TEXTAREA_CONFIG = {
  className: 'TuiTextareaComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        value: {
          type: 'string',
          value: '',
        },
        maxlength: {
          type: 'number',
          value: 100,
        },
        rows: {
          type: 'number',
          value: 5,
        },
        cols: {
          type: 'number',
          value: 30,
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
export { TUI_TEXTAREA_CONFIG };
