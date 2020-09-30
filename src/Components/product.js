import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class Product extends Component{
    static propTypes = {
        id : PropTypes.string,
        thumbnail : PropTypes.string,
        price : PropTypes.number,
        title : PropTypes.string,
        address : PropTypes.any
    }

    render(){
        const { id, thumbnail, price, title, address } = this.props
        return(
            <Link to={`/item/${id}`}>
                <div className='Content'>
                    <div className='row'>
                        <div className='col-2'>
                            <img className='ImgSearch float-left' src={thumbnail}></img>
                        </div>
                        <div className='col-8 float-left'>
                            <div className='FontPrice float-left'>{price}</div>
                            <div className='FontTitle float-left'>{title}</div>
                        </div>
                        <div className='col-2'>
                            <div className='FontAdress'>{address.state_name}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}