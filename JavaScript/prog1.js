var names='Ananya'
names=13579

let num=119143
num='Honnavar'

const pi=3.142

console.log(num)

let emp1={id:21,empname:'Anu',salary:8700}

let emp2=new Object();
emp2.id=3;
emp2.empname='Dhanu';
emp2.salary=7000;

function emp3(id,empname,salary){
    this.id=id;
    this.empname=empname;
    this.salary=salary;
}

let obj3=new emp3(5,'Anusha',4500)

console.log(emp1.id)
console.log(emp1)
console.log(emp2)
console.log(obj3)