import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();

  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>A Book</li>
        <li>A Carpet</li>
        <li>An online course</li>
      </ul>
    </section>
  );
};

export default Products;
