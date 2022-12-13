import { useState } from "react";
import BookCreate from "./BookCreate";

function App () {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log("Title of the book is: " + title);
    }

    return (
        <div>
            <BookCreate onSubmit={createBook} />
        </div>
    );
}

export default App;