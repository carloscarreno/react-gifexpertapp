
import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GitItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    // construccion de un hook personalizado
    const { images, isLoading } = useFetchGifs(category); 

   // console.log({images, isLoading});

    //const [counter, setCounter] = useState(10);
    //    const [images, setImages] = useState([]);
    
    //    const getImages = async() => {
    //       const newImages = await getGifs(category);
    //       setImages(newImages);
    //    }

    //    useEffect( () => { 
    //       getImages();
    //    }, [] );

   return (
     <>
       <h3>{category}</h3>
       {
         isLoading && ( <h2>Cargando...</h2>)
       }
       <div className="card-grid">
         { images.map( (image) => (
            <GitItem key={image.id} {...image}></GitItem>
         ))}         
       </div>
     </>   
   )
}

//  <h5>{ counter}</h5>
//   <button onClick={() => setCounter(counter + 1 )}>+1</button>
