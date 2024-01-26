const form = document.querySelector('#form');
const formInputs = document.querySelectorAll('.form-input');
const name = document.querySelector('#name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector("#confirm-password");

const btn = document.querySelector('.btn');
const infoMessage = document.querySelector('#info-message');


const invalidInput = (input, message) => {
    input.classList.add('is-invalid');
    infoMessage.innerText = message;
    btn.style.backgroundColor = "#848484";
    btn.setAttribute('disabled', 'disabled');
    input.addEventListener('keyup', e => {
        input.classList.remove('is-invalid');
        infoMessage.innerText = '';
        btn.style.backgroundColor = "blue";
        if (btn.hasAttribute('disabled')){
            btn.removeAttribute('disabled');
        }
    })
}


const inputContentValidation = () => {
    if (name.value === ''){
        invalidInput(name, 'All fields must be filled');
        return false
    } else if (username.value === ''){
        invalidInput(username, 'All fields must be filled');
        return false
    } else {
        return true
    }
}

const emailValidation = () => {
  let regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value === "") {
    invalidInput(email, 'All fields must be filled');
    return false;
  } else if (!regEx.test(email.value)) {
    invalidInput(email, "Please enter a valid email");
    return false;
  } else {
    return true;
  }
};


const passwordValidation = () => {
    let regEx = /^([a-z0-9]{8,94})$/;
    if (password.value === '') {
      invalidInput(password, "All fields must be filled");
      return false;
    } else if (!regEx.test(password.value)) {
      invalidInput(password, "Password should be atleast 8 characters");
      return false;
    } else {
      return true;
    }
}


const ConfirmPasswordValidation = () => {
    if (confirmPassword.value === '') {
      invalidInput(confirmPassword, "All fields must be filled");
      return false;
    } else if (confirmPassword.value !== password.value) {
      invalidInput(confirmPassword, "The passwords value don't match");
      return false;
    } else {
      return true;
    }
}


const validate = () => {
    if (inputContentValidation() && emailValidation() && passwordValidation() && ConfirmPasswordValidation()){
        return true;
    } else {
        return false;
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
        const registrationData = {
          name: name.value,
          username: username.value,
          email: email.value,
          password: password.value,
        };
        console.log(registrationData);
      name.value = ''; username.value = ''; email.value =''; password.value =''; confirmPassword.value ='';
    }
})
