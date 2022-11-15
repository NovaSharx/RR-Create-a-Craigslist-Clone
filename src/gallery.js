import React from "react";
import Posting from "./posting"

const craigPost = require('./postings')

function Gallery() {

    let postList = craigPost.postings.map((data, i) => {
        return <Posting data={data} key={i} />
    })

    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <ul>
                {postList}
            </ul>
        </div>
    )
}

export default Gallery