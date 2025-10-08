import ProductCard from "./ProductCard";
import useProductStore from "../stores/useProductStore";

const ProductList = () => {
  const {products} = useProductStore();

  return (
    <div className="grid grid-cols-3 pr-0.5 gap-5 pb-5 lg:grid-cols-4 lg:gap-3 lg:pb-3">
      {products.map(el => <ProductCard data={el} key={el.id}/>)}
    </div>
  );
};

export default ProductList;
