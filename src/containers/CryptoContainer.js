import { connect } from 'react-redux'

import { Crypto } from '../components/Crypto'
import { bitcoinRequest } from '../actions'


const mapStateToProps = state => {
  return {
    value: state.bitcoin.price,
    message: state.bitcoin.message,
    pending: state.bitcoin.pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(bitcoinRequest());
    }
  }
}


const CryptoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Crypto);

export default CryptoContainer;
