// All the Code for All Students Page Goes Here


let add=JSON.parse(localStorage.getItem("admission")) || []

let accepted=JSON.parse(localStorage.getItem("admission-accepted")) || []

let rejected=JSON.parse(localStorage.getItem("admission-rejected")) || []

displaytable(add)

function displaytable(add){

    add.forEach(function(elem,index){
     
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

        let td6=document.createElement("td")
        td6.innerText="Accept"
        td6.style.backgroundColor="green"
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            accept(elem,index)
        })

        let td7=document.createElement("td")
        td7.innerText="Reject"
        td7.style.backgroundColor="red"
        td7.style.cursor="pointer";
        td7.addEventListener("click",function(){
            reject(elem,index)
        })


        row.append(td1,td2,td3,td4,td5,td6,td7)

        document.querySelector("tbody").append(row)
    })

}

function accept(elem,index){
    event.target
    
    accepted.push(elem)
    localStorage.setItem("admission-accepted",JSON.stringify(accepted))

  add.splice(index,1)
  localStorage.setItem("admission",JSON.stringify(add))
  window.location.reload()
}

function reject(elem,index){
    event.target
    
    rejected.push(elem)
    localStorage.setItem("admission-rejected",JSON.stringify(rejected))

    add.splice(index,1)
    localStorage.setItem("admission",JSON.stringify(add))
    window.location.reload()
}







