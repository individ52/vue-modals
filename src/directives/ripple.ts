export default {
    mounted: (el: any) => {
        console.log("el", el);
        el.classList.add("parent-ripple-effect");
        el.addEventListener("click", function (e: any) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement("span");
            ripples.style.left = x + "px";
            ripples.style.top = y + "px";
            ripples.classList.add("span-ripple-effect");
            e.target.append(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 500);
        });
    },
};
