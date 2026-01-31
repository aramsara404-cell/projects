const form = document.getElementById("userForm")
const nameInput =document.getElementById("name")
const familyInput = document.getElementById("lastName")
const emailInput = document.getElementById("email")
const repeatEmailInput = document.getElementById("repeatEmail")
const passwordInput = document.getElementById("password")
const repeatPasswordInput = document.getElementById("repeatPassword")
const checkboxInput = document.getElementById("checkbox")
const btn = document.getElementById("btn")
const overlay = document.getElementById("overlay")
const showModal = document.getElementById("showModal")

let people = []

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const newperson = {
        name: nameInput.value.trim(),
        family: familyInput.value.trim(),
        email: emailInput.value.trim(),
        email2: repeatEmailInput.value.trim(),
        password: passwordInput.value.trim(),
        password2: repeatPasswordInput.value.trim()
    }

    if (!newperson.name ||!newperson.family || !newperson.email) {
        alert("pleas enter required filds!")
    }else {
        modal.innerHTML = `
        <h3>Dear ${newperson.name} You Sign Up Successfully</h3>
        <p>name: ${newperson.name}
        lastname: ${newperson.family}
        email: ${newperson.email}</p>
        `
        setTimeout(()=> {

            overlay.style.opacity = "1"
            overlay.style.visibility = "visible"
            modal.style.opacity = "1"
            modal.style.visibility = "visible"
        
        }, 3000)
    }

    people.push(newperson)
    form.reset()

    console.log(people);


    // const userName = document.getElementById("userName")
    // userName.innerHTML = `${nameInput}. ${familyInput}`

})

overlay.addEventListener("click", ()=> {
    overlay.style.opacity = "0"
    overlay.style.visibility = "hidden"
    modal.style.opacity = "0"
    modal.style.visibility = "hidden"
 
})