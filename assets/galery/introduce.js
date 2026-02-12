const modal = document.getElementById("modal")
const overlay = document.getElementById("overlay")

function enterOrSign() {

}
// modal.addEventListener("click", (e) => {

//     e.stopPropagation()
// })
// identity
function showIdentity() {
    modal.innerHTML = `
    <strong class="mt_2">مشخصات من</strong>
    <p class="mt_1">نام: سارا</p>
    <p class="mt_1">نام خانوادگی: آرام</p>
    <p class="mt_1">علاقه: طراحی سایت</p>
    `
    handleShowModal()
}
// skills
function showSkills() {
    modal.innerHTML = `
    <strong>HTML & CSS & JS</strong>
    <p>من در این سه حوزه برنامه نویسی مهارت دارم و پروژه هایی هم ساختم</p>
    `
    handleShowModal()
}
// experiences
function showExperiences() {
    modal.innerHTML = `
    <p>تجربه همکاری با شرکت خاصی رو تا الان نداشتم ،ولی امیدوارم که بتونم در آینده همکاری خوبی داشته باشم.</p>
    `
    handleShowModal()
}
// projects
function showProjects() {
    modal.innerHTML = `
    <strong>لینک پروژه های من در گیت هاپ</strong>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    `
    handleShowModal()
}
// conect with us
function showNumber() {
    modal.innerHTML = `
    <strong>تماس با ما</strong>
    <p>09198704688</p>
    `
    handleShowModal()
}
// modal closeing
overlay.addEventListener("click", () => {
    modal.style.opacity = "0"
    modal.style.visibility = "hidden"
    overlay.style.opacity = "0"
    overlay.style.visibility = "hidden"
})
// modal opening
function handleShowModal() {
    modal.style.opacity = "1"
    modal.style.visibility = "visible"
    overlay.style.opacity = "1"
    overlay.style.visibility = "visible"
}