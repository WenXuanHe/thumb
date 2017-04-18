var greeting = 'my name is ${name}, age ${age}, i am a ${job.jobName}';
var employee = {
	name:"hewenxuan",
	age:11,
	job:{
		jobName:'desinger',
		jobLevel:'senior'
	}
};

var result = greeting.render(employee);
String.prototype.render = function(obj){
	var p = /[^${}]+(?=})/g;
	greeting.replace(p, function(a){
		return employee[a];
	});
}

