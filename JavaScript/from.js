function onSubmit() {
    let val = true
    let name = document.formName.Name.value
    let num = document.formName.Number.value
    let email = document.formName.Email.value
    let age = document.formName.Age.value
    // alert("Hiii "+name+","+"with phone number "+num+" and email id "+email)


    if (name.length < 5 || name.length > 10) {
        val = false
        SetError("Nameerrorid","Name is not correctly typed")
    }else{
        clearField('Nameerrorid');
        
    }

    if (num.length !== 10) {
        val = false;
        SetError("Numerrorid","Number is not in range");
    } else{
        clearField('Numerrorid');
    }

    // if (age < 18) {
    //     SetError();
    //     val = false
    // }
    return val;
}

function SetError(id,message){
    console.log(id);
    console.log(message);
    document.getElementById(id).innerHTML=message;
}

// function Click(){
//     // document.getElementById('spanid').innerHTML='HIiii'
//     let doThis=document.getElementsByClassName('spanid')[0].innerHTML='Heloo'
//     console.log('doThis>>doThis',doThis)
// }

// function Clicking(){
//     let doThis=document.getElementsByTagName('h2')[0].innerHTML='Login form'

// }

function clear(){
    document.getElementById(Nameerrorid).innerHTML='';
    document.getElementById(Numerrorid).innerHTML='';
}
function clearField(id){
    document.getElementById(id).innerHTML='';
}
