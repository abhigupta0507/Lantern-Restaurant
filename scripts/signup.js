var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

var signup = document.querySelector(".sign-up-button");
var login = document.querySelector(".log-in-button");
var span = document.getElementsByClassName("close")[0];

signup.onclick = function() {
  modal.style.display = "block";
  
document.querySelector('.sign-in-title').innerHTML=`Sign In`;
document.querySelector('.text-login-or-signin').innerHTML="Have an account??";
document.querySelector('.login-or-signin-button-ask').innerHTML=`Log In`;
document.querySelector('#submit-loginform').style.display='none';
document.querySelector('#submit-signinform').style.display='block';
document.querySelector('.login-or-signin-button-ask').style.display='block';
document.querySelector('.login-or-signin-button-ask2').style.display = 'none';

}
login.onclick = function() {
    modal.style.display = "block";
    document.querySelector('.sign-in-title').innerHTML=`Log In`;
  document.querySelector('.text-login-or-signin').innerHTML="Don't have an account??";
  document.querySelector('.login-or-signin-button-ask').innerHTML=`Sign In`;
  document.querySelector('#submit-loginform').style.display='block';
  document.querySelector('#submit-signinform').style.display='none';
  document.querySelector('.login-or-signin-button-ask').style.display='none';
  document.querySelector('.login-or-signin-button-ask2').style.display = 'block';
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const loginorsignin = document.querySelector('.login-or-signin-button-ask');
loginorsignin.addEventListener('click', (e)=>{
  document.querySelector('.sign-in-title').innerHTML=`Log In`;
  document.querySelector('.text-login-or-signin').innerHTML="Don't have an account??";
  document.querySelector('.login-or-signin-button-ask').innerHTML=`Sign In`;
  document.querySelector('#submit-loginform').style.display='block';
  document.querySelector('#submit-signinform').style.display='none';
  document.querySelector('.login-or-signin-button-ask').style.display='none';
  document.querySelector('.login-or-signin-button-ask2').style.display = 'block';
});

const loginorsignin2 = document.querySelector('.login-or-signin-button-ask2');
loginorsignin2.addEventListener('click', (e)=>{
  document.querySelector('.sign-in-title').innerHTML=`Sign In`;
  document.querySelector('.text-login-or-signin').innerHTML="Have an account??";
  document.querySelector('.login-or-signin-button-ask').innerHTML=`Log In`;
  document.querySelector('#submit-loginform').style.display='none';
  document.querySelector('#submit-signinform').style.display='block';
  document.querySelector('.login-or-signin-button-ask').style.display='block';
  document.querySelector('.login-or-signin-button-ask2').style.display = 'none';

});






