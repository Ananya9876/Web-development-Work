function onSubmit() {
    let val = true
    let name = document.formName.Name.value
    let num = document.formName.Number.value
    let email = document.formName.Email.value
    let age = document.formName.Age.value
    // alert("Hiii "+name+","+"with phone number "+num+" and email id "+email)


    if (name.length < 5 || name.length > 10) {
        SetError();
        val = false
    }

    if (num.length !== 10) {
        SetError();

        val = false
    }

    if (age < 18) {
        SetError();
        val = false
    }
    return val
}

function SetError(){
    alert("Error in the information")
}

function Click(){
    // document.getElementById('spanid').innerHTML='HIiii'
    let doThis=document.getElementsByClassName('spanid')[0].innerHTML='Heloo'
    console.log('doThis>>doThis',doThis)
}

function Clicking(){
    let doThis=document.getElementsByTagName('h2')[0].innerHTML='Login form'

}
