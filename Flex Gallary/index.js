// const panels = document.querySelectorAll(".panel");
// let prev = 0;

// panels.forEach(element => 
// {
//     element.addEventListener("click" , () => {
//         element.classList.add("open");
//         element.classList.add("open-active");
//         if(prev !== 0)
//         { 
//             prev.classList.remove("open");
//             element.classList.remove("open-active");
//         }
//         prev = element;
//     })
// });

const panels = document.querySelectorAll(".panel");
function toggleOpen()
{
    this.classList.toggle('open');
}

function toggleActive(e)
{
    if(e.propertyName.includes('flex'))
    { this.classList.toggle('open-active') } 
}

panels.forEach(panel => panel.addEventListener('click' , toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend' , toggleActive));