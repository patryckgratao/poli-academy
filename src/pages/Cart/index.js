import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {formatPrice} from '../../util/format';

import { Container, ProductTable, Total } from './styles';

function Cart({
  myCart,
  myState,
  productsList,cart
}) {
  const estado = productsList
  console.log(cart)
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {myCart?.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>

              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>

              <td>
                <div>
                  <button type="button" >
                    <MdRemoveCircleOutline size={20} color="#4FCAD2 " />
                  </button>

                  <input type="number" readOnly value={product.amount} />

                  <button type="button" >
                    <MdAddCircleOutline size={20} color="#4FCAD2 " />
                  </button>
                </div>
              </td>

              <td>
                <strong>{product.subtotal}</strong>
              </td>

              <td>
                <button type="button">
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
          <strong>999999</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CartActions, dispatch);
}

const mapStateToProps = state => ({
  cart: state.cart.myCart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  productsList: state.cart.products,
  stockList: state.cart.stock,
  myState: state,
  myCart: state.cart.myCart,
});






export default connect(mapStateToProps, mapDispatchToProps)(Cart);
