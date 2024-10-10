import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Produto </p>
        <input type='text ' name='name' placeholder='nome do produto' />
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Preço</p>
          <input type='text' name='old_price' placeholder='type here' />
        </div>

        <div className='addproduct-itemfield'>
          <p>Preço de Oferta</p>
          <input type='text' name='new_price' placeholder='type here' />
        </div>

      </div>

      <div className='addproduct-itemfield'>
        <p>Produto Categoria</p>
        <select name='category' className='add-product-selector'>
          <option value='femenino'>Femenino</option>
          <option value='masculino'>Masculino</option>
          <option value='infantil'>Infantil</option>

        </select>
      </div>
      <div className='addproduct-thunail'>
        <label htmlFor= 'file-input'>
           <img src={upload_area} className='addproduct-thumnail-img'  alt=''/>
        </label>
        <input type='file' name='image' id='file-input' hidden />

      </div>
      <button className='addproduct-btn'>Adicionar</button>

    </div>
  )
}

export default AddProduct