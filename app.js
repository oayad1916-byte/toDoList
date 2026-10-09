AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
});

const input = document.getElementById("input")
const listUl = document.getElementById("list")
const alertCard = document.querySelector(".alert-card")
const alertBtn = document.getElementById("alert-btn")
const overlay = document.querySelector(".overlay")


function showAlert() {
    alertCard.classList.remove("none")
    overlay.classList.remove("none")
}
alertBtn.addEventListener('click', ()=>{
    alertCard.classList.add("none")
    overlay.classList.add("none")
})

function addTask() {
    if (input.value.trim() === '') {
        showAlert()
    }else{
        overlay.classList.add("none")
        let li = document.createElement("li")
        li.innerHTML = input.value
        listUl.appendChild(li)
        let button = document.createElement("button")
        button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        li.appendChild(button)
    }
    input.value = ''
    saveData() 
}

listUl.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData() 
    }else if(e.target.tagName === "BUTTON" | e.target.parentElement.tagName === "BUTTON"){
        e.target.closest("LI").remove()
        saveData() 
    }
})


function saveData() {
    localStorage.setItem("data",listUl.innerHTML)
}

function showTask() {
    listUl.innerHTML = localStorage.getItem("data")
}


showTask()


const darkMode = document.querySelector(".toggle-theme")

const currentTheme = localStorage.getItem("theme")

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode")
    darkMode.innerHTML = '<i class="fa-solid fa-sun"></i>'

}else{
    document.body.classList.remove("dark-mode")
    darkMode.innerHTML = '<i class="fa-solid fa-moon"></i>'

}

darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark")
        darkMode.innerHTML = '<i class="fa-solid fa-sun"></i>'

    }else{
        localStorage.setItem("theme", "light")
        darkMode.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})