module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5, // vant 官方根字体 37.5
      propList: ['*'], // 对全部属性进行转换
      selectorBlackList: ['.norem'] // 过滤 .norem 开头的选择器,不进行rem转换  
    }
  }
}
