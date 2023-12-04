/*let title=document.getElementById("header-title");
title.style.border="2px solid black";
let addedItems=document.getElementById("added");
addedItems.style.fontWeight='bold';
addedItems.style.color='green';
let makeBold=document.getElementById("items");
makeBold.style.fontWeight="bold";
//let item3=document.getElementsByClassName("list-group-item");
//item3[2].style.background="green";
//let item2=document.getElementsByTagName("li");
//for(let i=0;i<item2.length;i++) {
//item2[i].style.background="yellow";
//}

//QUERY SELECTOR SELECTS ONLY ONE IF A SPECIFIED TAG HAS MORE THAN ONE OCCURANCE THAN THE FIRST ONE IS ONLY CHANGES 
let itemTwo=document.querySelector('.list-group-item:nth-child(2)');
itemTwo.style.background="green";
//INORDER TO SELECT THE SECOND ONE USING QUERYSELECTOR IS NOT POSSIBLE THAT'S WHY WE USED NTH CHILD
let itemThree=document.querySelector('.list-group-item:nth-child(3)');
itemThree.style.display="none";

let itemSecond=document.querySelectorAll(".list-group-item");
itemSecond[1].style.color="green";
let alternate=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<alternate.length;i++) {
    alternate[i].style.background="green";
}
//PARENT CHILD ,PREVIOUS SIBLING,NEXT SIBLING,FIRST CHILD ARE USELESS INSTEAD ---ELEMENT-- WORKS
//let ancestor=document.querySelector("#items");
//ncestor.parentNode.parentNode.style.background='yellow';
let ancestor=document.querySelector("#items");
//ancestor.parentNode.style.background='yellow';
ancestor.firstElementChild.style.background="red";
ancestor.lastElementChild.style.background="yellow";
let relation=document.querySelector("#added");
relation.nextElementSibling.style.background='red';
/*let relative=document.querySelector("#items");
relative.previousElementSibling.style.color='yellow';
//CREATES A NEW ELEMENT
let newDiv=document.createElement("div");
newDiv.id="addition";
//WE HAVE TO ADD TEXT CONTENT SEPARATELYBY CREATE TEXT NODE
let newDivtext=document.createTextNode("Hello World");
//THEN APPEND THE TAG WITH THE TEXT
newDiv.appendChild(newDivtext);
//CHOOSE THE THING WERE YOU GONNA ADD AND YOU GONNA ADD
let container=document.querySelector('header.container');
let h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);*/
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


