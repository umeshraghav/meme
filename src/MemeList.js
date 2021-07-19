import React from 'react'

export default function MemeList({memes,setsingleMeme }) {
    return (

        <div>
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
