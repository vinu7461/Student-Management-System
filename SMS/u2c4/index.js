// All the JS Code for the Add Students Page Goes Here


document.querySelector("form").addEventListener("submit",addstudent)

let add=JSON.parse(localStorage.getItem("admission")) || []

function addstudent (){
    event.preventDefault()

    let obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
        gender:document.querySelector("#gender").value,
        course:document.querySelector("#course").value,
    }  
    add.push(obj)
    localStorage.setItem("admission",JSON.stringify(add))
    window.location.href="index.html"
}