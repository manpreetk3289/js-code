/**
 * Deep clone an object
 * @param {} obj 
 */
function clone(obj){
    let _obj ={};

 for(key in obj){
  console.log(typeof obj[key])
    if(typeof obj[key] === 'object' && !Array.isArray(obj[key]) && !null){
        _obj[key] = clone(obj[key]);
    }else{
        _obj[key]=obj[key];
    }
 }
    return _obj;
}

let obj ={
    "a":1,
    "b":undefined,
    "c":{"d":3 ,"e":4},
    "f": function(){},
    "g": ["1","2"],
    "h":null
}

let newObj = clone(obj);
obj.a="xx";
obj.c.d ="me"

console.log('original',obj)
console.log("clone",newObj)