import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {formatPrice} from '../../util/format';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  const cart = [
    {
      image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
      title: 'Tenis 1',
      priceFormatted: 'R$ 156,99',
      amount: 5,
      subtotal: 159,
      id: 1,
    }
  ]
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
          {cart.map((product) => (
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

// const mapStateToProps = state => ({
//   cart: state.cart.map(product => ({
//     ...product,
//     subtotal: formatPrice(product.price * product.amount),
//   })),
//   total: formatPrice(
//     state.cart.reduce((total, product) => {
//       return total + product.price * product.amount;
//     }, 0)
//   ),
// });

export default Cart;
