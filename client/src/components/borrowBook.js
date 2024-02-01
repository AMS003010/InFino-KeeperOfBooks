import {useState} from 'react';
import axios from 'axios';

const BorrowBook = ({cardState,setCardState}) => {
    const [book,setBook] = useState('');
    const [borrower,setBorrower] = useState('');
    const [res,setRes] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.put("http://localhost:5000/Python/api/borrow",{
                book: book,
                borrower:borrower,
            })
            console.log(response.data.msg);
            setRes(response.data.msg)
            if (response.data.msg === "book borrowed") {
                setCardState(0);
            }
        } catch (err) {
            console.log("Error in borrowing book : "+err);
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
                onChange={(e) => {setBorrower(e.target.value)}}
                value={borrower}
            />
            <button className="actionButton" onClick={handleClick}>Borrow!!</button>
            <div>{res ? res : <p></p>}</div>
        </div>
    )
}

export default BorrowBook;