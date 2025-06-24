let dati = document.querySelectorAll(".description");


let options = {
    root: null, //null -> document is the root
    rootMargin: "0px",
    threshold: [0.68, 1]
}


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {

        
        if(entry.isIntersecting){
            entry.target.style = "animation: to-right-description 1s forwards;"
        }

    })

}, options);

for(let i=0; i<dati.length; i++){
    observer.observe(dati[i]);
}