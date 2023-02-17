let convlen= document.getElementById("lengths")
let convParaVolume =  document.getElementById("volumes")
let convParaMass = document.getElementById("mass")
let convParaTime = document.getElementById("Time")
function converstion(){
    let inputVal = document.getElementById("input-val").value 
    console.log("Hi")
   convlen.textContent = ""
   convParaVolume.textContent = ""
   convParaMass.textContent = ""
   convParaTime.textContent = ""
   convlen.textContent =  `${inputVal} meters = ${(inputVal*3.281).toFixed(3)} feet |  ${inputVal} feet = ${(inputVal*0.305).toFixed(3)} meters`
   
   convParaVolume.textContent =  `${inputVal} liter = ${(inputVal*0.264).toFixed(3)} gallon |  ${inputVal} gallon = ${inputVal*3.788} liter` 
   
   convParaMass.textContent =  `${inputVal} kilogram = ${(inputVal*2.204).toFixed(3)} pound |  ${inputVal} pound = ${(inputVal*0.453).toFixed(3)} kilogram`
   
   convParaTime.textContent =  `${inputVal} seconds= ${(inputVal*0.00027777777).toFixed(8)} hours|  ${inputVal} hours= ${inputVal*3600} seconds | ${inputVal} hours= ${inputVal*60} minutes` 

}