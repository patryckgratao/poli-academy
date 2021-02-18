import React, { useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";

import { ProductList } from "./styles";

// Importar Cart Actions
import * as CartActions from '../../store/modules/cart/actions';

// Importar o Connect
import { connect } from 'react-redux';

// Importar Bind Creators
import { bindActionCreators } from 'redux';

function Home({
  getProducts,
  getStock,
  addToCart,
  productsList,
  stockList,
}) {

  useEffect(() => {
    getProducts()
    getStock()
  }, [])

  function handleAddProduct(product) {
    addToCart(product)
  }

  return (
    <ProductList>
      {productsList?.map((product, index) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{formatPrice(product.price)}</span>

          <button
            type="button"
            onClick={() => handleAddProduct(product)}
          >
            <div>
              <MdAddShoppingCart size={16} color="fff" /> {stockList ? stockList[index]?.amount : 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CartActions, dispatch);
}
const mapStateToProps = (state) => ({
  productsList: state.cart.products,
  stockList: state.cart.stock,
})



export default connect(mapStateToProps, mapDispatchToProps)(Home);
