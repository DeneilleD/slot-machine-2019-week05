

/* -----------------------DEFINE VARIABLES----------------------------------------*/
 




const firstReel = document.getElementById('reel1')
const secondReel = document.getElementById('reel2')
const thirdReel = document.getElementById('reel3')
const maxBet = document.getElementById('maxBet')
const minBet = document.getElementById('minBet')
const amount = document.getElementById('amount')
const message = document.getElementById('message')

function getRandomNum(){
  return Math.ceil(Math.random() *  5)
}

function placeMinimumBet(){
  
  if(amount.innerText <= '0'){
    message.innerText = 'You Lose!'
    return 
  }

  firstReel.innerText = getRandomNum()
  secondReel.innerText = getRandomNum()
  thirdReel.innerText = getRandomNum()

  if(firstReel.innerText === secondReel.innerText && secondReel.innerText === thirdReel.innerText){

    amount.innerText = parseInt(amount.innerText) + 50
  }else{
    amount.innerText = parseInt(amount.innerText) - 10
  }

}

function placeMaximumBet (){

  if(amount.innerText <= '0'){
    message.innerText = 'You Lose!'
    return 
  }

  firstReel.innerText = getRandomNum()
  secondReel.innerText = getRandomNum()
  thirdReel.innerText = getRandomNum()

  if(firstReel.innerext === secondReel.innerText && secondReel.innerText === thirdReel.innerText){
    amount.innerText = parseInt(amount.innerText) + 100
    message.innerText = 'You won!'
    
  }else{
    amount.innerText = parseInt(amount.innerText) - 50
  }

}

maxBet.addEventListener('click', placeMaximumBet)
minBet.addEventListener('click', placeMinimumBet )

//vonds help






























// const firstReel = document.getElementById('reel1')
    // const secondReel= document.getElementById('reel2')
    // const thirdReel= document.getElementById('reel3')
    // const minBet= document.getElementById('bet10Dollars')
    // const maxBet= document.getElementById('bet50Dollars')
    // // variable for span holding ammount value
    // const ammountEquals= document.getElementById('ammount')
    // const message = document.getElementById('message')



    // /*'MATH CEIL'= rounds number to 1= whole # MATH RANDOM= spits out #0-1 & then 1-5 with use of (*)*/
    // function getRandomNum(){
    //   return Math.ceil(Math.random() * 5)
    // }


    // // -----------------assigning randum num values to the reel for (slot machine)-------------------------
    // function bet10Dollars(){
    //   if(ammountEquals.innerText <= '0'){
    //     message.innerText= 'BooHoo!! You Lose..'
    //     return
    //   }
    //   firstReel.innerText= getRandomNum()
    //   secondReel.innerText= getRandomNum()
    //   thirdReel.innerText= getRandomNum()

    //   if(firstReel.innerText===  secondReel.innerText && secondReel.innerText=== thirdReel.innerText){
    //     // ammount.innerText(generate new value)
    //     const currentMoney= parseInt(ammountEquals.innerText) +65
    //     ammount.innerText= currentMoney
        

    //   }else{
    //     const currentMoney= parseInt(ammountEquals.innerText)-10
    //     ammount.innerText= currentMoney
    //     message.innerText= 'Whoopsieee.. '
    //   }
    // }

    // /*-----------function BET 50---------*/
    // function bet50Dollars(){

    //  if(ammountEquals.innerText <= '0'){
    //   message.innerText= 'You Loseeee!'
    //   return
    // }
    // firstReel.innerText= getRandomNum()
    // secondReel.innerText= getRandomNum()
    // thirdReel.innerText= getRandomNum()

    //   if(firstReel.innerText === secondReel.innerText && secondReel.innerText === thirdReel.innerText){
    //   const currentMoney= parseInt(ammountEquals.innerText)+ 100
    //   ammountEquals.innerText= currentMoney
    //     message.innerText= 'You are a WINNERRR!'
      
    //   }else{ 
    //     const currentMoney= parseInt(ammountEquals.innerText)-20

    //     ammountEquals.innerText= currentMoney
    //      message.innerText= 'You are a fail'

    //   }
    
    // }


    // minBet.addEventListener('click', bet10Dollars)
    // maxBet.addEventListener('click', bet50Dollars)