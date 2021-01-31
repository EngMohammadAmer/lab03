var acceptorno = prompt("are you interested in a FULL Software Development scholarship? y or n");
var status;
while ( acceptorno !=='y' && acceptorno !== 'n'){
    acceptorno = prompt("are you interested in a FULL Software Development scholarship? y or n");
}

function getName() {
    var userName = prompt('Enter your name?');
    console.log(userName);
    document.write(userName);
    }
if (acceptorno==="y"){
    var age= prompt('What is your age?');
    var times = prompt('how many scholarship you want to attend?');
    if (age >=18 && age<=35 ) {
        status = "** CONGRATS; You are eligable to the scholarship **";
        getName()
        confirm("Are you happy with this javascript");
        alert("THANK YOU");
    } else {
        status= "!! Sorry, you are NOT applicable to this scholarship !!"
    }  
} else {
    var age= prompt('What is your age?')
    status="You are not interested in Software Development scholarship program"
}

var statusimage

if (status === "** CONGRATS; You are eligable to the scholarship **") {
    statusimage = "<img src='Scholarship.jpg'/>"
} else {
    statusimage=""
}

var result =''

for (var i = 0; i < times ; i++) {
    result = result + statusimage;
  }

document.write(status)
document.write(result)
document.getElementById("statusof").innerText= age;
