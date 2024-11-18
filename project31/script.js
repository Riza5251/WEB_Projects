 const resultel=document.getElementById('result')
 const lengthel=document.getElementById('length')
 const uppercaseel=document.getElementById('uppercase')
 const lowercaseel=document.getElementById('lowercase')
 const symbolsel=document.getElementById('symbols')
 const numberel=document.getElementById('number')
 const generateel=document.getElementById('generate')
 const clipboardel=document.getElementById('clipboard')

 const Randomfun={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomsymbols
 }

 clipboardel.addEventListener('click', () => {
     const textarea= document.createElement('textarea')
     const password =resultel.innerText

     if(!password) {
        return
     }
     textarea.value=password
     document.body.appendChild(textarea)
     textarea.select()
     document.execCommand('copy')
     textarea.remove()
     alert('Password copied to clipboard')
    })

 generateel.addEventListener('click',() =>{
     const length = +lengthel.value
     const haslower = lowercaseel.checked
     const hasupper = uppercaseel.checked
     const hasnumber = numberel.checked
     const hassymbol = symbolsel.checked

     resultel.innerText = generatepassword(haslower ,hasupper ,hasnumber, hassymbol,length)
 })


  function generatepassword( lower, upper,number,symbol,length){

       let generatedpassword = ''
       const typescount = lower + upper + number + symbol 
       const typesarr = [{lower}, {upper}, {number}, {symbol}].filter(item =>Object.values(item)[0])

       if(typescount === 0)
       {
        return ''
       }

       for(let i=0; i<length ;i+=typescount){
        typesarr.forEach(type => {
            const funcname= Object.keys(type)[0]
            generatedpassword += Randomfun[funcname]()
        })

       }
       const  finalpassword = generatedpassword.slice(0,length)
        return finalpassword
    }
  




function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}



function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}



 function getRandomsymbols(){
    const symbols='!@#$%^&*(){}?/><'

    return symbols[Math.floor(Math.random()*symbols.length)]

 }
 






 