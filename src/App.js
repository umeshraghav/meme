import { useEffect, useState } from 'react';


import './App.css';
import MemeList from './MemeList';
import Meme from './Meme'

function App() {
  const [memes, setMemes] = useState([]);
const [singleMeme, setsingleMeme] = useState(null)



  useEffect( async()=>{
       const response =  await fetch('https://api.imgflip.com/get_memes');
       const data = await response.json();
       setMemes(data.data.memes)
       //console.log(data.data.memes)
  },[])


   

  return (
    <div className="App">
    {singleMeme === null? <MemeList memes={memes}  setsingleMeme={setsingleMeme}/> : <Meme setsingleMeme={setsingleMeme} singleMeme={singleMeme}/> }
    </div>
    );
}

export default App;
