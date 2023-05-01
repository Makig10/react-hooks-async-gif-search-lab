/*GifListContainer
GifListContainer should be a component that does data fetching and then renders its corresponding sub-component. 
That’s it.

In our app, the GifListContainer will be responsible for fetching the data from the Giphy API, 
storing the first 3 gifs from the response in its component state, and passing that data down to its child,
 the GifList component, as a prop.

It will also render a GifSearch component that renders the form. 
GifListContainer should pass down a submit handler function to GifSearch as a prop.*/

import { useState,useEffect } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer(){
    const giphyApi="https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=KolQWiJqBKWwEQFoSetwZAp7QSpM5jsD"
    const[data,setdata]=useState([])
    const[input,setInput]=useState()

    function handleSubmit(e){
     e.preventDefault()
     
     setInput(input)

    }

    useEffect(()=>{
        fetch(giphyApi)
        .then((response)=>(response.json()))
        .then((data)=>{
            setdata(data)
        })
    },[])
 
    return(
        <>
          <GifList data={data} input={input}/>
          <GifSearch input={input} setInput={setInput} handleSubmit={handleSubmit}/>
        </>
    )
}

export default GifListContainer;