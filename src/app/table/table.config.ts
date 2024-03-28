const TUI_TABLE_CONFIG = {
  className: 'TuiTableComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        headers: {
          type: 'headers',
          value: [
            { label: '设备名称', key: 'name', width: '100px' },
            { label: '所属安全域', key: 'belong' },
            { label: 'IP地址', key: 'IP', width: '300px' },
            {
              label: '风险等级',
              key: 'riskLevel',
              width: '20%',
            },
          ],
        },
        slots: {
          type: 'slots',
          note: '当前slots与headers一一对应',
          value: [[], [], [], []],
        },
        tableData: {
          type: 'json',
          value:
            '[{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.66.66.66","riskLevel":"严重"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.66.87.66","riskLevel":"高危"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.45.66.66","riskLevel":"低危"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.66.64.66","riskLevel":"严重"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.66.03.66","riskLevel":"严重"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.75.66.66","riskLevel":"低危"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.66.66.40","riskLevel":"低危"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.66.86.66","riskLevel":"低危"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.96.66.66","riskLevel":"低危"},{"name":"设备资产A","belong":"/设备资产/安全域A","IP":"10.66.66.56","riskLevel":"低危"}]',
        },
        leftType: {
          type: 'select',
          options: [
            { label: 'default', value: '' },
            { label: 'checkbox', value: 'checkbox' },
          ],
          value: '',
        },
      },
    },
  ],
  component: {
    event: [],
    methods: [],
    data: ['tableData', 'rowData', 'selectedItems'],
  },
};
export { TUI_TABLE_CONFIG };
