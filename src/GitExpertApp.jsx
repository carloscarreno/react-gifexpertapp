import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

  const [categories, setCategories] =  useState([ 'Vegueta']); 

  const onAddCategory = ( newCategory) => {
       // categories.push('Dragon Ball'); Esto en react no funciona porque evita las mutaciones
       if (categories.includes(newCategory) )
           return;
       setCategories([newCategory,...categories]);     
      //setCategories(cat => [...categories,'Dragon Ball']);    //otra forma
  }

  return (
    <>
      <h1>Buscador de Gifs</h1>
      <AddCategory 
        onNewCategory = { (value) => onAddCategory(value)}
       />
      {categories.map( category => (
         <GifGrid key={category} category={category}/>
            )    
      )}
    </>
    
  )
}

// se crea rapido con rafc


