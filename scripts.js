const pwd = document.getElementById('pass')
const confirmPwd = document.getElementById('cpass')
const submitButton = document.querySelector('button')

let storedValue;
let confirmStoredValue;

let validatePass
pwd.addEventListener('input', (e) => {
    storedValue = pwd.value
})



function validatePassword(e){
    confirmStoredValue = confirmPwd.value
    validatePass = (confirmStoredValue == storedValue) ? true : false
    if (validatePass == false) {
        e.preventDefault()
        console.log('password mismatched')
        confirmPwd.classList.add('pass-mismatch')
        console.log(confirmPwd.classList)
    } else{
        confirmPwd.classList.remove('pass-mismatch')
    }
}
confirmPwd.addEventListener('input', validatePassword)

confirmPwd.addEventListener('click', validatePassword)


//fall-back
submitButton.addEventListener('click', validatePassword)