import {useState} from 'react';

import AddBook from './addBook';
import ReturnBook from './returnBook';
import DeleteBook from './deleteBook';
import BorrowBook from './borrowBook';
import NotBook from './nothBook';

const Home = () => {
    const [cardState,setCardState] = useState(0);
    const cardList = [<NotBook />,<AddBook cardState={cardState} setCardState={setCardState}/>,<BorrowBook cardState={cardState} setCardState={setCardState}/>,<ReturnBook cardState={cardState} setCardState={setCardState}/>,<DeleteBook cardState={cardState} setCardState={setCardState}/>]
    return(
        <div className='mainContainer'>
            <h1 className="mainHeading">Infino</h1>
            <h1 className="mainsubHead">keeper . of . the . books</h1>
            <div className="mainWrapper">
                <div className="div1" onClick={() => setCardState(1)}>Add a book</div>
                <div className="div2" onClick={() => setCardState(2)}>Borrow a book</div>
                <div className="div3" onClick={() => setCardState(3)}>Return a book</div>
                <div className="div4" onClick={() => setCardState(4)}>Delete a book</div>  
                <div className="div5">
                    <div className="dot1">.</div>
                    <div className="dot2">.</div>
                    <div className="dot3">.</div>
                </div>  
            </div>
            <div className='cardWrapper'>{cardList[cardState]}</div>
            <div className='madeWithLove'>made with ❣️ by &nbsp;<span>abhijith</span></div>
        </div>
    )
}

export default Home;