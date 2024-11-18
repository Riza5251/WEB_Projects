const smallCups=document.querySelectorAll('.cup-small')
const liters=document.getElementById('liters')
const percentage=document.getElementById('percentage')
const remained=document.getElementById('remained')


updateBigCup()


smallCups.forEach((cup,idx)=>{ 
       cup.addEventListener('click',()=>highlightcups(idx))
})
function highlightcups(idx)
{

    if(smallCups[idx].classList.contains('full')&& !smallCups[idx].nextElementSibling.classList.contains('full'))
    {
        idx--
    }
    smallCups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }


    })

    updateBigCup()

}

  function updateBigCup() {
      const fullcup=document.querySelectorAll('.cup-small.full').length

      const totalCups=smallCups.length

      if(fullcup === 0) {
        percentage.style.visibility='hidden'
        percentage.style.height=0
      }
      else{
        percentage.style.visibility='visible'
        percentage.style.height=`${fullcup / totalCups * 230}px`
      }
      percentage.innerText=`${fullcup /totalCups *100}%`


      if(fullcup===totalCups)
      {
        remained.style.visibility='hidden'
        remained.style.height=0
      }
      else
      {
        remained.style.visibility='visible'
        liters.innerText=`${(2- (250*fullcup)/1000)}L`
      }
  }