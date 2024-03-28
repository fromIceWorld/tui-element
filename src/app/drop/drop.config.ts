const TUI_DROP_CONFIG = {
  className: 'TuiDropComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        width: {
          type: 'string',
          value: '100%',
        },
        options: {
          type: 'json',
          value:
            '[{"label":"关联到资产","value":"关联到资产","disabled":true},{"label":"关联到网络","value":"关联到网络"},{"label":"关联到其他","value":"关联到其他"}]',
        },
        filter: {
          type: 'boolean',
          value: false,
        },
      },
    },
  ],
  component: {
    event: [{ label: 'selectChange', value: 'selectChange' }],
    methods: [],
    data: ['value', 'options'],
    params: [],
  },
};
export { TUI_DROP_CONFIG };
