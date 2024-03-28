const TUI_SWITCH_CONFIG = {
  className: 'TuiSwitchComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        checked: {
          type: 'boolean',
          value: false,
        },
        checkedYes: {
          type: 'string',
          value: '',
        },
        checkedNo: {
          type: 'string',
          value: '',
        },
      },
    },
  ],
  component: {
    input: ['checked', 'checkedYes', 'checkedNo'],
    event: [{ label: 'change', value: 'change' }],
    methods: [],
    data: ['checked'],
  },
};
export { TUI_SWITCH_CONFIG };
