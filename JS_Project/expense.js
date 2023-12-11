
function submitted(event) {
    event.preventDefault();
   let cost = event.target.amount.value;
   let desc = event.target.description.value;
   let item=event.target.anyone.value;
   /*localStorage.setItem('Name', userName);
   localStorage.setItem('Email', userEmail);*/
   //CREATES A OBJECT  
   let object={
      cost,
      desc,
      item,
   }
   //JSON INORDER TO MAKE THE OBJECT TO STRING
   localStorage.setItem(cost,JSON.stringify(object));
   let parentEle=document.getElementById('getlist');
    let childEle=document.createElement('li');
    childEle.textContent=object.cost+'-'+object.desc+'-'+object.item;
    let atdown=parentEle.appendChild(childEle);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Expenses';
    deleteButton.onclick = function () {
        // Remove the list item and its associated localStorage entry
        localStorage.removeItem(cost);
        parentEle.removeChild(childEle);
    };
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Expenses';
    editButton.onclick = function () {
        // Implement the edit functionality here
        // For example, you can populate the form fields with the existing data for editing
        event.target.amount.value = object.cost;
        event.target.description.value = object.desc;
        event.target.catagory.value = object.item;
        
        // Remove the list item and its associated localStorage entry
        localStorage.removeItem(cost);
        parentEle.removeChild(childEle);
    };
    childEle.appendChild(deleteButton);

    // Append the list item to the ordered list
    parentEle.appendChild(childEle);
    childEle.appendChild(editButton);
}