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
        password2: repeatPasswordInput.value.trim(),
        checkbox: checkboxInput.value
    }
   

    if (!newperson.name ||!newperson.family 
        || !newperson.email
        || !newperson.password 
        || !newperson.checkbox) {
        alert("pleas enter all filds!")
    }else {
        if( newperson.email !== newperson.email2 || newperson.password !== newperson.password2 ) {
            alert("pleas confirm your email or password correctly !")
        }else {
            modal.innerHTML = `
            <h3>Dear ${newperson.name} You Sign Up Successfully</h3>
            <p>name: ${newperson.name},
            lastname: ${newperson.family} <br>
            email: ${newperson.email}</p>
            <a href="/assets/galery/store.html">
                <button class="okBtn">Ok</button>
            </a>
            `
    
            overlay.style.opacity = "1"
            overlay.style.visibility = "visible"
            modal.style.opacity = "1"
            modal.style.visibility = "visible"
            
            people.push(newperson)
            form.reset()
        }
    }

    
    

    console.log(people);


    // const userName = document.getElementById("userName")
    
})
let userPannel = document.getElementById("userPannel")
userPannel.innerHTML = `<p>${nameInput}. ${familyInput}</p>`

// overlay.addEventListener("click", ()=> {
//     overlay.style.opacity = "0"
//     overlay.style.visibility = "hidden"
//     modal.style.opacity = "0"
//     modal.style.visibility = "hidden"
 
// })