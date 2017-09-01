/*
 * 此JS文件只要是解决webpack打包jquery.js和依赖jquery的插件的问题
 */
"use strict";
import $ from "./jquery.min";
window.$ = $;
window.jQuery = $;
export default $;