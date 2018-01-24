const initialState = { price: 0 , errors: false, message: "", pending: false}


const bitcoin = (state = initialState, action) => {
  switch (action.type) {
    case 'BITCOIN_REQUEST_PENDING':
      return {...state, message: "pending", pending: true}
    case 'BITCOIN_REQUEST_FULFILLED':
      let price = action.payload.data.data.rates.USD;
      return {...state, price: price, message: "", pending: false};

    case 'BITCOIN_REQUEST_REJECTED':
      return {...state, errors: action.payload.errors, message: action.payload.message};

    default:
      return state;
  }
}

export default bitcoin;
