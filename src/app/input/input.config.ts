const TUI_INPUT_CONFIG = {
  className: 'TuiInputComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        width: {
          type: 'string',
          value: '100%',
        },
        value: {
          type: 'string',
          value: '',
        },
        placeholder: {
          type: 'string',
          value: '请输入搜索内容',
        },
        empty: {
          type: 'boolean',
          value: false,
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
export { TUI_INPUT_CONFIG };
