import React, { type ReactElement, type ReactNode} from 'react'
import { MdPaid as MoneyIcon } from 'react-icons/md'
import { NavLink } from 'react-router-dom';

interface CardProps {
  title: string;
  content: string;
  icon: ReactNode;
  callToAction: ReactNode;
}

const ThreeCards = (): ReactElement => {
  return (
    <div className='flex justify-between max-w-3xl mx-auto'>
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
    <div>
      {icon}
      <h1>{title}</h1>
      <p>{content}</p>
      {callToAction}
    </div>
  )
}

const SignUpButton = (): ReactElement => {
  return (
    <NavLink to="/signup">
    <button className='p-4 border-1 hover:bg-gray-400 cursor-pointer'>
      Sign Up
    </button>
    </NavLink>
  )
}

const LeaderBoardButton = (): ReactElement => {
  return (
    <NavLink to="/leaderboard">
      <button className='p-4 border-1 hover:bg-gray-400 cursor-pointer'>
        View
      </button>
    </NavLink>
  )
}

const data = [
  {title: "Place Bets", content: "Correctly guess the dice roll", icon: <MoneyIcon fontSize={150}/>, callToAction: <SignUpButton /> },
  {title: "Win currency", content: "If you guess is correct", icon: <MoneyIcon fontSize={150}/>, callToAction: <SignUpButton />},
  {title: "Leader board", content: "Compare your result to others", icon: <MoneyIcon fontSize={150}/>, callToAction: <LeaderBoardButton />}
]

export default ThreeCards


