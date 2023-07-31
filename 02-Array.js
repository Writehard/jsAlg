let arr = [1,2,3,4,5,6,7]


// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i+1]
// }
// console.log(arr.length)

/*
    第一个元素虽然被删除了，但是数组的长度没有变化优化一下
**Array.prototype.reIndex = function(myArray){
    const newArray = []
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] !== undefined){
            newArray.push(myArray[i])
        }
    }
    return newArray
}
//手动删除第一个元素并排序
Array.prototype.removeFirst = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i+1]
    }
    return this.reIndex(this);
}
*/
//删除第一个元素
arr.shift()
//splice 删除 添加 插入 修改
arr.splice(0,1,2)
//插入
arr.splice(6,0,8,9)
/*
**  二维数组
│ (index) │ 0  │ 1  │ 2  │ 3  │ 4  │ 5  │
├─────────┼────┼────┼────┼────┼────┼────┤
│    0    │ 72 │ 32 │ 45 │ 56 │ 85 │ 98 │
│    1    │ 89 │ 82 │ 96 │ 12 │ 13 │ 18 │
*/
let temp = []
temp[0] = [72, 32, 45, 56, 85, 98]
temp[1] = [89, 82, 96, 12, 13, 18]
/*
**三维数组
*/
const matrix3x3x3 = [];
for(let i = 0; i< 3; i++){
    matrix3x3x3[i] = [];
    for(let j = 0; j< 3; j++){
        matrix3x3x3[i][j] = [];
        for(let k = 0; k< 3; k++){
            matrix3x3x3[i][j][k] = 0;
        }
    }
}

console.log(matrix3x3x3)