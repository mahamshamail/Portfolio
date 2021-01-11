console.log("theme javascript is working")
let desc = localStorage.getItem('desc')
if(desc == null){
    setDesc('imerciv')
}
else{
    setDesc(desc)
}
let descButtons = document.getElementsByClassName('job-button')

for (var i =0;  descButtons.length > i; i++){
    descButtons[i].addEventListener('click', function(){
        let job = this.dataset.job
        console.log("Option Clicked: ", job)
        setDesc(job)
    })
}

function setDesc(job){
    if(job == 'imerciv'){
        console.log(job)
        document.getElementById('desc-1').style.visibility = "visible"
        document.getElementById('desc-1').style.height = "100px"
        document.getElementById('desc-1').style.fontSize = "20px"


        document.getElementById('desc-2').style.visibility = "hidden"
        document.getElementById('desc-2').style.height = "0px"
        document.getElementById('desc-2').style.fontSize = "0px"

        document.getElementById('desc-3').style.visibility = "hidden"
        document.getElementById('desc-3').style.height = "0px"
        document.getElementById('desc-3').style.fontSize = "0px"


    }
    if(job == 'cheetal'){
        console.log(job)
        document.getElementById('desc-1').style.visibility = "hidden"
        document.getElementById('desc-1').style.height = "0px"
        document.getElementById('desc-1').style.fontSize = "0px"


        document.getElementById('desc-2').style.visibility = "visible"
        document.getElementById('desc-2').style.height = "100px"
        document.getElementById('desc-2').style.fontSize = "20px"

        document.getElementById('desc-3').style.visibility = "hidden" 
        document.getElementById('desc-3').style.height = "0px"
        document.getElementById('desc-3').style.fontSize = "0px"

    }
    if(job == 'scube'){
        console.log(job)
        document.getElementById('desc-1').style.visibility = "hidden" 
        document.getElementById('desc-1').style.height = "0px"
        document.getElementById('desc-1').style.fontSize = "0px"


        document.getElementById('desc-2').style.visibility = "hidden"
        document.getElementById('desc-2').style.height = "0px"
        document.getElementById('desc-2').style.fontSize = "0px"


        document.getElementById('desc-3').style.visibility = "visible" 
        document.getElementById('desc-3').style.height = "100px"
        document.getElementById('desc-3').style.fontSize = "20px"

    }
   
    localStorage.setItem('desc',job)
}