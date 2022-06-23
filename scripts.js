const pwd = document.getElementById('pass')
const confirmPwd = document.getElementById('cpass')
const submitButton = document.querySelector('button')

let storedValue;
let confirmStoredValue;

let validatePass
pwd.addEventListener('input', (e) => {
    storedValue = pwd.value
})
confirmPwd.addEventListener('input', (e) => {
    confirmStoredValue = confirmPwd.value
})

submitButton.addEventListener('click', (e) => {
    validatePass = (confirmStoredValue == storedValue) ? true : false
    if (validatePass == false) {
        e.preventDefault()
        console.log('password mismatched')
        confirmPwd.classList.add('.pass-mismatch')
    } else{
        confirmPwd.classList.remove('.pass-mismatch')
    }

})