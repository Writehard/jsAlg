class Stack {
    constructor(){
        this.item = [];
    }
    //添加
    push(element){
        this.item.push(element);
    }
    //删除
    pop(){
        return this.item.pop();
    }
    //查看栈顶元素
    peek(){
        return this.item[this.item.length - 1]
    }
    //判断栈顶是否为空
    isEmpty(){
        return this.item.length === 0;
    }
    size(){
        return this.item.length;
    }
    //清空栈
    clear(){
        this.item.length = 0;
    }
}
const st = new Stack()
st.push(1);
st.push(2);
st.push(3);
st.pop()
st.clear()
console.log(st)
