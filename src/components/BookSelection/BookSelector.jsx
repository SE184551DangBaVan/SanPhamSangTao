import "./BookSelector.css"
import Bookshelf from "../../assets/minhbox/bookshelf4.png"
import BeigeWall from "../../assets/minhbox/beige wall.png"

import { allBooks } from "../../data/books.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const BookSelector = ()=>{
    const navigate = useNavigate();

    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedBookIndex, setSelectedBookIndex] = useState(null);

    function bookClick(index) {
        setSelectedBook(allBooks[index]);
        setSelectedBookIndex(index);
    }

    function handleReadClick() {
        console.log("handleReadClick called");
        console.log("selectedBook:", selectedBook);
        console.log("selectedBookIndex:", selectedBookIndex);

        if (selectedBook && selectedBookIndex !== null) {
            console.log("Navigating to book:", selectedBookIndex + 1, "with index:", selectedBookIndex);
            navigate(`/book/${selectedBookIndex + 1}`, { state: { bookIndex: selectedBookIndex } });
        } else {
            console.log("No book selected or missing index");
            console.log("selectedBook:", selectedBook);
            console.log("selectedBookIndex:", selectedBookIndex);
        }
    }
    return(
        <div className="book-selection"
             style={{
                 backgroundImage: `url(${BeigeWall})`
             }}>
            <div className="book-info" style={{
                "--book-cover": selectedBook
                ? `url(${`${selectedBook.cover}`})`
                : '',
            }}>
                {(selectedBook!=null) ?
                    (<>
                        <div className="book-title">
                            <h2>{selectedBook.title}</h2>
                        </div>
                        <div className="book-desc">
                            <div>{selectedBook.subtitle}</div>
                        </div>
                        <button className="read-button"
                            onClick={handleReadClick}
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

                    {allBooks.map((book, index) => {
                            let bookClass = "book" ;
                            {/* Applies dark magic*/}
                            if (index > 3 && index < 8) {
                                bookClass = "book book-drop"
                            }
                            return (
                                <div
                                    key={index}
                                    className={`${bookClass}`}
                                    title={book.title}
                                    data-index={index}
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