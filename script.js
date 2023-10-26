const button=document.querySelector("#btn")
const image= document.querySelector("img")
const qrInput= document.querySelector("input")
const wrapper=document.querySelector(".wrapper")
const warning=document.querySelector("#line_2")

button.addEventListener("click", (event)=>{


let qrValue= qrInput.value;
button.innerHTML="Generating QR-Code.."
console.log(qrValue)

if (qrValue==="") {
   warning.style.display="block";
   button.innerHTML="Generate Code"
    return;
}


image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

warning.style.display="none";
image.addEventListener("load", ()=>{
    wrapper.classList.add("active");
    button.innerHTML="Generate Code"
})

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})

})

