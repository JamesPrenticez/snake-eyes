import React, { useState, type ReactElement, useRef } from 'react'
import styles from './Dice.module.css'

const Dice = (): ReactElement => {

  const [diceOne, setDiceOne] = useState(6)
  const [diceTwo, setDiceTwo] = useState(1)

  const diceOneRef = useRef(null)
  const diceTwoRef = useRef(null)

  // var elDiceOne       = document.getElementById('dice1');
  // var elDiceTwo       = document.getElementById('dice2');
  // var elComeOut       = document.getElementById('roll');
  
  // elComeOut.onclick   = function () {rollDice();};
  
  const rollDice = (): void => {
  
    setDiceOne(Math.floor((Math.random() * 6) + 1))
    setDiceTwo(Math.floor((Math.random() * 6) + 1))
   
    console.log(diceOne, diceTwo);

    const spinDice = (): void => {
      if (diceOneRef.current !==null ){
        for (let i = 1; i <= 6; i++) {
          console.log(diceOneRef)
          console.log(i)
          // .classList.remove('show-' + i);
     }
        if (diceOne === i) {
          diceOneRef.classList.add('show-' + i);
        }
    }

    }
  
    // for (var k = 1; k <= 6; k++) {
    //   elDiceTwo.classList.remove('show-' + k);
    //   if (diceTwo === k) {
    //     elDiceTwo.classList.add('show-' + k);
    //   }
    // } 

    // setTimeout(rollDice(), 1000);
  }

  const sides = [
    {id:1, value: 0},
    {id:2, value: 1},
    {id:3, value: 2},
    {id:4, value: 3},
    {id:5, value: 4},
    {id:6, value: 5},
  ] 
  const dots = [
    {id:1, value: 0},
    {id:2, value: 1},
    {id:3, value: 2},
    {id:4, value: 3},
    {id:5, value: 4},
    {id:6, value: 5},
  ] 

  const dotsArray = Array.from({ length: diceOne }, (element, index) => {
    return (
      { 
        id: index,
        value: index + 1
      }
    )
  });

  console.log(dotsArray)

  // Array.from({ length: 6 }, () => 6)

  return (
    <div className='bg-red-100 p-5 space-x-4'>

    <div className='relative inline-block'>
      
      {/* DICE ONE */}
      <div className='absolute left-[150px]' ref={diceOneRef}>
        
        {/* SIDE */}
        <div>
          {sides.map((item, index) => {
            console.log(item.id)
            console.log(index)

            const color = item.id === 1 ?    "green"  // 'hidden translate-z-[-3.1em] ' 
                : item.id === 2 ?  "red"  // 'hidden translate-z-[-3.1em] -rotate-y-180 show-2 bg-green-500' 
                : item.id === 3 ?  "blue"  // 'translate-z-[-3.1em] -rotate-y-90 bg-red-500' 
                : item.id === 4 ?  "yellow"  // 'translate-z-[-3.1em] rotate-x-90 bg-yellow-400' 
                : item.id === 5 ?  "cyan"  // 'translate-z-[-3.1em] -rotate-x-90 bg-sky-500' 
                : item.id === 6 ?  "purple"  // 'translate-z-[-3.1em] rotate-90 bg-purple-500' 
                : 'border-red-500 border';

        const orientation = item.id === 1 ? 'transform: translateZ(3.1em)' 
                : item.id === 2 ? 'transform: rotateY(90deg) translateZ(3.1em)' 
                : item.id === 3 ? 'transform: rotateY(-90deg) translateZ(3.1em)' 
                : item.id === 4 ? 'transform: rotateX(90deg) translateZ(3.1em)' 
                : item.id === 5 ? 'transformrotateX(-90deg) translateZ(3.1em)' 
                : item.id === 6 ? 'transformrotateY(-180deg) translateZ(3.1em)' 
                : 'border-red-500 border'


              return (
                <div
                  key={index} 
                  // className={`${styles.side} ${styles.one}`}
                  className="rounded w-[100px] h-[100px] border-[#e5e5e5] text-center leading-[2rem] transform"
                  style={{
                    backgroundColor: color,
                    translate: orientation // 'transform: rotateY(90deg) translateZ(3.1em)'
                  }}
                >
                  
                    {item.id}
                    {item.value}

                  <p className='block mt-12'>
                    {diceOne}
                  </p>

                  {/* {dotsArray.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`absolute w-[15px] h-[15px] mt-[-10px] mr-[5px] mb-[5px] ml-[-10px] rounded-full bg-red-500 shadow shadow-red-800
                          ${
                            item.value === 1 ? 'left-0' 
                            : item.value === 2 ? 'left-[10px]' 
                            : item.value === 3 ? 'left-[20px]' 
                            : item.value === 4 ? 'left-[30px]' 
                            : item.value === 5 ? 'top-[50px] left-[40px]' 
                            : item.value === 6 ? 'bottom-[50px] left-[50px]' 
                            : ''
                          }`}
                          >

                        </div>
                      )
                    })
                  } */}



                  {/* <div className={`${styles.dot} ${styles.one1}`}></div> */}
                </div>
              )
            })
          }
          {/* {dots.map((item, index) => {
              return (
                <div
                  key={index} 
                  className={`${styles.side} ${styles.one}`}
                >
                  <div className={`${styles.dot} ${styles.one1}`}></div>
                </div>
              )
            })
          } */}
        </div>



        {/* <div id="dice-one-side-one" className={`${styles.side} ${styles.one}`}>
          <div className={`${styles.dot} ${styles.one1}`}></div>
        </div>
        <div id="dice-one-side-two" className={`${styles.side} ${styles.two}`}>
          <div className={`${styles.dot} ${styles.two1}`}></div>
          <div className={`${styles.dot} ${styles.two2}`}></div>
        </div>
        <div id="dice-one-side-three"  className={`${styles.side} ${styles.three}`}>
          <div className={`${styles.dot} ${styles.three1}`}></div>
          <div className={`${styles.dot} ${styles.three2}`}></div>
          <div className={`${styles.dot} ${styles.three3}`}></div>
        </div>
        <div id="dice-one-side-four"  className={`${styles.side} ${styles.four}`}>
          <div className={`${styles.dot} ${styles.four1}`}></div>
          <div className={`${styles.dot} ${styles.four2}`}></div>
          <div className={`${styles.dot} ${styles.four3}`}></div>
          <div className={`${styles.dot} ${styles.four4}`}></div>
        </div>
        <div id="dice-one-side-five"  className={`${styles.side} ${styles.five}`}>
          <div className={`${styles.dot} ${styles.five1}`}></div>
          <div className={`${styles.dot} ${styles.five2}`}></div>
          <div className={`${styles.dot} ${styles.five3}`}></div>
          <div className={`${styles.dot} ${styles.five4}`}></div>
          <div className={`${styles.dot} ${styles.five5}`}></div>
        </div>
        <div id="dice-one-side-six" className={`${styles.side} ${styles.six}`}>
          <div className={`${styles.dot} ${styles.six1}`}></div>
          <div className={`${styles.dot} ${styles.six2}`}></div>
          <div className={`${styles.dot} ${styles.six3}`}></div>
          <div className={`${styles.dot} ${styles.six4}`}></div>
          <div className={`${styles.dot} ${styles.six5}`}></div>
          <div className={`${styles.dot} ${styles.six6}`}></div>
        </div> */}


      </div>
    </div>

    {/* DICE TWO */}
    {/* <div className='relative inline-block'>
      <div id='dice2' className={`${styles.dice} ${styles.diceTwo}`}>
        <div id="dice-two-side-one" className={`${styles.side} ${styles.one}`}>
          <div className={`${styles.dot} ${styles.one1}`}></div>
        </div>
        <div id="dice-two-side-two" className={`${styles.side} ${styles.two}`}>
          <div className={`${styles.dot} ${styles.two1}`}></div>
          <div className={`${styles.dot} ${styles.two2}`}></div>
        </div>
        <div id="dice-two-side-three" className={`${styles.side} ${styles.three}`}>
          <div className={`${styles.dot} ${styles.three1}`}></div>
          <div className={`${styles.dot} ${styles.three2}`}></div>
          <div className={`${styles.dot} ${styles.three3}`}></div>
        </div>
        <div id="dice-two-side-four" className={`${styles.side} ${styles.four}`}>
          <div className={`${styles.dot} ${styles.four1}`}></div>
          <div className={`${styles.dot} ${styles.four2}`}></div>
          <div className={`${styles.dot} ${styles.four3}`}></div>
          <div className={`${styles.dot} ${styles.four4}`}></div>
        </div>
        <div id="dice-two-side-five" className={`${styles.side} ${styles.five}`}>
          <div className={`${styles.dot} ${styles.five1}`}></div>
          <div className={`${styles.dot} ${styles.five2}`}></div>
          <div className={`${styles.dot} ${styles.five3}`}></div>
          <div className={`${styles.dot} ${styles.five4}`}></div>
          <div className={`${styles.dot} ${styles.five5}`}></div>
        </div>
        <div id="dice-two-side-six" className={`${styles.side} ${styles.six}`}>
          <div className={`${styles.dot} ${styles.six1}`}></div>
          <div className={`${styles.dot} ${styles.six2}`}></div>
          <div className={`${styles.dot} ${styles.six3}`}></div>
          <div className={`${styles.dot} ${styles.six4}`}></div>
          <div className={`${styles.dot} ${styles.six5}`}></div>
          <div className={`${styles.dot} ${styles.six6}`}></div>
        </div>
      </div> 
   </div> */}

   <div>
      <button 
        className="bg-green-500 hover:bg-green-400 hover:scale-110 transistion duration-500 ease-in-out px-6 py-2 text-white font-bold rounded-lg mt-6"
        onClick={() => {spinDice()}}
      >
        Roll dice!
      </button>
    </div>

    <div>
      {diceOne} &nbsp; {diceTwo}
    </div>
  </div> 

  )
}




export default Dice

// https://www.youtube.com/watch?v=YUmsr9cFdBA
// https://codepen.io/lenasta92579651/pen/yLeVmdW