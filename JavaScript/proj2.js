function onClick(){
    // console.log(sum)
    // const sum=4;
    // console.log(sum)
    const d=new Date();
    document.getElementById('demo').innerText=d;
    console.log(d.getTime());
    console.log(d.getFullYear());
    console.log(d.getMonth());
    console.log(d.getDay());
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getMilliseconds());
    console.log(d.getTimezoneOffset());
    console.log(d.getUTCFullYear());
    
}