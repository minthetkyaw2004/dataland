let val;
val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; // HTML collection
val = document.links[0];
val = document.links[3];
val = document.links[3].id;
val = document.links[3].className; // string
val = document.links[3].classList; // DOMTokenList
val = document.links[3].classList[0];
val = document.links[3].classList[1];


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList; // DOMTokenList
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList; // DOMTokenList
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].src;
val = document.images[0].getAttribute('src');
val = document.images[0].getAttribute('type');

val = document.scripts; // html collection
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute("src");
val = document.scripts[0].getAttribute("type");

console.log(val);

// change styling

// document.getElementById("tasktitle").style.backgroundColor = "green";
// document.getElementById("tasktitle").style.color = "#fff";
// document.getElementById("tasktitle").style.padding = "5px";

// change content

// document.getElementById('tasktitle').textContent = 'hello world';
// document.getElementById('tasktitle').innerText = 'hello world';
// document.getElementById('tasktitle').innerHTML = '<span style="color:blue;">Hello World</span>';


// call by class name
let lis = document.getElementsByClassName('list-group-item'); // html collection
console.log(lis);
console.log(lis[0]);
// lis[0].style.color='blue';
// lis.textContent = "have a visit";


// call by tag (element)
let litags = document.getElementsByTagName('li');
// console.log(litags);
// console.log(litags[3]);
// litags[0].style.color = "red";
// litags[1].innerText = "have to cook";


// querySelector()
// console.log(document.querySelector('#tasktitle'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h3'));


// console.log(document.querySelector('li'));
// document.querySelector('li').style.color="red";
// document.querySelector('ul li').style.color="blue";
// document.querySelector('ul li:nth-child(odd)').style.background="silver";
// document.querySelector('ul li:nth-child(even)').style.background="grey";
// document.querySelector('ul li:last-of-type').style.color="green";
// document.querySelector('ul li:nth-of-type(3)').innerHTML='Have to read';


const listitems = document.querySelector("ul").getElementsByClassName('list-group-item');
// const listitems = document.querySelector('ul').querySelector('list-group-item');
// console.log(listitems);

let arritems = Array.from(listitems);
// console.log(typeof arritems);

// arritems.forEach(function(arritem,idx){
// 	// console.log(arritem);

// 	// arritem.textContent = "hello";
// 	arritem.innerText = `${idx} : Hello`;
// });



// querySelectorAll
let its = document.querySelector('ul.list-group li.list-group-item');
// console.log(its);

let itms = document.querySelectorAll('ul.list-group li.list-group-item'); // NodeList
// console.log(itms);
// console.log(itms[3]);

// itms.forEach(function(itm, idx){
// 	// console.log(itm);
// 	// itm.textContent = "Hello";
// 	itm.innerText = `${idx} : Hello World`
// })


const liodds = document.querySelectorAll('li:nth-child(odd');
console.log(liodds);
const lievens = document.querySelectorAll('li:nth-child(even)');
console.log(lievens);

liodds.forEach(function(liodd,idx){
	// console.log(liodd);
	liodd.style.backgroundColor = "grey";
});

for(let i=0; i< lievens.length; i++){
	// console.log(i);

	// console.log(lievens[i]);

	lievens[i].style.backgroundColor = "silver";
};



// children

let chl;

const getul = document.querySelector("ul.list-group");
// console.log(getul);
const getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);

chl = getul.children; // HTML collection
// console.log(chl);
// console.log(chl[3]);

// getul.children[1].innerText = "Have to eat";
// getul.children[1].innerHtml = `Have to read <a href="#" id="deleteitem2" class="delete-item"><i class="far fa-trash-alt"></i></a>`

// children to children

chl = getul.children;
chl = getul.children[1];
chl = getul.children[1].children;
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute("href");
		// ul 		li 			a 		HTML Collection
// chl = getul.children[1].children[0].children;
		// ul 		li 			a 		i
chl = getul.children[1].children[0].children[0];

// console.log(chl);


// First Element Child

// chl = getul.querySelector('li');
chl = getul.firstElementChild;
// console.log(chl);

// Last Element Child
// chl = getul.querySelector('li:last-child');
chl = getul.lastElementChild;
// console.log(chl);


// Child Element Count
chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;
// console.log(chl);


// Parent Element

const getfirstli = document.querySelector('li.list-group-item:first-child');
// console.log(getfirstli);

let par = getfirstli.parentElement;
// console.log(par);


// Next Element Sibling

		// list item 1  list item 2
let sbl = getfirstli.nextElementSibling;
		// list item 1  list item 2

	sbl = getfirstli.nextElementSibling.nextElementSibling;
		// list item 1   list item 2     list item 3       list item 4        list item 5
	sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling; 

console.log(sbl);


// Previous Element Sibling
		// list item 1    	list item 2   		list item 3     	list item 2
	let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
	// console.log(psbl);



// Create Element

const newli = document.createElement("li");

// ADD id

newli.id="new-item";

// Add Class
// newli.className = "list-group-item";
// newli.className = "delete-me";
newli.className = "list list-group-item delete-me";
newli.classList.add("delete-1","hide-me");

// Add Attribute = setAttribute(qualifiedName, value);
newli.setAttribute("title","newitem");

// newli.textContent = "hi";
// mewli.innerText = "hey";
// newli.innerHTML = `List Item 6 <a href="#" id="deleteitem3" class="delete-item"><i class="far fa-trash-alt"></i></a>`;

// create text node

newli.appendChild(document.createTextNode('save myanmar'));
console.log(newli);

// <li id="new-item" class="list-group-item" title="newitem">save myanmar</li>

const newlink = document.createElement('a');

// add href
newlink.href = "#";

// add new id
newlink.id = "delete-item6";

// add class
newlink.classList.add('delete-item');

newlink.innerHTML = `<i class="far fa-trash-alt"></i>`;

console.log(newlink);
// console.log(newli);

// <a href="#" id="delete-item6" class="delete-item"></a>
newli.appendChild(newlink);
// console.log(newli);

// document.querySelector('ul list-group').appendChild(newli);

// Replace Element

const newtitleh2 = document.createElement('h2');

newtitleh2.id = "tasktitle";

var newcaption = document.createTextNode('All My Lists');
newtitleh2.appendChild(newcaption);

console.log(newtitleh2);



const oldtitleh4 = document.getElementById('tasktitle');
console.log(oldtitleh4);

// replaceChild(new,old);
const getcardaction = document.querySelector('.card-action');
getcardaction.replaceChild(newtitleh2,oldtitleh4);



// remove element (self)
const getlis = document.querySelectorAll('li'); // Node List
// console.log(getlis);
// console.log(getlis[0]);
// getlis[0].remove();
// getlis[5].remove();


// Remove Child Element
const getfirstul = document.querySelector('ul');
// console.log(getfirstul);

// getfirstul.remove();

// getfirstul.removeChild(getlis[5]);
// getfirstul.removeChild(getlis[0]);

// className vs classList

const firstli = document.querySelector("li:first-child");
console.log(firstli);
// console.log(firstli.children); // HTML collection
// console.log(firstli.children[0]);

let firstlink;
						//a
firstlink = firstli.children[0];
console.log(firstli.children[0].className);

// a
// firstlink.className = "delete-myself";
// firstlink.className = "delete-item delete-myself";
// firstlink.className = "delete-item delete-myself delete-me";

// firstlink = firstlink.classList; // DOM Token List
// console.log(firstlink);
// console.log(firstlink[0]);
// console.log(firstlink[1]);

// a
// firstlink.classList.add("delete-ourselves");
// firstlink.classList.add("delete-myself");
// firstlink.classList.add("delete-myself", "delete-ourselves");

// firstlink.className = "delete-item delete-me delete-myself delete-ourselves";
// firstlink.className = "delete-item delete-me delete-myself";

// firstlink.classList.remove("delete-myself");
// firstlink.classList.remove("delete-myself", "delete-ourselves");


// replace(old,new);
// firstlink.className = "delete-item delete-myself";
// firstlink.classList.replace("delete-me","delete-myself");
// firstlink.classList.replace("delete-item","delete-ourselves");

if(firstlink.classList.contains("delete-me")){
	console.log("yes");
}else{
	console.log("no");
}

if(firstlink.className === "delete-item delete-me"){
	console.log("yes");
}else{
	console.log("no");
}
console.log(firstlink.className);



// Attribute

let getattr = firstlink.href;
getattr = firstlink.getAttribute("href");
// console.log(getattr);
firstlink.setAttribute("href","https://www.google.com");

getattr = firstlink.hasAttribute("href");
console.log(getattr); // true
getattr = firstlink.hasAttribute("title");
console.log(getattr); // false


// addEventListener(eventtype,function)
// const clearbtn = document.querySelector(".clear-tasks");

// Method 1
// clearbtn.addEventListener('click',function(e){
// 	// console.log('hay I am working');

// 	// console.log(e);
// 	// console.log(e.target);
// 	console.log(this); // this does not work on arrow function..return window

// 	e.preventDefault();

// 	let val;
// 	val = e.target.className;
// 	val = e.target.classList; // DOM Token Liist
// 	val = e.target.id;
// 	// console.log(val);
// 	e.target.innerText = "Finished";

// 	// event type
// 	val = e.type;

// 		// co ordinate event -- relative to window
// 	val = e.clientX;
// 	val = e.clientY;

// 		// co ordinate event -- relative to element
// 	val = e.offsetX;
// 	val = e.offsetY;
// 	console.log(val);
// });

// method 2
// clearbtn.addEventListener('click',myclick);
// function myclick(){
// 	console.log('hay I am working');
// };



// Mouse event

const clbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const cardactionarea = document.querySelector('.card-action');
const headingh2 = document.querySelector('h2');

//single click
// clbtn.addEventListener('click',mouseeventtype);

//double click
// clbtn.addEventListener('dblclick',mouseeventtype);

// mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

// mouseup
// clbtn.addEventListener('mouseup',mouseeventtype);

// mouseenter
// cardactionarea.addEventListener('mouseenter',mouseeventtype);

// mouseover ( action to each child mouse hover )
// card.addEventListener('mouseover',mouseeventtype);

// mouseleave
// card.addEventListener('mouseleave', mouseeventtype);

// mouseout ( action to each childs mouse leave )
// card.addEventListener('mouseout', mouseeventtype);

// mousemove
// card.addEventListener('mousemove', mouseeventtype);

// function mouseeventtype(e){
// 	console.log(`Event type = ` + e.type);

// 	// headingh2.textContent = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;
// 	headingh2.textContent = `mouseX : ${e.offsetX} MouseY: ${e.offsetY}`;

// 	// document.body.style.background = `rgba(${e.offsetX}, ${e.offsetY})`;
// };


const formel = document.querySelector('form');

formel.addEventListener('submit' , inputeventtype);

function inputeventtype(e){
	console.log('event type = '+ e.type);
	e.preventDefault();
}

const inputtask = document.getElementById('task');
const geth2 = document.querySelector('h2');


// document

document.body.addEventListener('click',evendeleg);

function evendeleg(e){
	// console.log('i am working');
	// console.log(e.target);

		// i
	// if(e.target.className === 'far fa-trash-alt'){
	// 	console.log('hay i am trash can');
	// }

		// i a
	if(e.target.parentElement.className === 'delete-item'){
		// console.log('hay i am working by a tag');

			// i
		// e.target.remove();

			// i 		a
		// e.target.parentElement.remove();

			// i 	a 	li
		e.target.parentElement.parentElement.remove();

	}

	e.preventDefault();

}

document.querySelector('form').addEventListener('submit',function(e){

	e.preventDefault();

	// console.log('hay i am working');

	const getnewtask = document.getElementById('task').value;

	let alltasks;

	if(localStorage.getItem('mytasks') === null){
		alltasks = [];
	}else{
		alltasks = JSON.parse(localStorage.getItem('mytasks'));
	}

	alltasks.push(getnewtask);

	localStorage.setItem('mytasks',JSON.stringify(alltasks));

	console.log(alltasks);

});


// let getalltasks = localStorage.getItem('mytasks');
// 	getalltasks = JSON.parse(getalltasks);
// console.log(getalltasks);


// getalltasks.forEach(function(getalltask){
// 	console.log(getnewtask);
// })