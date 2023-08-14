import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "book",
      prefix: "Notebook/",
      link: "Notebook/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
        {
      text: "Study",
      icon: "book",
      prefix: "Study/",
      children: "structure",
    },
    "intro",
  ],
});
