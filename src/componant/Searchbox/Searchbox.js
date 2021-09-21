import React from 'react';

const Searchbox = () => {
    return (
        <div>
            <div className="input-group mb-3 my-5 w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search Your Product" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                <button className="btn btn-info" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    );
};

export default Searchbox;