import {useState} from 'react';
import axios from 'axios';

const ReturnBook = ({cardState,setCardState}) => {
    const [book,setBook] = useState('');
    const [returner,setReturner] = useState('');
    const [res,setRes] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.put("http://localhost:5000/Python/api/return",{
                book: book,
                returnee: returner,
            })
            console.log(response.data.msg);
            setRes(response.data.msg)
            if (response.data.msg === "book returned") {
                setCardState(0);
            }
        } catch (err) {
            console.log("Error in returning book : "+err);
        }
    };

    return(
        <div className="cardMainContainer">
            Book name: <input 
                type="text" 
                className="input1"
                onChange={(e) => {setBook(e.target.value)}}
                value={book}
            />
            Your name: <input 
                type="text" 
                className="input2"
                onChange={(e) => {setReturner(e.target.value)}}
                value={returner}
            />
            <button className="actionButton" onClick={handleClick}>Return Book!!</button>
            <div>{res ? res : <p></p>}</div>
        </div>
    )
}

export default ReturnBook;