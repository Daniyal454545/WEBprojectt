import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import '../admin/AddProduct.scss'
import ProductTable from '../components/ProductTable';

const AddProduct = () => {
    const [spacex, setspacex] = useState({
        model: "",
        price: "",
        year: "",
        photo: "",
        cloth: "",
        size: "",
    })
    const { createProduct } = useContext(adminContext)
    function handleInputs(e) {
        let newProduct = {
            ...spacex,
            [e.target.name]: e.target.value
        }
        setspacex(newProduct)
    }
    return (
        <div className='inpPage' >
            <div className="add-inputs">
                <form className="inpForm" style={{border: "solid 1px grey " }}>
                    <TextField value={spacex.model} id="standard-basic" label="Название товара" name="model" onChange={handleInputs} />
                    <TextField value={spacex.price} id="standard-basic" label="Цена $" name="price" onChange={handleInputs} />
                    <TextField type="date" value={spacex.year} id="standard-basic" label="" name="year" onChange={handleInputs} />
                    <TextField value={spacex.photo} id="standard-basic"  label="Фото" name="photo" onChange={handleInputs} />
                    <TextField type="text" value={spacex.cloth} id="standard-basic" label="ткань" name="cloth" onChange={handleInputs} />
                    <TextField value={spacex.size} id="standard-basic" label="размер" name="size" onChange={handleInputs} />                
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !spacex.model.trim() ||
                                !spacex.price.trim() ||
                                !spacex.year.trim() ||
                                !spacex.photo.trim() ||
                                !spacex.cloth.trim() ||
                                !spacex.size.trim()) {
                                alert("Заполните описание")
                                return
                            }
                            createProduct({

                                model: spacex.model.trim(),
                                price: spacex.price.trim(),
                                photo: spacex.photo.trim(),
                                cloth: spacex.year.trim(),
                                year: spacex.cloth.trim(),
                                size: spacex.size.trim(), 
                            })
                        }}
                        variant="outlined"
                        color="secondary"
                    >
                        Создать ✔︎
                    </Button>
                </form>
            </div>
            <ProductTable/>
        </div>
    );
};

export default AddProduct;