import './common/jquery.min.js';

export default class PraiseButton{

	constructor(num, elem){
		this.num = num;
		this.elem = elem;
	}

	//加一
	addOne(){
		return ++this.num;
	}

	getPraiseCount(){
		return this.num;
	}
	
	//这个动作执行加一的步骤，返回promise，把动作的执行权返回回去
	praiseClick(elem){
		$(this.elem).off('click').on('click', ()=>{
			this.addOne();
			this.render(elem);
		});
	}

	//新建一个动作执行渲染页面，把动作分开
	render(elem){
		$(elem).text(this.num);
	}
}
