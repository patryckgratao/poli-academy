import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import {
  MdDelete,
} from 'react-icons/md';

import {formatPrice} from '../../util/format';

import { Container, ProductTable, Total } from './styles';

function Cart({
  myCart,
  removeOneItem
}) {
  let accumulator = 0;
  if (myCart) {
    myCart.map(item => {
      accumulator += item.price;
    });

  }

  function handleRemoveItem(index) {
    removeOneItem(index)
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>PREÇO</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {myCart?.map((product, index) => (

            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>

              <td>
                <strong>{product.title}</strong>
              </td>

              <td>
                <strong>{formatPrice(product.price)}</strong>
              </td>

              <td>
                <button type="button" onClick={() => handleRemoveItem(index)}>
                  <MdDelete size={20} color="#FF647C " />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>


        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(accumulator)}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CartActions, dispatch);
}

const mapStateToProps = state => ({
  productsList: state.cart.products,
  stockList: state.cart.stock,
  myState: state,
  myCart: state.cart.myCart.items,
});






export default connect(mapStateToProps, mapDispatchToProps)(Cart);
