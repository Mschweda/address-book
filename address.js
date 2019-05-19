alert('hello');
const userArray =[];
const eachUser = document.querySelector(".eachUser")
class user {
	constructor(name, image){
		this.name = name
		this.image = image
	}
}
const newArr = [];
 function get(){
	fetch('https://randomuser.me/api/')
 	.then(response => response.json())
 	.then(data => {
		 data.results.forEach(function(element){
			 let name  = element.name.first;
			 let image = element.picture.large;
			 userArray.push(new user(name, image));
		 });
	});
		const createDom = (name, picture) => {
			getElementById('name')name.innerHTML = `
			user name: ${secondName}
			<img src=${picture}
			`
		}
		
	
		
		
		 
	.catch( error => console.log("we have an error:", error))
 	.finally( ()=> console.log("you suck"))
  };

 }	
