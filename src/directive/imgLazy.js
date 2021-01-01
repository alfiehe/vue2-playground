import baseImg from '@/assets/placeholder.png';

let timer = null;
// 创建一个监听器
const observer = new IntersectionObserver(entries => {
  // entries 是所有被监听对象的集合
  entries.forEach((entry) => {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      // 当被监听元素到临界值且未加载图片时触发
      !entry.target.isLoaded && showImage(entry.target, entry.target.data_src);
    }
  });
});
function showImage (el, imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    el.isLoaded = true;
  };
}

export default {
  inserted (el, binding, vnode) {
    clearTimeout(timer);
    // 初始化时展示默认图片
    el.src = baseImg;
    // 将需要加载的图片地址绑定在dom上
    el.data_src = binding.value;
    observer.observe(el);

    // 防抖，这里在组件卸载的时候停止监听
    const vm = vnode.context;
    timer = setTimeout(() => {
      vm.$on('hook:beforeDestroy', () => {
        observer.disconnect();
      });
    }, 20);
  },

  // 图片更新触发
  update (el, binding) {
    el.isLoaded = false;
    el.data_src = binding.value;
  }
};
