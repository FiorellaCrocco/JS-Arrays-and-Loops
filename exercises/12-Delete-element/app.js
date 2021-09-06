var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'];

function deletePerson(personName) {
	//your code here
	let newPeople = [];

	/* for (let p = 0; p < people.length; p++) {
		if (personName !== people[p]){
			newPeople.push(people[p]);

		}

	} */

	for(let name of people){
		if (personName !== name){
			newPeople.push(name);
		}
	}

	return newPeople;
	
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));