class Queue {
    //初始化队列
    constructor(){
        this.count = 0;
        this.lowestCount = 0
        this.items = {}
    }
    //添加元素
    enqueue(element){
        this.items[this.count] = element;
        this.count++; 
    }
    //删除元素
    dequeue(){
        //确认队列是否为空
        if(this.isEmpty()){
            return undefined
        }
        //使用变量保存删除的值
        let result = this.items[this.lowestCount];
        //删除元素
        delete this.items[this.lowestCount];
        //lowestCount递增向后滑动
        this.lowestCount++;
        return result;
    }
    //返回队列头元素
    peek(){
        return this.items[this.lowestCount]
    }
    //检查队列是否为空
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    //返回的是队列的长度
    size(){
        return this.count - this.lowestCount;
    }
    //清空队列
    clear(){
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString
    }
}
const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
console.log(q.peek());
