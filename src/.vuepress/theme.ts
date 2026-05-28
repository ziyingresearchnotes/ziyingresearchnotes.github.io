import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://ziyingresearchnotes.github.io",

  author: {
    name: "Ziying",
  },

  logo: "/avatar.jpg",

  repo: "ZiyingResearchNotes/ziyingresearchnotes.github.io",

  docsDir: "src",

  navbar,
  sidebar,

  footer: "© Ziying Research Notes",
  displayFooter: true,

  blog: {
    name: "Ziying",
    avatar: "/avatar.png",
    description: "记录临床、科研与成长中的思考",
    intro: "/intro/",
    medias: {
      Email: "mailto:2022151620247@stu.scu.edu.cn",
      GitHub: "https://github.com/ZiyingResearchNotes/ziyingresearchnotes.github.io",
    },
  },

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },
  encrypt: {
    config: {
      "/research/presentations/goal-mentor/Xingwang.html": {
        hint: "导师生日",
        password: "0917",
      },
      "/research/presentations/goal-mentor/Fangma.html": {
        hint: "与马芳老师通话日期",
        password: "0408",
      },
            "/clinical/cases/Death-discussion.html": {
        hint: "PBL组号",
        password: "A202",
      },
    },
  },
  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard","PDF"],
    },
    icon: {
      prefix: "fa6-solid:",
    },
  },
});

