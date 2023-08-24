
//define function 
function Button({text,onClick}){  //here i did destructe the props to use direct with name 
    return(
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}

//export 
export default Button;