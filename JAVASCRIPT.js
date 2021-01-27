var acceptorno = prompt("are you interested in a FULL Software Development scholarship? y or n");
var status;
if (acceptorno==="y") {
    var age= prompt('What is your age?')
    if (age >=18 && age<=35 ) {
        status = "** CONGRATS; You are eligable to the scholarship **"
        confirm("Are you happy with this javascript");
        alert("THANK YOU");
    } else {
        status= "!! Sorry, you are NOT applicable to this scholarship !!"
    }  
} else {
    var age= prompt('What is your age?')
    status="You are not interested in Software Development scholarship program"
}
document.write(status)
document.getElementById("statusof").innerText= age;

