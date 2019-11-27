/**
 * Hoisting is done if initialized 
 * and used and then declare in that case =>
 * initialized + declared and then  use
 */
//////////////|||||||\\\\\\\\\\\\
/**
 * Declaration and initialization after the use 
 */

// console.log('x',x);
// var x; // declaration
// x =10;  // Initialization 

/***
 * 
 */
// x = 6;
// console.log('x',x);
// var x;

// -> in this case hoisting happens as var is used as its  initialized -> used -> declared 

/**
 * 
 */
// var x =1;
// console.log('x ' , x + y);
// var y =2;
// console.log('x ' , x + y);

// function x() {
//  y = 1; // Throws a ReferenceError in strict mode.
//     var z = 2;
//   }
  
//   x();
  
//   console.log(y); // 1
//   console.log(z); // Throws a ReferenceError: z is not defined outside x

// console.log("a",a);                // "undefined" or "" depending on browser
// console.log('still going...')

// var a = 1;
// b = 2;

// delete this.a; // Throws a TypeError in strict mode. Fails silently otherwise.
// delete this.b;

// console.log(this); // Throws a ReferenceError.


//  function add(){
//     var a = b, b = 0;
//      console.log(a,b);
//  }
//  add();
// console.log(a,b)

// var x = 1;
// console.log(x);
// function z(){
//    console.log(x);
//  let  x =2;
//   console.log(x);
 
// }

// z();
// console.log(x);
// let x = 1;
// console.log(x);
// x=4;
 
// z = ()=>{
  
//   let x =8;

//   console.log(this);
 
// }
 

// z();
function doSetTimeout(i) {
    setTimeout(function() { console.log(i); }, i+100);
  }
  
  for (var i = 1; i <= 2; ++i){
    //  console.log(i);
     // doSetTimeout(i)
    setTimeout(function() { console.log(k); }, k*100)
   
    // console.log(i);
  }
    