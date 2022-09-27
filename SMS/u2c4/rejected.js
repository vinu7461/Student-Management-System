// All the Code for the Rejected page goes here

let rejected=JSON.parse(localStorage.getItem("admission-rejected")) || []

displaytable(rejected)
function displaytable(rejected){

   rejected.forEach(function(elem,index){

    
    let row=document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerText=elem.name


    let td2=document.createElement("td")
    td2.innerText=elem.email

    let td3=document.createElement("td")
    td3.innerText=elem.course

    let td4=document.createElement("td")
    td4.innerText=elem.gender

    let td5=document.createElement("td")
    td5.innerText=elem.phone


    row.append(td1,td2,td3,td4,td5,)
    document.querySelector("tbody").append(row)

   })


}
