document.querySelectorAll(".day .head").forEach((head) => {
    head.addEventListener("click", (e) => {
        let day = head.parentElement
        let body = day.querySelector(".body");
        //let head = day.querySelector(".head");

        body.classList.toggle("visible");

        let img = head.querySelector("button")
        img.style = (img.style.transform == "rotateZ(180deg)") ? img.style = "transform: rotateZ(0deg)" : img.style = "transform: rotateZ(180deg);";
    })
})