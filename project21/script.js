const fill=document.querySelector('.fill')
const empties=document.querySelectorAll('.empty')


fill.addEventListener('dragstart',dragStart)//dragstart is event and dragStart is the function
fill.addEventListener('dragend',dragEnd)

for(const empty of empties) //for of loop
{
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}


function dragStart() {
        this.className+=' hold' //adding  grey border to the  image
        setTimeout(()=> this.className='invisible' ,0)
}
function dragOver(e) {
   e.preventDefault() //preventing the default function of dragover event
  
}
function dragEnter(e) {
    e.preventDefault()
    this.className+=' hovered'
}
function dragEnd()
 {
   this.className='fill'
}
function dragLeave() {
    
  this.className='empty'
}
function  dragDrop(){
    this.className='empty'
    this.append(fill)
}