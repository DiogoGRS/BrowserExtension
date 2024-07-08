
let myLeads = ["claudio", "saulio", "bergstein"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el") 

inputBtn.addEventListener( "click", function() {
myLeads.push(inputEl.value)
console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEL.textContent += " " + (myLeads[i]) 
}