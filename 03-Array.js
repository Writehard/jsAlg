//1-一个数组
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//一个函数
function isEven(num){
    return num % 2 === 0?true : false;
}
//收到返回值为 flase 退出 
let res =  nums.every(isEven)
//some 收到true 就退出
let result = nums.some(isEven)
//map
const myMap = nums.map(isEven)
//filter
const filterNum = nums.filter(isEven)
//reduce
const reduceNum = nums.reduce((prev,cur)=>{
    return prev+cur
})
console.log(reduceNum)