import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ProductsList from '../Components/productsList'

export default class SearchProduct extends Component{
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path : PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {results : []}

    componentWillReceiveProps (nexProps){
        console.log('search will receive')
        const {search} = nexProps.match.params
        this._getDataItem({filter : search});
    }

    componentDidMount(){
        console.log('search didmount')
        console.log(this.props)
        const {search} = this.props.match.params
        this._getDataItem({filter : search});
    }

    _getDataItem({filter}) {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=​:${filter}`)
        .then(res=> res.json())
        .then(resultado => {
            const {results = []} = resultado
            this.setState({results})
        })
    }

      _renderResults(){
        return this.state.results.length === 0 
        ? <p> No existen resultados </p>
        : <ProductsList products = {this.state.results}></ProductsList>
    }

    render(){
        return(
            <div>
               {this._renderResults()}
            </div>
        )
    }
}