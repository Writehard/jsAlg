//排序
let nums = [1, 2, 3, 4, 5, 6];
let num1 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
/*
**1-reverse反转数组 
        nums.reverse();
*/
nums.reverse();
/*
**2-sort 默认把元素认成字符串进行相互比较, 传递函数就可以正常排序了
        num1.sort()
        //升序
        num1.sort((a, b)=>a - b )
        //降序
        num1.sort((a, b)=>b - a )
        num1.sort(compare)

*/
function compare(a, b) {
    if(a < b){
        return -1;
    }
    if( a > b){
        return 1
    }
    return 0
    
}
console.log(num1);
/*
**3-自定义排序
*/

const friends = [
    {
        name:'John',
        age:18
    },
    {
        name:'Ana',
        age:10
    },
    {
        name:'Chirs',
        age:25
    }
]

function comparePerson(a, b) {
    if(a.age < b.age){
        return -1
    }
    if(a.age > b.age){
        return 1
    }
    return 0
}
friends.sort(comparePerson);
// console.log(friends)
/*
**
*/
let names = ['Ana', 'ana', 'John', 'john']
names.sort() //根据 ascii值进行排序的
// console.log(names);  //[ 'Ana', 'John', 'ana', 'john' ]
/*
**4-搜索 lastIndexOf - IndexOf 
*/
// console.log(friends.indexOf('John'));
/*
**5-搜索find findIndex find传递一个回调函数返回一个满足回调函数的值 findIndex返回的是值对应的索引
*/
function multipleOf13(element, index, array) {
    return (element % 13 === 0);
}
// console.log(num1.findIndex(multipleOf13)); 

/*
**6-includes 查看数组是否具有当前元素 有返回true 没有返回 false
*/
console.log(num1.includes(12));
/*
**7-数组输出为字符串toString
*/
console.log(num1.toString());


