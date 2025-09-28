import "./BookSelector.css"
import Bookshelf from "../../assets/minhbox/bookshelf4.png"
import BeigeWall from "../../assets/minhbox/beige wall.png"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const BookSelector = ()=>{
    const navigate = useNavigate();
    const books = [
        {
            title: "The Great Gaslight",
            description: "Did you just spill my tea?"
        },
        {
            title: "Cow",
            description: "Moo."
        },
        {
            title: "Unwritten Rule",
            description: "Do not tell me to add more than 4 books. " +
                "Unwritten Rule was written in this book."
        },
        {
            title: "Nuclear Code",
            description: "https://www.youtube.com/watch?v=uNl6Sh01ZIU"
        }
    ];

    const [selectedBook, setSelectedBook] = useState(null);


    function bookClick(index) {
        setSelectedBook(books[index]);
    }
    return(
        <div className="book-selection"
             style={{
                 backgroundImage: `url(${BeigeWall})`
             }}>
            <div className="book-info">
                {(selectedBook!=null) ?
                    (<>
                        <div className="book-title">
                            <h2>{selectedBook.title}</h2>
                        </div>
                        <div className="book-desc">
                            <p>{selectedBook.description}</p>
                        </div>
                        <button className="read-button"
                            onClick={()=>navigate("/doc-sach")}
                            >
                            Read
                        </button>
                    </>)
                    :
                    (
                        <>
                        <p>Select a book</p>
                        </>
                    )}

            </div>
            <div className="bookshelf">
                <div className="book-display"
                     style={{
                         backgroundImage: `url(${Bookshelf})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                     }}
                >

                    {books.map((book, index) => {
                            let bookClass = "book";
                            {/* Applies dark magic*/}
                            if (index > 3 && index < 8) {
                                bookClass = "book book-drop"
                            }
                            return (
                                <div
                                    key={index}
                                    className={`${bookClass}`}
                                    title={book.title}
                                    onClick={()=> bookClick(index)}
                                >
                                    {book.title}
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default BookSelector;