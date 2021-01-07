/*
 * @Author: alfiehe
 * @Date: 2021-01-07 08:06:44
 * @LastEditors: alfiehe
 * @LastEditTime: 2021-01-07 10:43:32
 * @Description: null
 * @FilePath: /vue2-playground/src/ui/index.js
 */
import UiButton from './button';
import UiInput from './input';

const COMPONENTS = [
  UiButton,
  UiInput
];

const UI = {};

UI.install = function (Vue, options) {
  if(options && options.components) {
    // 遍历外部use传进来的components
    options.components.forEach(cName => {
      console.log('===cName外部配置组件===', cName);
      // 遍历内部引入的组件
      COMPONENTS.forEach(c => {
        // 如果匹配上，全局注册该组件
        if(cName === c.name) {
          Vue.component(c.name, c);
        }
      });
    });
  } else {
    COMPONENTS.forEach(c => {
      Vue.component(c.name, c);
    });
  }
};

export default UI;
