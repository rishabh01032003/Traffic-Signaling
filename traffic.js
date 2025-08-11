let lights = document.querySelectorAll(".light")
console.log(lights)

let currentLight = 0

// initialize first light

lights[currentLight].classList.add('active')

setInterval(()=>{
    changeLight()
},3000)

const changeLight=()=>{
    lights[currentLight].classList.remove('active')
    //move to next light
    currentLight ++

    if(currentLight>2){
        currentLight=0
    }

    //turn of the light
    lights[currentLight].classList.add('active')
}

