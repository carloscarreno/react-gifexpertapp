import React, { useState } from 'react'
export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState(''); 

  const onInputValueChange =({target})=>{ //desestructura el target desde el event
      setInputValue(target.value);  // actualiza el valor de la caja de texto
  }

  const onSubmit = (event) => {
     event.preventDefault(); //previene el refresh del navegador por el formulario
     if(inputValue.trim().length <=1 )  // la entrada debe ser mas de un caracter
         return;
     //setCategories(categories => [inputValue, ...categories]);     // actualiza la lista con  el hook
     onNewCategory(inputValue.trim());
     setInputValue('');
  }

  // Se dispara cuando presionas enter
  return (
    <form onSubmit={ onSubmit}>  
        <input
            type="Text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputValueChange}
        /> 
     </form>
  )
}
