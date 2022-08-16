// dom element selector
const pinInputField = document.getElementById("pin-input-field")
const calParentDiv = document.getElementById("cal-parent-div")
const calInputField = document.getElementById("cal-input-field")
const calSubmit = document.getElementById("submit")
const succesMessage = document.getElementById("succes-message")
const Failmessage = document.getElementById("fail-message")

// checkFourDigit
function checkDigit(randomNumber) {
    if (randomNumber.toString().length == 4) {
        return randomNumber
    }
    else {
        return checkDigit()

    }
}

// pingenerate and show in the input field
function generatePin() {
    const randomNumber = parseInt(Math.random() * 10000)
    const randomNumberFourDigit = checkDigit(randomNumber)
    pinInputField.value = randomNumberFourDigit
}

// cal number handle
calParentDiv.addEventListener('click', function (event) {
    const calNumer = event.target.innerText
    if (isNaN(calNumer)) {
        console.log("pleas type a number")
        if (calNumer == 'C') {
            calInputField.value = ''
        }
    }

    else {
        const calInput = (calInputField.value) + calNumer
        calInputField.value = calInput
    }

})

// calsubmit
calSubmit.addEventListener("click", function () {
    if (pinInputField.value == calInputField.value) {
        succesMessage.style.display = "block"
        Failmessage.style.display = "none"
    }
    else {
        Failmessage.style.display = "block"
        succesMessage.style.display = "none"
    }
    calInputField.value = ''
    calInputField.value = ''

})
