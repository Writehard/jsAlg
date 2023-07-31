//1-创建数组的方式
//使用Array
// const dayOfWeek = new Array()
const dayOfWeek = new Array(7)
const dayWeek = ['Sun','Mon','Tues', 'Wed', 'Thu', 'Fri', 'Sat']
//数组的遍历
for(let i = 0; i < dayWeek.length; i++){
    // console.log(dayWeek[i]);
}
//2-斐波那契数列
//feibonacci
const feibonacci = [];
feibonacci[0] = 1
feibonacci[1] = 1
for(let i = 0; i <1000; i++ ){
    feibonacci[i+2] = feibonacci[i+1] + feibonacci[i]
}
// console.log(feibonacci);
// for(let i = 0; i< feibonacci.length; i++ ){
//     console.log(feibonacci[i]);
// }
//3-添加元素
const number = [1,2,3,4,5,6,7,8,9,10]
number.length = 11
//push 将元素添加到末尾
number.push(12)
number.push(12,13,14)
//在数组开头插入元素
Array.prototype.insetHead = function (value) {
    //
    for (let i = this.length; i >0; i--) {
           this[i] = this[i - 1]
    }
    this[0] = value
};
number.insetHead(15)
console.log(number);