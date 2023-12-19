const TUI_CALENDAR_CONFIG = {
  className: 'TuiCalendarComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
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
export { TUI_CALENDAR_CONFIG };
