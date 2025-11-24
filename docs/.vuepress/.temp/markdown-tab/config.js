import { CodeTabs } from "C:/Andy/C_Disk_Andy_WEBSTORM_WORKSPACE/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_b0cf87f45a9bd4d40e05ae01eff12580/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Andy/C_Disk_Andy_WEBSTORM_WORKSPACE/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_b0cf87f45a9bd4d40e05ae01eff12580/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Andy/C_Disk_Andy_WEBSTORM_WORKSPACE/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_b0cf87f45a9bd4d40e05ae01eff12580/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
