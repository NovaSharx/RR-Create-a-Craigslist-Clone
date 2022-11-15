import React from "react";

function Posting(props) {
    return (
        <div className="posting" key={props.i}>
            <div>
                <div>
                    {props.data.title}
                </div>
                <div>
                    {props.data.price}
                </div>
                <img src={props.data.imageURL} alt={props.data.title} />
            </div>
        </div>
    )
}

export default Posting