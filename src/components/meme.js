import React from 'react'
import '../style.css'

const Meme=()=>{
 const[meme,setmeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/1g8my4.jpg"
 })
 const [allmemes,setallmemes]=React.useState([])


 function change(event){
    const{name,value}=event.target
    setmeme(prevmeme=>({
        ...prevmeme,[name]:value
    }))

 }

 React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setallmemes(data.data.memes))
    
 },[])

    function clicked(meme)
    {   
        const randomNumber=Math.floor(Math.random()* allmemes.length)
        const url=allmemes[randomNumber].url
        setmeme(prevmeme=>
        ({...prevmeme,
            randomImage:url}))
  }
    return(
        <main className='meme-container'>
            <div className='form'>
                <input type='text'
                 placeholder='Top text' 
                 className='form--input'
                 name="topText"
                 value={meme.topText}
                 onChange={change}
                 />
                <input type='text' 
                placeholder='Bottom' 
                className='form--input'
                name="bottomText"
                value={meme.bottomText}
                onChange={change}
                />
                <button onClick={clicked} type='button' className='button'>Get a new meme image🖼</button>
               
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>

        </main>
    );
}
export default Meme