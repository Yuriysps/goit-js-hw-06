console.log('task-2.js');
//! document.getElementById("task-3/1").innerHTML = 

class Storage {
  #items;
 constructor(items)  {
  this.#items=items}

getItems(newItem){
return this.#items
}

addItem(newItem){
this.#items.push(newItem)
}

removeItem(itemToRemove){
  const a = this.#items.indexOf(itemToRemove)
  if (a !== -1){
    this.#items.splice(a,1)
  }
}

}


   //-------------------

   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
document.getElementById("task-2/1").innerHTML = storage.getItems();

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
document.getElementById("task-2/2").innerHTML = storage.getItems();

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
document.getElementById("task-2/3").innerHTML = storage.getItems();

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
document.getElementById("task-2/4").innerHTML = storage.getItems();


