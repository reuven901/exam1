 let items=[]
 let itemName = document.querySelector(".itemName");
 let priceItem = document.querySelector(".priceItem");
 let mySelect = document.getElementById("items");
 let btn_add_product=document.querySelector(".btn_add_product")
 let btn_delete=document.querySelector(".btn_delete")
 let picture=document.querySelector(".picture")
 let table=document.querySelector(".table")
 let tbody=document.querySelector(".tbody")

 function listTasks() {
    
     let newItem = itemName.value;
     let newPrice = priceItem.value
     let newSelext = mySelect.value;
     let newPicture = picture.value;
  // indentation
    let item ={
      newItem: newItem ,
      newPrice:newPrice,
      newSelext:newSelext,
      newPicture: newPicture
   }
     items.push(item)
 // function inside a function?
     function toDoElement(input, elements, create) {
      const element = document.createElement(elements);
  
      trCreate.appendChild(element);
// great!
      if (elements === "img") {
        element.src = input;
      } else {
        element.innerText = input;
      }
      create.appendChild(element);
    }

     const trCreate = document.createElement('tr');
     tbody.appendChild(trCreate);
  
     toDoElement(newItem, 'td', trCreate);
     toDoElement(newPrice, 'td', trCreate);
     toDoElement(newSelext, 'td', trCreate);
     toDoElement(newPicture, 'img', trCreate);
     deleteItems(newItem,newPrice,newSelext,picture)

 }
//the JS convention is not underscore
btn_add_product.addEventListener("click",listTasks)

// why did you pass vars and didn't use them?
 function deleteItems(newItem,newPrice,newSelext,picture) {
     itemName.value=""
     priceItem.value=""
     mySelect.value=""
     picture.value=""
    
 }
 // this will delete the all table, with the titles.
 function deleteAction() {
    
     table.innerHTML=""
     }

 btn_delete.addEventListener("click",deleteAction)


 function storeInLocalStorage(items) {
  localStorage["items"] = JSON.stringify(items);
}

function getFromStorage() {
  if (!localStorage["items"]) {
    return [];
  }
  return JSON.parse(localStorage["items"]);
}
(function init() {
 //great!
  if (items.length > 0) {
    items.forEach((item) => {
      toDoElement(item);
    });
  }
})();


