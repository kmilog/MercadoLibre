import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Home from '../Pages/home'

 class Detail extends Component{
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path : PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { product: {}}

    componentDidMount(){
        const {id} = this.props.match.params
    }

    render(){
        return(
            <div>
                <p>Detalle</p>
            </div>
        )
    }
}

export default Detail