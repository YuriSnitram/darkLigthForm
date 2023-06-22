

const mode = document.querySelector('#mode-icon');

mode.addEventListener('click', () =>{
    const form = document.querySelector('#login-form');

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;


    } 
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');   
})



const eye = document.querySelector('#eyeview');
const inputpassword = document.querySelector('#password');

eye.addEventListener('click', buttonToggle);

function buttonToggle() {
    if (inputpassword.type =='password') {
        inputpassword.type ='text';
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');

    }else{
        inputpassword.type ='password';
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');

    }
    }

    