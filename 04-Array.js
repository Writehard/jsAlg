//es6 
let nums = [1, 2, 3, 4, 5, 6];
/*
**1-for of
for (let num of nums) {
    console.log(num)
}
*/
/*
**@@iterator返回一个迭代器对象 value 值 done 表示状态
let iterator = nums[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
*/


/*
**数组的entries 返回的是 index value 
let entriesNums = nums.entries();
console.log(entriesNums.next().value);
console.log(entriesNums.next().value);
console.log(entriesNums.next().value);
console.log(entriesNums.next().value);
*/

/*
**数组keys返回的是索引 同理value
let keysNum = nums.keys()
console.log(keysNum.next().value);
console.log(keysNum.next().value);
console.log(keysNum.next().value);
console.log(keysNum.next().value);
*/
/*
**两个复制数组的方法 Array.from Array.of
*/
let num2 = Array.from(nums,x=> (x % 2 == 0));
let num3 = Array.of(...nums)
/*
**填充数组fill 静态值填充 copyWithin 类似于替换 将数组内的值copy到指定位置
*/
num3.fill(0)
let num4 = Array(6).fill(6)
nums.copyWithin(0, 3)
console.table(nums);