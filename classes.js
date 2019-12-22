class human{
	constructor(gender){
		this.Gender = gender;
	}

// No need to use function keyword in class while defining method member of the class
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

	printInfo(){
		//Always need to use 'this' keyword while working with class members weather these members are inherited or not
		// this.printName();
		// this.printGender();
		console.log("Name: "+this.Name);
		console.log("Gender: "+this.Gender);
	}
}


const person = new Person('test_name', "Male");
// person.printName();
// person.printGender();
person.printInfo();