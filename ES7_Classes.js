class Human{
	// No need of Constructor
	Gender = 'male';

	//Use Arrow Function
	printGender = ()=>{
		console.log('Gender: '+ this.Gender);
	}
}

class Person extends Human{
	//No need to use 'this' here
	Name = 'Shub';
	Gender = 'female';

	printInfo =()=>{
		//But here you need 'this' in method to specify you accessng class data member
		console.log("Name: "+ this.Name);
		console.log("Gender: "+ this.Gender);
	}
}

const person = new Person();
person.printInfo();