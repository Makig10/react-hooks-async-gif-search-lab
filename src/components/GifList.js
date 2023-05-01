

/**GifList receives data from its props and renders html given the input data.
  It can render a top level <ul> with each gif as an <li>. */

function GifList({data},{input}){
const errorMessage="Data not Available"    
function checkData(){
    if (data.includes(input)) {
        return data;
      } else {
        return errorMessage;
      }

}
    return(
        <>
        <ul>
            {data.map((item, index) => (
            <li key={index}>
                {checkData(data)}
            </li>
            ))} 
        </ul>
        <p>{errorMessage}</p>
        </>
    
    )
}
    


export default GifList;