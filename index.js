// select 
let my_list = document.querySelectorAll(".info h3")
// show and rotate
my_list.forEach((item => {
    item.addEventListener("click", (e) => {
        let show = e.currentTarget.parentElement.children[1]
        show.classList.toggle("active")
        let rotate = e.currentTarget.children[0]
        rotate.classList.toggle("rotate")
    })
}))