import { useParams } from "react-router";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productID);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productID}</p>
    </section>
  );
};

export default ProductDetail;
