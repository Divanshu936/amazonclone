import React from 'react';
import './Product.css';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                         Array(rating) //built in javascript function that takes value and create array for that
                            .fill() // fill all the aray elenments  with static value here with the empty value
                            .map((_) => (   
                                <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} alt="" />
            <Button onClick={addToBasket}>Add to basket</Button>
        </div>
    )
}

export default Product