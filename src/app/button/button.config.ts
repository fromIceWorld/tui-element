const BUTTON_CONFIG = {
  className: 'TuiButtonComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        label: {
          type: 'string',
          value: '确定',
        },
        width: {
          type: 'string',
          value: '100%',
        },
        type: {
          type: 'select',
          options: [
            { label: 'default', value: '' },
            { label: 'primary', value: 'ui-button-primary' },
            { label: 'pius', value: 'ui-button-pius' },
          ],
          value: '',
        },
        iconPos: {
          type: 'select',
          options: [
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
          ],
          value: 'left',
        },
        disabled: {
          type: 'boolean',
          value: false,
        },
        loading: {
          type: 'boolean',
          value: false,
        },
        rounded: {
          type: 'boolean',
          value: false,
        },
        icon: {
          type: 'icon-class',
          options: require('../../assets/json/icon.json'),
          value: '',
        },
        status: {
          type: 'select',
          options: [
            { label: 'default', value: '' },
            { label: 'success', value: 'ui-button-success' },
            { label: 'info', value: 'ui-button-info' },
            { label: 'warning', value: 'ui-button-warning' },
            { label: 'danger', value: 'ui-button-danger' },
          ],
          value: '',
        },
      },
    },
  ],
  component: {
    event: [{ label: 'click', value: 'click' }],
    methods: [
      { label: 'setLoading', value: 'setLoading' },
      { label: 'setNormal', value: 'setNormal' },
      { label: 'setDisabled', value: 'setDisabled' },
    ],
    data: ['label'],
  },
};
export { BUTTON_CONFIG };
