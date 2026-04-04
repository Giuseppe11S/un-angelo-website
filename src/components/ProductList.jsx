// data with products that need to get mapped
import { menuData } from "../data/menuData"

import ProductCard from "../props/ProductCard"


export default function ProductList() {
  const mapProduct = menuData.map((p) => (
    <ProductCard 
    key={p.id}
    title={p.title}
    description={p.description}/>
  ))

  return (
    <>
    <section>
      <div className="flex flex-col items-center">
        <h3>Our Flavours</h3>
        <span>Crafted daily from the finest ingredients, each flavor tells a story.</span>
        <div>
          <button className="border">Classic</button>
          <button className="border">Special</button>
          <button className="border">Vegan</button>
        </div>
        <div className="flex">
          {mapProduct}
        </div>
      </div>
    </section>
    </>
  )
}