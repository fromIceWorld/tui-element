// 用于将组件发布到数据库系统中。

/**
 * view 节点的范围 [1:只在视图区, 2:只在关系区, 3:即在视图区也在关系区]
 */
const components = [
  {
    id: "tui-button",
    type: "node",
    icon: "#icon-anniu1",
    title: `按钮:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "基础的按钮组件",
    component: "TuiButtonComponent",
  },
  {
    id: "tui-toggle-button",
    type: "node",
    icon: "#icon-radioBoxList",
    title: `切换按钮:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "切换按钮",
    component: "TuiToggleButtonComponent",
  },
  {
    id: "tui-input",
    type: "node",
    icon: "#icon-wenbenshurukuang",
    title: `输入框:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "输入组件",
    component: "TuiInputComponent",
  },
  {
    id: "tui-textarea",
    type: "node",
    icon: "#icon-duohangshurukuang",
    title: `多行输入框:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "多行输入框",
    component: "TuiTextareaComponent",
  },
  {
    id: "tui-spinner",
    type: "node",
    icon: "#icon-shuzishurukuang",
    title: `数字输入框:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "数字输入框",
    component: "TuiSpinnerComponent",
  },
  {
    id: "tui-checkbox",
    type: "node",
    icon: "#icon-checkbox-checked",
    title: `多选框:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "多选框",
    component: "TuiCheckboxComponent",
  },
  {
    id: "tui-radio",
    type: "node",
    icon: "#icon-radioBoxList",
    title: `单选框:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "单选框",
    component: "TuiRadioComponent",
  },
  {
    id: "tui-drop",
    type: "node",
    icon: "#icon-xialakuang",
    title: `下拉框:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "下拉框",
    component: "TuiDropComponent",
  },
  {
    id: "tui-calendar",
    type: "node",
    icon: "#icon-time-selector",
    title: `时间选择器:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "多行输时间选择器框",
    component: "TuiCalendarComponent",
  },
  {
    id: "tui-switch",
    type: "node",
    icon: "#icon-switch",
    title: `switch:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "switch",
    component: "TuiSwitchComponent",
  },
  {
    id: "tui-table",
    type: "node",
    icon: "#icon-biaoge",
    title: `表格:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "表格",
    component: "TuiTableComponent",
  },
  {
    id: "tui-paginator",
    type: "node",
    icon: "#icon-fenyeqi",
    title: `分页:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "分页",
    component: "TuiPaginatorComponent",
  },
  {
    id: "tui-tree",
    type: "node",
    icon: "#icon-shuzhuangtu",
    title: `树:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "树",
    component: "TuiTreeComponent",
  },
  {
    id: "tui-tag",
    type: "node",
    icon: "#icon-Tag",
    title: `标签:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "标签",
    component: "TuiTagComponent",
  },
  {
    id: "tui-title",
    type: "node",
    icon: "#icon-a-titleoptimization",
    title: `title:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "title",
    component: "TuiTitleComponent",
  },
  {
    id: "tui-topn",
    type: "node",
    icon: "#icon-a-titleoptimization",
    title: `topN:
                 Angular@12 + @tui/pangu2.1.2`,
    color: "#dd0031",
    view: 0,
    family: "base",
    des: "topN",
    component: "TuiTopnComponent",
  },
];
const fs = require("fs"),
  path = require("path"),
  request = require("request");
const filesName = [
  { name: "main.js", decorator: { defer: true } },
  { name: "polyfills.js", decorator: { defer: true } },
  "styles.css",
];
const area = "tui",
  folderPath = "./dist";
components.map((item) => {
  item["filesName"] = filesName;
  item["area"] = area;
});

let options = {
  url: "http://127.0.0.1:3000/upload",
  method: "POST",
  headers: {
    "content-type": "multipart/form-data",
  },
  formData: {
    files: [],
    area,
    components: JSON.stringify(components),
  },
};

// 递归遍历文件夹中的所有文件
function uploadFolder(folderPath, dir) {
  const files = fs.readdirSync(folderPath);
  files.forEach((file) => {
    const filePath = folderPath + "/" + file;
    // 判断是否为文件夹
    if (fs.statSync(filePath).isDirectory()) {
      // 递归上传子文件夹
      uploadFolder(filePath, dir + "/" + file);
    } else {
      // 上传文件
      uploadFile(filePath, dir, file);
    }
  });
}

// 缓存上传文件
function uploadFile(filePath, dir, fileName) {
  const content = fs.readFileSync(path.resolve(__dirname, filePath));
  options.formData.files.push({
    content: Buffer.from(content).toString(),
    dir,
    fileName,
  });
}
// 将文件缓存
uploadFolder(folderPath, "");
console.log("共上传文件数：", options.formData.files.length);
//@ts-ignore
options.formData.files = JSON.stringify(options.formData.files);
request(options, (err, res, body) => {
  if (res.statusCode === 200) {
    console.log("上传完成");
  } else {
    console.log(body);
  }
});
