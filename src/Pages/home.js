import React, {Component} from 'react'
import Search from '../Components/search'
import ProductsList from '../Components/productsList'


export default class Home extends Component{

    render(){
        return(
            <div>
                <Search></Search>
            </div>
        )
    }
}