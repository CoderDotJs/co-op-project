import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';

const FilteredProduct = () => {

    const { category } = useParams();
    const [product, setProduct] = useState([]);
    

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/CoderDotJs/co-op-project/main/src/Components/Products/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const filtered = product.filter(pro => pro.category.toLocaleLowerCase() === category.toLocaleLowerCase());


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
        {
          filtered.map(pro=>{
                return(
                  <Card key={pro.id} data={pro}></Card>
                )
            })
        }
      </div>
    );
};

export default FilteredProduct;