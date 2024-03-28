const TUI_PAGINATOR_CONFIG = {
  className: 'TuiPaginatorComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        rows: {
          type: 'number',
          value: 10,
        },
        totalRecords: {
          type: 'number',
          value: 0,
        },
        displayRecords: {
          type: 'boolean',
          value: true,
        },
        displayPages: {
          type: 'boolean',
          value: true,
        },
        jumpToPage: {
          type: 'boolean',
          value: true,
        },
        displayPole: {
          type: 'boolean',
          value: true,
        },
      },
    },
  ],
  component: {
    event: [{ label: 'pageChange', value: 'pageChange' }],
    methods: [],
    data: ['total', 'pageIndex', 'rows'],
    params: [],
  },
};
export { TUI_PAGINATOR_CONFIG };
