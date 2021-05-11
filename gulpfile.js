// gulp 的入口文件
// 通关 exports 导出函数成员的方式定义任务

exports.foo = done => {
  console.log('foo task working~')
  done() // 标识任务完成 最新版的 gulp 里面的每一个任务都是异步任务，需要调用回调函数去标识任务完成
}

exports.default = done => { // 默认任务
  console.log('default working~')
  done()
}

//------------ gulp4.0以前的任务注册的方法，现在依然可以使用，但是不推荐--------------
const gulp = require('gulp')

gulp.task('bar', done => {
  console.log('bar working!')
  done()
})
