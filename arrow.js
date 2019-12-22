function printMyName(name){
	console.log(name);
}

// Arrow Function
const printName = (name)=>{
	console.log(name);
}

//Arrow with one parameter can be written without paranthesis
const funcWithOneParam = name=>{
	console.log(name);
}

const multiply = number =>{
	return number * 2;
}

//Arrow function with just return statement can written like this without return keyword
const square = number => number * number;


const cube = (number)=>{
	return number * number * number;
}