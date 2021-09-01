var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'];

function deletePerson(personName) {
	//your code here
	let newPeople = [];

	for (p = people; p !== personName; p++) {
		newPeople.push(p)

	}
	return (newPeople);
	
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));