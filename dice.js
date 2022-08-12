
const rollDice=()=>{
  let myDice = document.querySelector('.dice')
  removeDice(myDice)
  let dice = []
  for (let i = 0; i<5; i++){
      let die = Math.floor(Math.random()*6)+1 
      dice.push(die)
  }
  let vDice = document.createElement('p')
  vDice.innerText = `[${dice[0]}] [${dice[1]}] [${dice[2]}] [${dice[3]}] [${dice[4]}]`
  myDice.appendChild(vDice)
  myScore(dice)

}

const removeDice=(parent)=>{
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

const myScore=(dice)=>{
  let vScore = document.querySelector('.score')
  removeDice(vScore)
  let diceCount = {
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
  }
  let score = 0
  for (i = 0; i<5; i++){
      diceCount[dice[i]] += 1
  }
  for (const [key, value] of Object.entries(diceCount)){
      if (key == '1'){
          if (value >= 3){
              score += 1000
          }else{
              score += 100 * value
          }
      }else if (key == '5'){
          if (value >= 3){
              score += 500
          }else{
              score += 50 * value
          }
      }else if(value >= 3){
          score += parseInt(key) * 100

      }
  }

  let rollScore = document.createElement('h4')
  rollScore.innerText = `Score: ${score}`
  vScore.appendChild(rollScore)

  total(score)
}