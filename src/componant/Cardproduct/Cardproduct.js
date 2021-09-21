import React from 'react';

const Cardproduct = (props) => {
    const { image, title, desc } = props.product;
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={image} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardproduct;