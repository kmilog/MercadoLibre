import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Product from './product'

export default class ProductsList extends Component{
    static propTypes = {
        products : PropTypes.array
    }
    
    render(){
        return(
            this.props.products.map(product => {
                return(
                    <Product 
                        key = {product.id}
                        id = {product.id}
                        thumbnail = {product.thumbnail}
                        price = {product.price}
                        title = {product.title}
                        address = {product.address}>
                    </Product>
                )
            })
        )
    }
}