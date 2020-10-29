import React from 'react'

export default function SearchBar({filterText, isStockOnly,setFilterText,setIsStockOnly}) {


  const FilterTextChange = (e) => {
    setFilterText(e.target.value);
  }

  const InStockChange = (e) => {
    // setIsStockOnly(e.target.value);%%表单
    setIsStockOnly(e.target.checked);
  }

  return (
    <form>
      <input type="text" 
        // value="filterText" 
        value={filterText} 
        placeholder="Search..."
        onChange = {FilterTextChange}
      />
      <p>
        <input type="checkbox"
          // value="isStockOnly"%%
          // checked="isStockOnly" %%
          checked={isStockOnly}
          // onChange={onchangeStock}//!!命名
          onChange={InStockChange}
        />
        {''}only show products in stock
      </p>
    </form>
  )
}
