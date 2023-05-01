import GifListContainer from "./GifListContainer";

/**GifList receives data from its props and renders html given the input data.
  It can render a top level <ul> with each gif as an <li>. */

function GifList({data},{input}){
const errorMessage="Data not Available"    
function checkData(){
    if (item.includes(input)) {
        return item;
      } else {
        return errorMessage;
      }

}
    return(
        <>
        <ul>
            {data.map((item, index) => (
            <li key={index}>
                {checkData(item)}
            </li>
            ))} 
        </ul>
        <p>{errorMessage}</p>
        </>
    
    )
}
    


export default GifList;