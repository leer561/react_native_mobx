// 计数器的mobx store
import {observable, action, configure} from 'mobx';

// 不允许在动作外部修改状态
configure({enforceActions: "observed"});

class Counter {
	@observable counter; // 注册变量，使其成为可检测的
	constructor() {
		this.counter = 0
	}

	@action // 方法推荐用箭头函数的形式
	add = () => this.counter += 1;
	@action
	reduce = () => this.counter -= 1;
}

const counterStore = new Counter();

export default counterStore