const form = document.querySelector('#container-input-group');
// const inputGroup = document.querySelector('.input-group');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phoneNumber');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const errorHolder = document.querySelector('p');
const btn = document.querySelector('button');
const textHolder = document.querySelector('.textHolder');

form.addEventListener('submit', function (event)
{
    event.preventDefault();
    
    if(!validateUsername() || !validateEmail() || !validatePhoneNumber() || !validatePassword() || !validateConfirmPassword())
        {
            return false;
        }
    else
        {
        form.submit();
        return true;
    }

});


// username
function validateUsername()
{
    if(usernameInput.value.trim().length === "")
        {
            setError(usernameInput, "Please Enter your name");
            return false;
        }
    else if(usernameInput.value.trim().length<5)
        {
            setError(usernameInput, "Name cannot be less than 5 letters");
            return false;
        }
    else if(usernameInput.value.trim().length>15)
        {
            setError(usernameInput, "Name cannot be more than 15 letters")
            return false;
        }
    else
    {
        setSuccess(usernameInput);
        return true;
    }
}


//email
function validateEmail()
{
    if(emailInput.value.trim().length == "")
        {
            setError(emailInput, "Please Enter your E-mail");
            return false;
        }
    else if(!isEmailValid(emailInput.value))
        {
            setError(emailInput, "Oops! Invalid E-mail");
            return false;
        }
        else
        {
            setSuccess(emailInput);
            return true;
        }
}

//phone number
function validatePhoneNumber()
{
    if(phoneNumberInput.value.trim().length === 0)
        {
            setError(phoneNumberInput, "Please Enter your Phone Number");
            return false;
        }
    else if(phoneNumberInput.value.trim().length !== 10)
        {
            setError(phoneNumberInput, "Number should be 10 digits");
            return false;
        }
    else if(phoneNumberInput.value === "1234567891")
        {
            setError(phoneNumberInput, "Please enter a valid number!")
            return false;
        }
    else
    {
        setSuccess(phoneNumberInput);
        return true;
    }
}

//pasword
function validatePassword()
{
    if(passwordInput.value.trim().length == "")
        {
            setError(passwordInput, "Please Enter your Password");
            return false;
        }
    else if(passwordInput.value.trim().length<5)
        {
            setError(passwordInput, "Password cannot be less than 5 letters");
            return false;
        }
    else if(passwordInput.value.trim().length>15)
        {
            setError(passwordInput, "Password cannot exceed 15 characters")
            return false;
        }
    else
    {
        setSuccess(passwordInput);
        return true;
    }
}

function validateConfirmPassword()
{
    if(confirmPasswordInput.value.trim().length == "")
        {
            setError(confirmPasswordInput, "Confirm the password!");
            return false;
        }
    else if(confirmPasswordInput.value !== passwordInput.value)
        {
            setError(confirmPasswordInput, "Password donot match!");
            return false;
        }
    else 
    {
        setSuccess(confirmPasswordInput);
        return true;
    }
}
function setError(element, errorMessege)
{
    const parent = element.parentElement;
    if(parent.classList.contains('success'))
        {
            parent.classList.remove('success');
        }
    parent.classList.add('error');
    element.focus();

    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessege;

    element.value = "";
}

function setSuccess(element)
{
    const parent = element.parentElement;
    if(parent.classList.contains('error'))
        {
            parent.classList.remove('error');
        }
    parent.classList.add('success');
}

function isEmailValid(email)
{
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return reg.test(email);
}




