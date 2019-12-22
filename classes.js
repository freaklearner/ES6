class human{
	constructor(gender){
		this.Gender = gender;
	}

	printGender(){
		console.log("Gender: "+this.Gender);
	}
}



class Person extends human{
	constructor(name, gender){
		super(gender);
		this.Name = name;
	}
// No need to use function keyword in class while defining method member of the class
	printName(){
		console.log("Name: "+this.Name);
	}
}


const person = new Person('test_name', "Male");
person.printName();
person.printGender();