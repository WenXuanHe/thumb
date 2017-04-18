export default class PraiseButton{
	praiseAction(){
		return ++this.praise;
	}
	
	getPraiseCount(){
		return this.praise;
	}
}
