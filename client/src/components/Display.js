import React from 'react';

const displayBook = ({ title, author, description, link, img }) => {
    return (
        <div className="card mr-2 ml-2">
            <h5 className="card-header">Results</h5>
            <div className="card-body">
                <h5 className="card-title">Book Title: {title} </h5>
                <p className="card-text">Book Author: {author} </p>
                <p className="card-text">Description: {description} </p>
                <a className="btn btn-primary" href={link}>Visit</a>
                <p className="card-text">Image: {img}</p>
            </div>
        </div>
    );
}

export default displayBook;