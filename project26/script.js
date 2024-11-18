const slidercontainer=document.querySelector('.slider-container')
const slideleft=document.querySelector('.left-slide')
const slideright=document.querySelector('.right-slide')
const upbutton=document.querySelector('.up-button')
const downbutton=document.querySelector('.down-button')
const slideslength=slideright.querySelectorAll('div').length



let activeslideindex=0

slideleft.style.top=`-${(slideslength-1)*100}vh`

upbutton.addEventListener('click',()=>changeslide('up'))
downbutton.addEventListener('click',()=>changeslide('down'))

const changeslide=(direction)=>{
    const sliderheight=slidercontainer.clientHeight
    if(direction=='up')
    {
        activeslideindex++
        if(activeslideindex>slideslength-1){
            activeslideindex=0
        }
    }
   else if(direction=='down')
    {
        activeslideindex--
        if(activeslideindex<0){
            activeslideindex=slideslength-1
        }
    }
    slideright.style.transform=`translateY(-${activeslideindex*sliderheight}px)`
    slideleft.style.transform=`translateY(${activeslideindex*sliderheight}px)`
}