import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    

    return (
        <form className='form-section'>
            <h2>Make a New Drink Card</h2>
            <div className='input-container'>
                <input type='type' placeholder='Name' name='name'></input>
                <input type='type' placeholder='Category' name='category'></input>
                <input type='type' placeholder='Glass Type' name='type'></input>
                <input type='type' placeholder='Ingredients' name='ingredients'></input>
                <input type='type' placeholder='Instructions' name='instructions'></input>
            </div>
            <button >Submit</button>
        </form>
    )
}

export default Form;