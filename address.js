let userId = 0;
(function(){
	const userArray =[];
	const allUsers = document.querySelector("#user");


class user {
	constructor(firstName, lastName, image, phone, email, dob, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.image = image;
		this.phone = phone;
		this.email = email;
		this.dob = dob;
		this.age = age;
	}
}

 
	fetch('https://randomuser.me/api/?results=50')
 	.then(response => response.json())
 	.then(data => {
		 data.results.forEach(function(element){
			 let firstName  = element.name.first;
			 let lastName = element.name.last
			 let image = element.picture.large;
			 let phone = element.phone;
			 let email = element.email;
			 let dob = element.dob.age;
			 let age = element.dob.age
			 userArray.push(new user(firstName, lastName, image, phone, email, dob, age));
			 createDom(firstName, lastName, image, phone, email, dob, age);
		 });
		 console.log(userArray)
	})

	
.catch( error  => console.log("Error!", error))
.finally( ()=> console.log("this function always runs"))
	  
const createDom = (firstName, lastName, image, phone, email, dob, age) => {
	allUsers.innerHTML += `
	<div class='eachUser' id='eachUser'>
		<div>
		${firstName} ${lastName}
		<br>
		<img src='${image}'/>
		</div>
		<button onClick='displayInfo(${userId})'>More info</button>
		<div id ='otherInfo${userId}' style='display:none;'>
		Phone Number: ${phone}
		<br>
		Email: ${email}
		<br>
		Date Of Birth: ${dob}
		<br>
		Age: ${age}
		</div>
	</div>
	`
}
}) ()





// const rp = require('request-promise');

// rp('https://jsonplaceholder.typicode.com/users/1')
//     .then((body) => {
//         const parsedData = JSON.parse(body);
// 		console.log(`${parsedData.name} lives in
// 		${parsedData.address.city}`);
//     })
//     .catch((err) => {
// 		console.log('Error!', err);
		
//     });