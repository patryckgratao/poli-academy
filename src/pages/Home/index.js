import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";
import api from "../../services/api";

import { ProductList } from "./styles";

function Home() {
  const products = [
    {
      id: 1,
      title: "Curso de Kotlin",
      price: 597.9,
      image:
        "https://patryckgratao.com/wp-content/uploads/2021/02/curso1.jpg",
    },
    {
      id: 2,
      title: "Curso de React + React Native",
      price: 739.9,
      image:
        "https://patryckgratao.com/wp-content/uploads/2021/02/curso2.jpg",
    },
    {
      id: 3,
      title: "Crie microserviços com Node JS",
      price: 219.9,
      image:
        "https://patryckgratao.com/wp-content/uploads/2021/02/curso3.jpg",
    },
    {
      id: 4,
      title: "Bootcamp: Aplicações Híbridas com Flutter",
      price: 1389.9,
      image:
        "https://patryckgratao.com/wp-content/uploads/2021/02/curso4.jpg",
    },
    {
      id: 5,
      title: "Curso de Vue 2.0",
      price: 219.9,
      image:
        "https://patryckgratao.com/wp-content/uploads/2021/02/curso5.jpg",
    },
    {
      id: 6,
      title: "Curso de GitHub",
      price: 179.9,
      image:
        "https://patryckgratao.com/wp-content/uploads/2021/02/curso6.jpg",
    },
  ];
  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button
            type="button"
            onClick={() => this.handleAddProduct(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="fff" /> 175
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

// const mapStateToProps = (state) => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;

//     return amount;
//   }, {}),
// });

export default Home;
