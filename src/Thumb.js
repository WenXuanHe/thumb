import PraiseButton from './PraiseButton.js';
import './common/jquery.min.js';

class Thumb extends PraiseButton{
	constructor(praise = 0){
		super();
		this.praise = praise;
		this.events();
	}
	events(){
		$('#thumb').on('click', ()=>{
			$('#count').text(this.praiseAction());
		});
	}
}

////挂载到jquery上
$.extend({
	thumb : function(){
		return new Thumb;
	}
});

export default new Thumb;

