import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {props.stats[0]}</p>
      <p>Neutral {props.stats[1]}</p>
      <p>Bad {props.stats[2]}</p>
      <p>All {props.stats[0]+props.stats[1]+props.stats[2]}</p>
      <p>Average {((props.stats[0]*1)+(props.stats[2]*-1))/(props.stats[0]+props.stats[1]+props.stats[2])}</p>
      <p>Positive {100*(props.stats[0])/(props.stats[0]+props.stats[1]+props.stats[2])} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <Statistics stats={[good, neutral, bad]}/>
    </div>
  )
}

export default App