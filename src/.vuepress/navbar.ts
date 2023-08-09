import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: []
  },
]);
