
var password = document.getElementById('password')

var passwordCheck = document.getElementById('passwordCheck')

function validate() {
	if (password.value.length < 8){
		
		document.getElementById('passwordCheck').innerHTML= "Password must be at least 8 characters!";
		return false;
	}
}