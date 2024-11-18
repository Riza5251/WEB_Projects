const togglebuttons=document.querySelectorAll('.faq-toggle')  //array which will store all the buttons
   


togglebuttons.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active')
    })
})