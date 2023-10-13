// NAV BAR 
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('activeBtn')
})


// SIGNUP FORM VALIDTAE

let signUpForm = document.forms[1];
let error = document.querySelector("h4");
signUpForm.onsubmit = function (e){
    function validate (input){
        let validInput = false;
        if (input.value !== ""){
            validInput = true;
        }
        else{
            input.style.borderColor="red";
            signUpForm.username.focus();
            e.preventDefault();
        }
    };
    validate(signUpForm.username);
    validate(signUpForm.email);
    validate(signUpForm.password);
    validate(signUpForm.reptPassword);
    // CHECKING MATCHING PASSWORD
    if(signUpForm.password.value !== signUpForm.reptPassword.value){
        e.preventDefault();
        signUpForm.password.style.borderColor="red";
        signUpForm.reptPassword.style.borderColor="red";
        document.querySelector("h4").innerHTML = "sorry password does't match";
    };
// CHEKING IF USENAME IS BEGGER THE 10 CHAR
    if(signUpForm.username.value.length >= 10){
        e.preventDefault();
        error.innerHTML = "username is too long";
        signUpForm.username.style.borderColor="red";
    }
};

// LOGIN FORM VALIDATE
let loginForm = document.forms[0];
loginForm.onsubmit = function (e) {
    function validLogin (input){
        let validInput = false;
        if (input.value !== ""){
            validInput = true;
        }
        else{
            input.style.borderColor="red";
            loginForm.email.focus();
            e.preventDefault();
        }
    };
validLogin(loginForm.email);
validLogin(loginForm.password);
};



// FOCUSING INPUTS FUNCTION FOR SIGN UP FORM AND LOGIN FORM

// sign up labels
let userLabel = document.getElementById('userLabel');
let emailLabel = document.getElementById('emailLabel');
let passLabel = document.getElementById('passLabel');
let reptPassLabel = document.getElementById('reptPassLabel');
// LOGIN LABELS
let loginUserLabel = document.getElementById('loginUserLabel');
let loginPassLabel = document.getElementById('loginPassLabel');

function focusing(label, input){
    input.onfocus = function(){
    label.classList.add('focusin')
    }
    input.addEventListener('focusout', function(){
        if(input.value === ''){
            label.classList.remove('focusin')
        };
    });
};
// FOR SIGN UP FORM
focusing(userLabel, signupForm.username);
focusing(emailLabel, signUpForm.email);
focusing(passLabel, signUpForm.password);
focusing(reptPassLabel, signUpForm.reptPassword);
// FOR LOGIN FORM
focusing(loginUserLabel, loginForm.email);
focusing(loginPassLabel, loginForm.password);


// SLIDING FORMS
const conatiner = document.querySelector('.container');
const loginBtnphone = document.getElementById('login-btn');
const signUpBtnphone = document.getElementById('signUp');
const submitSignupBtn = document.getElementById('signup');

loginBtnphone.addEventListener('click', ()=>{
    conatiner.classList.remove('right-panel-active');
});
signUpBtnphone.addEventListener('click', ()=>{
    conatiner.classList.add('right-panel-active');
});


submitSignupBtn.addEventListener('click', ()=>{
    conatiner.classList.remove('right-panel-active');
});




// const conatiner = document.querySelector('.container');
const loginBtn = document.getElementById('log-in');
const signUpBtn = document.getElementById('sign-up');
// const submitSignupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', ()=>{
    conatiner.classList.remove('right-panel-active');
});
signUpBtn.addEventListener('click', ()=>{
    conatiner.classList.add('right-panel-active');
});


submitSignupBtn.addEventListener('click', ()=>{
    conatiner.classList.remove('right-panel-active');
});