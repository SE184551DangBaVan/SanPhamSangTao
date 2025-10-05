import "./BookSelector.css"
import Bookshelf from "../../assets/minhbox/bookshelf4.png"
import BeigeWall from "../../assets/minhbox/beige wall.png"

import Cover1 from "../../assets/ho-chi-minh-portrait-lance-bourne.jpg";
import Cover2 from "../../assets/SelectedWritingsOfHCM.jpg";
import Cover3 from "../../assets/ho-chi-minh-portrait-lance-bourne.jpg";
import Cover4 from "../../assets/SelectedWritingsOfHCM.jpg";

import {useState} from "react";
import {useNavigate} from "react-router-dom";
const BookSelector = ()=>{
    const navigate = useNavigate();
    const books = [
        {
            title: "The Great Gaslight",
            description: "Did you just spill my tea?",
            cover: Cover1
        },
        {
            title: "Cow",
            description: "Moo.",
            cover: Cover2
        },
        {
            title: "Unwritten Rule, The Fuck Do You Mean Unwrtten Rule",
            description: [<><span>Do not tell me to add more than 4 books.<br/> Unwritten Rule was written in this book.<br/>  And I'm not telling, I AM COMMANDING IT <br/> The only thing you need to command is me to unload these nuts on yo buttcheeks</span></>
            ],
            cover: Cover3
        },
        {
            title: "Nuclear Code",
            description: "https://www.youtube.com/watch?v=uNl6Sh01ZIU",
            cover: Cover4
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