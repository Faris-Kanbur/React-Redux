import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCream - {props.numOfCakes}</h2>
            <button onClick={props.buyIceCream}></button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreamContainer)
