
import { useEffect,useState } from 'react'
import Button from './Button';
import Counter from './CounterContainer'
import Catalogo from './Catalogo';


function CatalogoContainer() {
    
    const [productos,setProductos] = useState([]);
    
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products'​)
    .then(res =>res.json())
    .then(data=>setProductos(data))
    .catch(error=> console.error(error));
    },[])

    

    return(
        <Catalogo productos={productos}/>
    )
      

    
}
   

export default CatalogoContainer;