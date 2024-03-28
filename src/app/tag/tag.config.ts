const TUI_TAG_CONFIG = {
  className: 'TuiTagComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        tags: {
          type: 'json',
          value:
            '[{"lable":"告警类型A","tagColor":"default"},{"lable":"告警类型B","tagColor":"success"},{"lable":"告警类型C","tagColor":"processing"},{"lable":"告警类型D","tagColor":"warning"},{"lable":"自定义颜色","tagColor":"#ee82ee"}]',
        },
        tagMode: {
          type: 'select',
          options: [
            { label: 'default', value: 'default' },
            { label: 'checkable', value: 'checkable' },
            { label: 'closeable', value: 'closeable' },
          ],
          value: 'default',
        },
      },
    },
  ],
  component: {
    input: ['tags'],
    event: [],
    methods: [],
    data: ['tags'],
  },
};
export { TUI_TAG_CONFIG };
