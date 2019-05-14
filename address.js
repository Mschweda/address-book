const newObj = {};
function get(){
	fetch('https://dog.ceo/api/breeds/list')
	.then( response => response.json())
	.then( data => {
		// newObj.push({
		// 	'name':data.results["0"].name.first, 'picture':data.results["0"].picture.large
		// })
		// conseol.log(newObj)
		newArr.push(data);
		console.log(newArr)
		for(let index = 0; index < newaArr.length; index++){
		const secondName = newArr[i].results["0"].name.first;
		
		// console.log("First name: ", newArray["0"].results["0"].name.first)
firstName.innerHTML = `
		user name: ${secondName}
		`
		}
	});

	.catch( err => console.log("we have an error",err))
	.finally( ()=> stopTheWheel())
}

console.log("entire new array", newArray);
console.log("just the name", newArray[0]);


