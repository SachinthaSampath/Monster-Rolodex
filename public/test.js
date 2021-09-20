/*
let val = 10;
let template_string = `Hi ${val+20}`;

console.log(template_string);

const multiply = (a,b)=>a*b;
const curried =(a)=>(b)=>a*b;
const compose =(f,b)=>(a)=>(f(g(a)));


const obj = {
    name:'sachintha',
    address:'gampaha'
}

let {name,address}=obj;

let a="sachintha"
let b = "pasyala"

let ob ={
    [a]:12
}

template_string=`${(()=>{return 10+"tt"})()}`;
console.log(template_string);

const array = [1,2,3,4,5,6,7,8,9,10];
let mapped =[];
 

let filter=array.filter(num=>num%2==0);
console.log(filter);

console.log("array - ",array);
let acc = 101;

let red =array.reduce((acc,num)=>{
    console.log("acc ",acc);
    return num;
},50)

console.log("reduce - ",red);
console.log("acc last - ",acc);


let o ={
    un0:'santa',
    un1:'Rudolf',
    un3:'Mr.Grinch',
}
console.log(Object.values(o));

Object.values(o).forEach(un=>{
    let psw = parseInt(Math.random()*10000);
    console.log(un,psw)
})

console.log(Object.entries(o).map((entry)=>{
    return entry[0].replace("un","")+entry[1];
}))





class Player{
    constructor(name,type){
        this.name=name;
        this.type=type;
        console.log("Player",this);
    }
    introduce(){
        console.log(`Hi im ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name,type){        
        super(name,type);
        this.name="woody";
        console.log("Wizard ",this);
    }
}

let w =  new Wizard("SHelly","wizard");

*/

console.log(1);

setTimeout(()=>{
    console.log("from callback queue "+2);
},2)
for(let i=0; i<=5; i++){
    console.log("loop-"+i);
}
 console.log(3);
console.log(4);
console.log(5);
setTimeout(()=>{
    console.log(6);
},2)
console.log(7);