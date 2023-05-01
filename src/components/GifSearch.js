/*GifSearch
The GifSearch component will render a form that receives the user input for the Giphy search. 
The text input should be a controlled component that stores the value of the input in its 
component state and renders the DOM accordingly.
 The React component is always in charge of what the DOM looks like.

GifSearch should receive a callback prop from its parent. On a submit event,
 it should invoke that callback prop with the value of the text input. 
 It is this callback function, defined in GifListContainer, 
 that will actually query the API with the text the user has entered*/

 /*import { useState } from "react";*/


 function GifSearch({input},setInput,handleSubmit){
    /*const[input,setInput]=useState()*/

     function handleInput(event){
    setInput(event.target.value)
    }


    return(
        <>
          <form onSubmit={handleSubmit}>
            <input
             type="text"
             onChange={handleInput}
             value={input}
             />
             <p>{input}</p>
            
          </form>
        </>
    )
 }
 export default GifSearch;