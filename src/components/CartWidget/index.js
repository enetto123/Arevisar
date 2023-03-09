import React from 'react';
import './styles.css';
import './cart_pic.png';
import { useSelector } from 'react-redux';

const CartWidget = () => {

    const cosa = useSelector((state) => state.cosas.cosa) 

    return(
        <div id="idCompra">
            <ul>
            <li className='moneyBag'><div id='idCart'></div></li>
            <li className='moneyBag'><div id='idCant'>{cosa}</div></li>
            </ul>
        </div>

    )
}

export default CartWidget;
