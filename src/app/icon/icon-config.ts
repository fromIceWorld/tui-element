const ICON_CONFIG = {
  className: 'TuiIconComponent', // 暴露出的组件class名称【组件可以注册到window上，并把配置同时暴露】
  html: [
    {
      name: '基础',
      config: {
        label: {
          type: 'string',
          value: '图标',
        },
        margin: {
          type: 'string',
          value: '0 2px',
        },
        textColor: {
          type: 'color',
          value: '#000000D9',
        },
        iconColor: {
          type: 'color',
          value: '#000000D9',
        },
        textFontSize: {
          type: 'string',
          value: '14',
          postfix: 'px',
        },
        iconFontSize: {
          type: 'string',
          value: '14',
          postfix: 'px',
        },
        icon: {
          type: 'icon-class',
          options: require('../../assets/json/icon.json'),
          value: '',
        },
        direction: {
          type: 'select',
          options: [
            { label: 'ltr', value: 'ltr' },
            { label: 'rtl', value: 'rtl' },
          ],
          value: 'ltr',
        },
      },
    },
  ],
  component: {
    input: ['label', 'icon'],
    event: [{ label: 'click', value: 'click' }],
    methods: [],
    data: ['label', 'icon'],
  },
};
export { ICON_CONFIG };
