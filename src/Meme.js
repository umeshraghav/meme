import React, {useState} from 'react'

function Meme({singleMeme,setsingleMeme}) {

        const [memeData, setMemeData] = useState({
            template_id : singleMeme.id,
            username : "umeshraghav55",
            password : "v,Q*,3(`tm,7hNL.",
            boxes:[]
        })



        const generateMeme = async()=>{
            let url = `https://api.imgflip.com/caption_image?template_id=${memeData.template_id}&username=${memeData.username}&password=${memeData.password}`
       
                memeData.boxes.map((box,index)=>{
                  return  url+= `&boxes[${index}][text]=${box.text}`
                })
                const response = await fetch(url)
                const data = await response.json()

                setsingleMeme({...singleMeme, url :data.data.url})
                 
       
        }



    return (
        <div>
            <div className="meme">
            <img src={singleMeme.url} alt={singleMeme.name} />

            </div>


            <div className="btns"> 
                <div>
                      {  
                       [...Array(singleMeme.box_count)].map((_, index)=>(
                           <input key={index} type="text" placeholder={`${index+1} content`} 
                            onChange={(e)=>{
                                const newBox = memeData.boxes;
                                    newBox[index] ={text: e.target.value};
                                    setMemeData({...memeData, boxes:newBox})

                            }}
                           
                           />
                       ))  
                      
                      
                      }
                </div>

            <button className="btn btn1" onClick={generateMeme}> Generate Meme </button>
                
            <button className="btn btn2" onClick={()=> setsingleMeme(null)}> Go to MemeList </button>

            </div>
        </div>
    )
}

export default Meme
