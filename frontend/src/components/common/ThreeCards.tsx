import React, { type ReactElement, type ReactNode} from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from "../icons/Icon"

interface CardProps {
  title: string;
  content: string;
  icon: ReactNode;
  callToAction: ReactNode;
}

const ThreeCards = (): ReactElement => {
  return (
    <div className='flex justify-between gap-8'>
      {data.map((item, index) => (
        <Card 
          key={index}
          {...item}
        />
      ))}
    </div>
  )
}

const Card = ({title, content, icon, callToAction}: CardProps): ReactElement => {
  return (
    <div className='flex flex-col items-center justify-center border px-12 py-24 rounded-lg'>
      <div>{icon}</div>
      <h1 className='font-medium text-2xl mt-4'>{title.toLocaleUpperCase()}</h1>
      <p>{content}</p>
      <div className='mt-auto'>{callToAction}</div>
    </div>
  )
}

const PlayNowButton = (): ReactElement => {
  return (
    <NavLink to="/signup">
      <button className='px-6 py-2 rounded text-white font-medium bg-blue-500 hover:bg-blue-400 cursor-pointer mt-4'>
        Play Now
      </button>
    </NavLink>
  )
}

const SignUpButton = (): ReactElement => {
  return (
    <NavLink to="/signup">
      <button className='px-6 py-2 rounded text-white font-medium bg-green-600 hover:bg-green-500 cursor-pointer mt-4'>
        Sign Up
      </button>
    </NavLink>
  )
}

const LeaderBoardButton = (): ReactElement => {
  return (
    <NavLink to="/leaderboard">
      <button className='px-6 py-2 rounded text-white font-medium bg-yellow-500 hover:bg-yellow-400 cursor-pointer mt-4'>
        View
      </button>
    </NavLink>
  )
}

const data = [
  {title: "Place Bets", content: "Correctly guess the dice roll", icon: <Icon style={{color: 'red'}} src="./icons/coinStack.svg" width={100} />, callToAction: <PlayNowButton /> },
  {title: "Win currency", content: "If you guess is correct", icon: <Icon  src="./icons/moneyBag.svg" width={100} />, callToAction: <SignUpButton />},
  {title: "Leader board", content: "Compare your result to others", icon: <Icon src="./icons/leaderboard.svg" width={100} />, callToAction: <LeaderBoardButton />}
]

export default ThreeCards


