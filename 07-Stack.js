//基于对象的栈
class Stack {
    constructor(){
        this.count = 0;
        this.item = {};
    }
    //添加
    push(item){
        this.item[this.count] = item;
        this.count++;
    }
    //栈的大小
    size(){
        return this.count;
    }
    // 栈是否为空
    isEmpty(){
        return this.count === 0;
    }
    //删除元素
    pop(){
        // 判断栈是否为空，为空返回undefined
        if(this.isEmpty()){
            return undefined
        }
        this.count--;
        const result = this.item[this.count]
        delete this.item[this.count]
        return result
    }
    //返回栈顶元素
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item[this.count - 1]
    }
    //清空栈
    clear(){
        this.count = 0;
        this.item = {};
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.item[0]}`
        for(let i = 1; i < this.count ; i++){
            objString = `${objString}, ${this.item[i]}`
        }
        return objString
    }
}
/*
** 使用类的问题 
    1-不能声明私有的属性
    解决方法
    1-使用this._count = 0
    2-使用Symbol 使用 getOwnPropertybymols(stack) 会破坏栈的特性
    3-使用weakMap
*/
/*
**进制转换 十进制转换成二进制
*/
function decimalToBinary(decNumber){
    const remStack = new Stack();
    let number = decNumber;
    //二进制对应的值
    let rem ;
    let binaryString = '';
    while(number > 0){
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString()
    }
    return binaryString

}
console.log(decimalToBinary(10));

