import Link from "next/link";

const ProductDetail = ({params}) => {
  console.log(params);
  return (
    <div>
      <h1>This is Product {params.productid}</h1>
    </div>
  );
};

export default ProductDetail; 
