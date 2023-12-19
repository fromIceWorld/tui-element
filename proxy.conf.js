const PROXY_CONFIG = [
  {
    context: ["/tui-element"],
    // target: "http://10.63.86.10:21090",
    // target: "http://10.63.86.75:30000",
    target: "http://10.63.86.75:30000",
    // target: "http://10.7.212.153:21090",
    secure: false,
    changeOrigin: false,
  },
];

module.exports = PROXY_CONFIG;
