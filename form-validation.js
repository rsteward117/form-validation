const form = document.querySelector('.sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phone = document.getElementById('phone');
const email = document.getElementById('email') 
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

//remove error messages and styling from inputs if inputs are now valid.
firstName.addEventListener('input', function(){
    if(firstName.validity.valid){
        firstName.classList.remove('error')
        firstName.nextElementSibling.classList.remove('show')
    }
})

lastName.addEventListener('input', function(){
    if(lastName.validity.valid){
        lastName.classList.remove('error')
        lastName.nextElementSibling.classList.remove('show')
    }
})

phone.addEventListener('input', function(){
    if(phone.validity.valid){
        phone.classList.remove('error')
        phone.nextElementSibling.classList.remove('show')
    }
})

email.addEventListener('input', function(){
    if(email.validity.valid){
        email.classList.remove('error')
        email.nextElementSibling.classList.remove('show')
    }
})

password.addEventListener('input', function(){
    if(password.validity.valid){
        password.classList.remove('error')
        password.nextElementSibling.classList.remove('show')
    }
})

confirmPassword.addEventListener('input', function(){
    if(confirmPassword.validity.valid){
        confirmPassword.classList.remove('error')
        confirmPassword.nextElementSibling.classList.remove('show')
    }
})

//form listener checks for errors before submitting
form.addEventListener('submit', function(e){
    if(!firstName.validity.valid){
        firstName.classList.add('error');
        firstName.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

    if(!lastName.validity.valid){
        lastName.classList.add('error');
        lastName.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

    if(!phone.validity.valid){
        phone.classList.add('error');
        phone.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

    if(!email.validity.valid){
        email.classList.add('error');
        email.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

    if(!password.validity.valid){
        password.classList.add('error');
        password.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

    if(!confirmPassword.validity.valid){
        confirmPassword.classList.add('error');
        confirmPassword.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

    if(confirmPassword.value !== password.value){
        confirmPassword.classList.add('error');
        confirmPassword.nextElementSibling.classList.add('show');
        e.preventDefault();
    }


})


