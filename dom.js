let title=document.getElementById("header-title");
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
//let ancestor=document.querySelector("#items");
//ncestor.parentNode.parentNode.style.background='yellow';
let ancestor=document.querySelector("#items");
//ancestor.parentNode.style.background='yellow';
ancestor.firstElementChild.style.background="red";
ancestor.lastElementChild.style.background="yellow";
let relation=document.querySelector("#added");
relation.nextElementSibling.style.background='red';
let relative=document.querySelector("#items");
relative.previousElementSibling.style.color='yellow';
let newDiv=document.createElement("div");
newDiv.id="addition";
let newDivtext=document.createTextNode("Hello World");
newDiv.appendChild(newDivtext);
let container=document.querySelector('header.container');
let h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);

