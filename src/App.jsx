import React from 'react'
import Background from './Components/Background/Background';

const App = () => {
  let heroData = [
    {text1:"Dive into", text2: "what you love"},
    {text1:"Indulge", text2: "your passions"},
    {text1:"Give in to", text2: "your passions"},
  ];

  const [HeroCount, setHeroCount] = useState(2);
  const [playStatus, setplayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} HeroCount={HeroCount}/>
    </div>
  )
}

export default App
