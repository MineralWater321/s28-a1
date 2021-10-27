
//3. Create a fetch request using the GET method that will retrieve all the to do list items from JSON Placeholder API (https://jsonplaceholder.typicode.com/todos/).

async function fetchData(){
	let result = await fetch('https://jsonplaceholder.typicode.com/todos');
	let json = await result.json()
	console.log(json);
}

fetchData();

//4. Using the data retrieved, create an array using the map method to return just the title of every item and print the result in the console.

async function titleData(){
	let result = await fetch('https://jsonplaceholder.typicode.com/todos');
	let json = await result.json()
	let onlyTitles = await json.map(function(getTitle) {
		let title = getTitle.title;
		return title;
	});
	console.log(onlyTitles);
};
titleData();

//5. Create a fetch request using the GET method that will retrieve a single to do list item from JSON Placeholder API.
//6. Using the data retrieved, print a message in the console that will provide the title and status of the to do list item.

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json));

//6. Using the data retrieved, print a message in the console that will provide the title and status of the to do list item.
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(`The item "${json.title}" on the list has a status of ${json.completed}`));

//7. Create a fetch request using the POST method that will create a to do list item using the JSON Placeholder API.
fetch('https://jsonplaceholder.typicode.com/todos',{
	method: 'POST',
	headers: {
		'Content-type': 'application/json'
	},
	body: JSON.stringify({
		title: 'Created To Do List Item',
		completed: false,
		userID: 1
	})
}).then((response) => response.json()).then((json) => console.log(json));

//8. Create a fetch request using the PUT method that will update a to do list item using the JSON Placeholder API.
/*9. Update a to do list item by changing the data structure to contain the following properties:
- Title
- Description
- Status
- Date Completed
- User ID
*/
fetch('https://jsonplaceholder.typicode.com/todos/1', {
	method: 'PUT',
	headers: {
		'Content-type': 'application/json'
	},
	body: JSON.stringify({
		id: 1,
		title: 'Updated To Do List Item',
		dateCompleted: 'Pending',
		description: 'To update the my to do list with a different data structure',
		userID: 1
	})
}).then((response) => response.json()).then((json) => console.log(json));



// 10. Create a fetch request using the PATCH method that will update a to do list item using the JSON Placeholder API.
// 11. Update a to do list item by changing the status to complete and add a date when the status was changed.

fetch('https://jsonplaceholder.typicode.com/todos/1', {
	method: 'PUT',
	headers: {
		'Content-type': 'application/json'
	},
	body: JSON.stringify({
		completed: false,
		status: "complete",
		dateCompleted: "07/09/21",
		title: "delectus aut autem",
		userId: 1,
		id: 1
	})
}).then((response) => response.json()).then((json) => console.log(json));
// 12. Create a fetch request using the DELETE method that will delete an item using the JSON Placeholder API.
fetch('https://jsonplaceholder.typicode.com/todos/1', {
	method: 'DELETE'
})