/* global document,localStorage*/

function get_todos() {
	
	/*This function will search for saved data and will retrive them*/
	'use strict';
	var todos  = new Array;
	var todos_str = localStorage.getItem('todo');
	if (todos_str !== null) {
		todos = JSON.parse(todos_str);
		
	}
	return todos;
}
function add() {                               /*This func will add a data */
	var task = document.getElementById('task').value;
	
	var todos = get_todos();
	todos.push(task);
	localStorage.setItem('todo', JSON.stringify(todos));
	clearDefault(task);
	
	show();
	
	return false;
}
function clearDefault(a) {
	if (a.default == a.value) {a.value=""}
}

function remove() {
	var id = this.getAttribute('id');
	var todos = get_todos();
	todos.splice(id,1);
	localStorage.setItem('todo', JSON.stringify(todos));
	
	show();
	
	return false;
}

function show() {
	var todos = get_todos();
	
	var html = '<ul>';
	for(var i=0; i<todos.length; i++) {
		html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>'
	};
	html += '</ul>';
	
	document.getElementById('todos').innerHTML = html;
	
	var buttons = document.getElementsByClassName('remove');
	for(var j=0; j < buttons.length; j++) {
		buttons[j].addEventListener('click',remove);
	};
}
document.getElementById('add').addEventListener('click', add);
show();