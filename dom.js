let title=document.getElementById("header-title");
title.style.border="2px solid black";
let addedItems=document.getElementById("added");
addedItems.style.fontWeight='bold';
addedItems.style.color='green';
let makeBold=document.getElementById("items");
makeBold.style.fontWeight="bold";
//let item3=document.getElementsByClassName("list-group-item");
//item3[2].style.background="green";
let item2=document.getElementsByTagName("li");
for(let i=0;i<item2.length;i++) {
item2[i].style.background="yellow";
}