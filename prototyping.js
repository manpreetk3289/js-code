/**
 * Shape function as a 
 * parent function
 */
function Shape(x ,y){
    this.x= x;
    this.y =y;
}

//lets define a parent class function

Shape.prototype.move = function(){
    console.log('move', this.x);
    return this.x * this.y;
}

// calling move function

let _shape = new Shape(2, 2);
_shape.move();



// printing console of prototype
console.log('Shape proto', Shape.__proto__)
console.log('Shape Prototype', Shape.prototype)
console.log('_shape proto',_shape.__proto__);
console.log('_shape Protoype',_shape.prototype);


////// CONCLUSION ////
/**
 * Parent class prototype  ==  child class __proto__ => 
 * child store prototype of parent in __proto
 * Parent class __proto  =>  ƒ () { [native code] }
 * Parent class prototype => {move: ƒ, constructor: ƒ}
 * Child class __proto => Same as Parent class Prototype => {move: ƒ, constructor: ƒ}
 * Child class prototype => undefined
 * 
 */

let obj1 = Object.create({});
let obj2 =  Object.create(null);

console.log('obj1', obj1, 'obj2', obj2);

// output :- prototype of obj1 => prototype of object => {}
// prototype of obj2 =>  No properties => No properties