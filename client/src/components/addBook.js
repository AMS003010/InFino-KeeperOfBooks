import {useState} from 'react';

const AddBook = ({cardState,setCardState}) => {
    const [name,setName] = useState('');
    const [author,setAuthor] = useState('');
    const [pub,setPub] = useState('');
    const [ser,setSer] = useState('');
    const [res,setRes] = useState('');

    const handleClick = async () => {
        const response = await fetch('/Js/api/addbook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name":name,
                "author":author,
                "publication":pub,
                "series":ser
            })
        });

        if (!response.ok) {
            console.log("Unable to add a book");
            return;
        }

        const data = await response.json();
        console.log(data.msg);
        setRes(data.msg)
        if(data.msg === "Book added") {
            setCardState(0);
        }
    };

    return(
        <div className="cardMainContainer">
            Book name: <input 
                type="text" 
                className="input1"
                onChange={(e) => {setName(e.target.value)}}
                value={name}
            />
            Author: <input 
                type="text" 
                className="input2"
                onChange={(e) => {setAuthor(e.target.value)}}
                value={author}
            />
            Publications: <input 
                type="text" 
                className="input3"
                onChange={(e) => {setPub(e.target.value)}}
                value={pub}
            />
            Series: <input 
                type="text" 
                className="input4"
                onChange={(e) => {setSer(e.target.value)}}
                value={ser}
            />
            <button className="actionButton" onClick={handleClick}>Add!!</button>
            <div>{res ? res : <p></p>}</div>
        </div>
    )
}

export default AddBook;