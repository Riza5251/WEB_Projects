const header=document.getElementById('header')
const title=document.getElementById('title')
const profile_img=document.getElementById('profile_img')
const excerpt=document.getElementById('excerpt')
const non=document.getElementById('name')
const date=document.getElementById('date')

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bg_texts=document.querySelectorAll('.animated-bg-text')


setTimeout(getdata, 2500) // time is in miliseconds
function getdata()
{
    header.innerHTML=' <img src="https://plus.unsplash.com/premium_photo-1661963748474-56c522a0921a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D" >'
    title.innerHTML='Lorem ipsum dolor sit amet.'
    excerpt.innerHTML=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ea!'
    profile_img.innerHTML=' <img src="https://randomuser.me/api/potraits/men/45.jpg" alt="">'
    non.innerHTML='John Doe'
    date.innerHTML='Mar 24 ,2024'
}

animated_bgs.forEach(bg =>bg.classList.remove('animated-bg-text'))
animated_bg_texts.forEach(bg =>bg.classList.remove('animated-bg-text'))