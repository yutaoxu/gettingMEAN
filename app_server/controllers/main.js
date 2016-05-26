// 以下函数会被 ../routes/index.js 引用

module.exports.index = (req, res) => {
  res.render('index', { title: 'Express' });
}