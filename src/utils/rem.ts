// rem 等比适配文件
// 基准
const baseSize = 37.5 // 与postcss的rootvalue一致

function setRem() {
  // sclae 比例值计算
  const scale = document.documentElement.clientWidth / 37.5
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

// init 
setRem()

// 改变窗口大小的时候重置 rem
window.onresize = function () {
  console.info('重置rem,因为改变了窗口大小');
  setRem()
}