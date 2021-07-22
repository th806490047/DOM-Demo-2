
console.log('此处进行js后，#test>.red 元素里的内容会变成红色')
const div = dom.find('#test>.red')[0]
dom.style(div, 'color', 'red')
console.log("___________________________________________")
console.log('以下就是each遍历指定元素并展示出来')
const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素