var name = sessionStorage.getItem("firstName");
var otp = parseInt(sessionStorage.getItem("Otp"));
var email = sessionStorage.getItem("Email");
var name2 = name.split(" ");
var input_otp;
var count = 0;

alert("Your OTP is :" + " " + otp);

document.getElementById('name').innerHTML = name2[0];
document.getElementById('email').innerHTML = " " + email + " ";


function validate() {
    input_otp = parseInt(document.getElementById('otp').value);

    if (input_otp == otp) {
        document.getElementById('warning').style.display = "none";
        document.getElementById('success-div').style.display = "flex";
        document.getElementById('fail-div').style.display = "none";
        document.getElementById('validate').style.display = "none";
    }

    else if (input_otp != otp && count < 2) {
        count++;
        num = 3 - count;
        document.getElementById('warning').innerHTML = "Enter correct OTP," + " " + num + " " + "attempts left."
        document.getElementById('otp').value = " ";
    }

    else if (input_otp != otp && count == 2) {
        document.getElementById('warning').style.display = "none";
        document.getElementById('fail-div').style.display = "flex";
        document.getElementById('success-div').style.display = "none";
        document.getElementById('validate').style.display = "none";
    }
}

console.log(name2[0]);
console.log(email);
console.log(otp);