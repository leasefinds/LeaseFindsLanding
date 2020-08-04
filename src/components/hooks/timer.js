import React from "react"
import useCountDown from "react-countdown-hook"

const times = distanceToDate => {
  let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

  const numbersToAddZeroTo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  if (numbersToAddZeroTo.includes(minutes)) {
    minutes = `0${minutes}`
  }

  if (numbersToAddZeroTo.includes(seconds)) {
    seconds = `0${seconds}`
  }

  return { minutes, seconds }
}

const initialTime = 10 * 60 * 1000 // initial time in milliseconds // 10 minutes

const SecondInterval = () => {
  const [timeLeft, start] = useCountDown(initialTime, 1000)

  // start the timer during the first render
  React.useEffect(() => {
    start()
  }, [start])

  return (
    <div className="counter">
      <span>{times(timeLeft).minutes}</span> {` : `}
      <span>{times(timeLeft).seconds}</span>
    </div>
  )
}

const Timer = () => {
  return (
    <>
      <SecondInterval />
    </>
  )
}

export default Timer
