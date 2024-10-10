
import React from 'react';
import './Sidebar.css'
import { NavLink } from "react-router-dom";

import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavLink to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src={add_product_icon} alt='' />
                    <p>Adicionar Produto</p>

                </div>

            </NavLink>

            <NavLink to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src={list_product_icon} alt='' />
                    <p>Lista de Produto</p>

                </div>

            </NavLink>


        </div>
    );
};

export default Sidebar;
