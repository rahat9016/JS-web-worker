const total = document.getElementById("total");
const bg = document.getElementById("bg");
const worker = new Worker('worker.js')


total.addEventListener("click", () => {    
    worker.postMessage('hello working is running...')
});

worker.onmessage = function(message){
    console.log(message.data)   
}

bg.addEventListener('click', () => {
    if(document.body.style.background !== 'blue'){
        document.body.style.background = 'blue' 
    }else{
        document.body.style.background ='green' 
    }
})
