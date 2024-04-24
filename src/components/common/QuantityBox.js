import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import cartContext from '../../contexts/cart/cartContext';


const QuantityBox = (props) => {

    const { itemId, itemQuantity } = props;
    const {incrementItem, decrementItem } = useContext(cartContext);

    // const { incrementItem, decrementItem } = useContext(cartContext);


    return (
        <>
            <div className="quantity_box">
                <button
                    type="button"
                    onClick={() => decrementItem(itemId)}
                >
                    <FaMinus />
                </button>
                <span className="quantity_count">
                    {itemQuantity}
                </span>
                <button
                    type="button"
                    onClick={() => incrementItem(itemId)}
                    disabled={itemQuantity >= 30}
                >
                    <FaPlus />
                </button>
            </div>
        </>
    );
};

export default QuantityBox;