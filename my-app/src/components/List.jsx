
//Answer-4

//define function
function List({items}){
    const itemList = items.map((item)=>
        <li key={item}>{item}</li>
    );

    //return list
    return <ul>{itemList}</ul>
}

//export 
export default List;

