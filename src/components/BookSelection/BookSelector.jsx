import "./BookSelector.css"
import Bookshelf from "../../assets/minhbox/bookshelf4.png"
import {useEffect, useState} from "react";
const BookSelector = ()=>{
    const books = [
        {
            title: "The Great Gatsby",
            description: "A tragic story of Jay Gatsby and his obsession with the American Dream."
        },
        {
            title: "To Kill a Mockingbird",
            description: "A novel about justice and race in the Deep South, told through the eyes of young Scout Finch."
        },
        {
            title: "1984",
            description: "A dystopian tale of surveillance, control, and rebellion against totalitarianism."
        },
        {
            title: "Pride and Prejudice",
            description: "A classic romance where Elizabeth Bennet navigates love, society, and self-discovery."
        }
    ];

    const [selectedBook, setSelectedBook] = useState(null);


    function bookClick(index) {
        setSelectedBook(books[index]);
    }
    return(
        <div className="book-selection">
            <div className="book-info">
                {(selectedBook!=null) ?
                    (<>
                        <div className="book-title">
                            <h2>{selectedBook.title}</h2>
                        </div>
                        <div className="book-desc">
                            <p>{selectedBook.description}</p>
                        </div>
                        <button className="read-button">

                        </button>
                    </>)
                    :
                    (
                        <>
                            Select a book!
                        </>
                    )}

            </div>
            <div className="bookshelf">
                <div className="book-display"
                     style={{
                         backgroundImage: `url(${Bookshelf})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                     }}
                >
                    {books.map((book, index) => {
                            let bookClass = "book";
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