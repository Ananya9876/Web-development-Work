//Strings

// let name="Ananya Naik";
// name=name.toUpperCase();
// console.log(name);






// let n1='Ananya';
// let n2='Naik';
// console.log(n1.slice(1,4));

// console.log(n1.concat(n2));

// console.log(n1.replace("n","1234"));

// console.log(n1.charAt(3));



//practice question
// let username=prompt("Enter your full name");

// console.log("@"+username+username.length);



//Arrays and loops

// let names=["Anu","Dhanu","Ananya","Sunaina","Anusha"];

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// };


// for(let hero of names){
//     console.log(hero);
// }





//practice students
// let students=[85,97,44,37,76,60];
// let sum=0;

// for(let i=0;i<students.length;i++){
//     sum=sum+students[i]
// };

// let res=sum/(students.length);
// console.log(res);




// let price=[250,645,300,900,50];

// for(let val of price){
//     let offer=val/10;
//     val=val-offer;
//     console.log(val);
// }


// price.splice(1,2,240,450);



let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

company.splice(0,1);
console.log(company);

company.splice(1,1,"Ola");
console.log(company);

company.push("Amazon");
console.log(company);




