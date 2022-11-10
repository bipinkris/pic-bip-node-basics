//function object declaration

function add(x,y){
    var result = x+y;
    console.log(this);
    return result;
}
console.log(add(10,20));


// var test=new Function("console.log(this)");
function test(){
    console.log(this);
    }

//1:apply function using default binding
test();

//2:apply function using explicit binding
test.apply("100");

// constructor function object
//1. use pasacal case for function object name
//2. Apply using new binding(Always)
//3.Never ever return any value from function object(return this;)
function Test(){
    console.log(this);
}

//3:Apply Function Using new binding 
var t1 = new Test();


function Employee(id,name){
    this.id = id;
    this.name = name;

    //console.log("\n");
    
    
    //console.log(this);
    //console.log(this.id);
//     console.log(this.name);
//     //console.log(this.__proto__.abc);
//     //console.log(this.__proto__.__proto__.xyz);
//     console.log(this.abc);
//     console.log(this.xyz);
//     console.log("\n");
}

Employee.prototype.getId = function () {
    return this.id;
};

Employee.prototype.abc="123";
Object.prototype.xyz="456";

var funcObj1 = new Employee("100","tom");
var funcObj2 = new Employee("200","hary");

console.log(funcObj1.id);
console.log(funcObj1.name);
console.log(funcObj2.id);
console.log(funcObj2.name);
