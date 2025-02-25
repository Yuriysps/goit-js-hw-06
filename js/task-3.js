console.log('task-3.js');
//! document.getElementById("task-3/1").innerHTML = 

class StringBuilder{

  #value;
  constructor(initialValue) {
      this.#value = initialValue;
  }


  getValue() {
     return this.#value ;
  }


  padEnd(str) {
       this.#value =  this.#value + str;
  }


  padStart(str) {
     this.#value = str + this.#value;
  }


  padBoth(str) {
     this.#value = str + this.#value + str;
  }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
document.getElementById("task-3/1").innerHTML = builder.getValue();
builder.padStart("^");
console.log(builder.getValue()); // "^."
document.getElementById("task-3/2").innerHTML = builder.getValue();
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
document.getElementById("task-3/3").innerHTML = builder.getValue();
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
document.getElementById("task-3/4").innerHTML = builder.getValue();










