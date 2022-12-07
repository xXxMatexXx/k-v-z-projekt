function feliratkozas(){
    let email = document.getElementById(email);
    if(email.value != ""){
        email.value = "";
        alert("Sikeresen feliratkozott! Köszönjük szépen!")
    } else{
        alert("Kérem töltse ki az Email mezőt!");
    }
}