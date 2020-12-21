let arr = [2, 34, 53, 22, 56, 123]

let words = ['学习', '学习CSS', '学习JS', '学习NodeJs', '学习PHP', '学习HTML']
let title = '学习'

let state = words.some((item, index, array) => {
  return title.indexOf(item).subString(0, 2) == '学习' //找了就会返回1
})
console.log(state)
