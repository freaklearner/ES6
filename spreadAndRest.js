
// '...' is spread and rest operation.
// As spread it merges alement of arraay to another array and properties of one object to another
let ar1 = [1,2,3];
//if array added diretly without spread operato then whole array will be treated as one element of new array
let ar3 = [ar1,4,5,6];// [[1,2,3],4,5,6]
console.log(ar3);

let ar2 = [...ar1,4,5,6]; //[1,2,3,4,5,6]
console.log(ar2);

// For object spread will take all the properties of object and add to another object.
const obj1 = {
	Name : "Smith"
};

const obj2 = {
	...obj1,
	Age : 25
};

console.log(obj2);//{Name: "Smith", Age: 25}



// '...' as Rest operator merge list of function arguments into array;
//with '...' you can pass as many parameters to below function as you want and all those parameters will become the member of 'args' array
function Sorting(...args){
	return args.sort();
}

console.log(Sorting(45,89,1,23,44));
