import React from 'react';

const displayBook = ({title, author, description}) => {
    return(
        <div>
            <p>Book Title: {title} </p>
            <p>Book Author: {author} </p>
            <p>Description: {description} </p>
            <p>Link:</p>
            <p>Image: </p>
        </div>
    );
}

export default displayBook;