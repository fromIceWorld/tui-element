function config(config: any) {
  return function (target: any) {
    target['configurable'] = config;
    Object.defineProperty(target, 'configurable', {
      get() {
        return JSON.parse(JSON.stringify(config));
      },
      set(value) {
        console.error('组件配置项[configurable]不允许更改!🦔');
      },
    });
    return target;
  };
}

export { config };
