import React from 'react'

export default function MemeList({memes,setsingleMeme }) {
    return (

        <div>
                 <h2>Choose Meme Template </h2>
        {
            memes.map( (meme) =>{
              return  <section className="template" key={meme.id} onClick={()=> {setsingleMeme(meme)}}> 
        
 
              <div className="memes" style={{backgroundImage : `url(${meme.url})`}} > 
                  
              </div>
      
             </section>
            })
          }

</div>
      
    )
}
