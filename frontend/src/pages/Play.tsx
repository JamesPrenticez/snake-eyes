import React from 'react'
import Dice from '../components/dice/Dice'
import Body from '../components/layout/Body'

const Play = () => {
  return (
    <Body>
      <div className=" max-w-5xl mx-auto">
        <div className="mt-12 space-y-12">
          <div className="text-center font-bold">
            {/* <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-700/5 to-sky-400/95"> */}
            <h2 className="text-7xl font-extrabold text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(52deg, #1cd689  3%, #22cfaf  97%)" }}>
              Feeling Lucky? 
            </h2>

              <Dice />
          </div>
        </div>
      </div>
    </Body>
  )
}

export default Play

// https://codepen.io/reets/pen/RaJJZj
// https://codepen.io/Jayjava/pen/rNjNrLL