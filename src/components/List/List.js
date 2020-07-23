import React, {useState} from 'react';
import './List.css';

const List = () => {

    const [state,
        setState] = useState({
        items: [1, 2, 3]
    })

    const addItemHandler = () => {
        setState((prevState) => {
            return {
                items: prevState
                    .items
                    .concat(prevState.items.length + 1)
            };
        });
    }

    const removeItemHandler = (selIndex) => {
        setState((prevState) => {
            return {
                items: prevState
                    .items
                    .filter((item, index) => index !== selIndex)
            };
        });
    }

    const listItems = state
        .items
        .map((item, index) => (
            <li key={index} className="ListItem" onClick={() => removeItemHandler(index)}>
                {item}
            </li>
        ));



        
    return (
            <div>
                <button className="Button" onClick={addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <ul className="List">
                    {listItems}
                </ul>
            </div>  )
}

export default List;