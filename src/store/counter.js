// 计数器的mobx store
import { observable,action } from 'mobx';

class Counter {
	@observable counter; // 注册变量，使其成为可检测的

	constructor() {
		this.counter =0
	}

	@action // 方法推荐用箭头函数的形式
	add = ()=> this.counter += 1;
	reduce = ()=> this.counter -=1;
}

const counterStore = new Counter();

export default counterStore