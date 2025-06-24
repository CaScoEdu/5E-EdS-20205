let listItems = document.querySelectorAll("#goals ul li");
let listItems2 = document.querySelectorAll("#skills ul li")

let options = {
    root: null, //null -> document is the root
    rootMargin: "0px",
    threshold: [0.28, 1]
}


let observer = new IntersectionObserver((entries, observer) => {
    let i=0;
    entries.forEach((entry) => {

        
        if(entry.isIntersecting){
            entry.target.style = `animation: to-top 1s forwards; animation-delay: ${i}s;`
        }

    })

}, options);

for(let i=0; i<listItems.length; i++){
    observer.observe(listItems[i]);
}

for(let i=0; i<listItems2.length; i++){
    observer.observe(listItems2[i]);
}