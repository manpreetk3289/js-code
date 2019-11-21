// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // superclass method
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - subclass
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // subclass extends superclass
  Rectangle.prototype = Object.create(Shape.prototype);


  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  rect.move(1, 1)
 //////////////////////
 let obj1 = Object.create({});
 let obj2 =  Object.create(null);

 console.log('obj1', obj1, 'obj2', obj2);

 // output :- prototype of obj1 => prototype of object
 // prototype of obj2 =>  No properties

 obj1['1']="1"; 
 obj2['1']="1"; 
 console.log('obj1', obj1, 'obj2', obj2);

 // same output and __proto__ missingin obj2 => inbuild fn wont work eg toString
 