import React,{useState} from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(props) {
  const {products} = props;
  const [filterText,setFilterText] = useState('');
  // const [isStockOnly,setIsStockOnly] = useState('false');%%
  const [isStockOnly,setIsStockOnly] = useState(false);
  return (
    <div>
      <SearchBar 
        filterText={filterText}
        isStockOnly={isStockOnly}
        setFilterText={setFilterText}
        setIsStockOnly={setIsStockOnly} 

      />
      <ProductTable 
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </div>
  )
}
