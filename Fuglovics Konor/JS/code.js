function subscription(){
    let email = document.getElementById('email');
    if(email.value != ""){
        email.value = "";
        alert("Sikeres feliratkozás!");
    }else{
        alert("Előbb írja be az E-mailjét!")
    }
}