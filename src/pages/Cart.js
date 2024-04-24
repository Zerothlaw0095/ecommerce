import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import cartContext from '../contexts/cart/cartContext';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';


const Cart = () => {

    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });
    const packaging = 20;

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount + packaging) ;


    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<BsCartX />}
                                msg="Your Cart is Empty"
                                link="/all-products"
                                btnText="Start Shopping"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Order Summary &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Original Price</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Discount</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Delivery</span>
                                                <b>Free Delivery for all users.</b>
                                            </div>
                                            <div className="Packaging">
                                                <span>Packaging</span>
                                                <b>Packaging of 20 rupees</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Total Price</small></b>
                                                
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <button type="button" className="btn checkout_btn">Checkout</button>
                                        
                                        
                                       


                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};
document.addEventListener('DOMContentLoaded', () => {
    // Get the checkout button and success message element
    const checkoutBtn = document.getElementById('checkoutBtn');
    const successMessage = document.getElementById('successMessage');

    if(checkoutBtn) {
        // Add click event listener to the checkout button
        checkoutBtn.addEventListener('click', () => {
            // Display the success message
            successMessage.style.display = 'block';
    
            // Hide the success message after a few seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        });
    }
});

export default Cart;