import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable({products,filterText,isStockOnly}) {
  const rows = []
  let lastCategory = null;//上一个分类

  products.forEach(item => {

    if(item.name.indexOf(filterText) === -1){//!!!
      return;
    }

    if(isStockOnly && !item.stocked){//!!!
      return;
    }

    if(item.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
        category={item.category}
        key={item.category}
        />
      )
    }
    rows.push(
      <ProductRow
        // name={item.name}
        // price={item.price}
        product={item} //!!一次传就好
        key={item.name}
      />
    )
    lastCategory = item.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* {rows} */}
        {rows}
      </tbody>
    </table>
  )
}
