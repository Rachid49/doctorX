// NAV BAR
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('activeBtn')
})

// SCROLL BTN
let btn = document.getElementById('up-btn');
window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display='block';
    }
    else{
        btn.style.display='none';
    }
};

btn.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        bohavior:"smooth"
    });
};

// CLT NUMS COUNTER
let valueDesplays = document.querySelectorAll('.num');
let interval = 500;
valueDesplays.forEach((valueDesplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDesplays.getAttribute('data-val'));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDesplays.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

// CONTACT FORM

let contactForm = document.forms[0];
contactForm.onsubmit = function(e){
    let valid = false;
    function contactValidation (input){
        if(input.value !== ''){
            valid = true;
        }
        else{
            e.preventDefault();
            input.style.borderColor='red';
            input.placeholder = "This Field id Required!"
        }
    };
contactValidation(contactForm.fullName);
contactValidation(contactForm.email);
contactValidation(contactForm.phone);
contactValidation(contactForm.subject);
contactValidation(contactForm.message);
};
   





// SHOW SLIDE ELEMENTS
const slideElement = document.querySelectorAll('.slideElement');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},{
    threshold: 0.4,
})
slideElement.forEach(showElement => {
    observer.observe(showElement)
})



































