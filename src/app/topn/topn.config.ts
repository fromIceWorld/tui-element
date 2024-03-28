const TUI_TOPN_CONFIG = {
  className: 'TuiTopnComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        data: {
          type: 'json',
          value:
            '[{"name":"上海市","value":6000},{"name":"河南省","value":4600},{"name":"广东省","value":4200},{"name":"湖北省","value":2000},{"name":"天津市","value":1800}]',
        },
      },
    },
  ],
  component: {
    event: [],
    methods: [],
    data: ['list'],
    params: [],
  },
};
export { TUI_TOPN_CONFIG };
