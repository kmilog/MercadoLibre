import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class Search extends Component{
    state = { inputSearch: ''}

    _handleChange = (e) => {
        this.setState({ inputSearch: e.target.value})
    }

    render(){
        return(
            <form>
                <div className='nav-header'>
                    <div className='Content'>
                        <div className='row'>
                            <div className='col-1 nav-logo'><a href='www.mercadolibre.com.co'>Mercado Libre Colombia</a></div>
                            <div className="col-11 nav-input input-group md-form form-sm form-2 pl-0">
                                <input className="form-control my-0 py-1 red-border" 
                                    type="text"     
                                    placeholder="Nunca dejes de buscar" 
                                    aria-label="Search"
                                    onChange={this._handleChange}>
                                </input>
                                <div className="input-group-append">
                                    <Link to = {`/items/search=${this.state.inputSearch}`}>
                                        <button className='ButtonSearch'>
                                            <span className="input-group-text" id="basic-text1">
                                                <i className="fas fa-search "></i>
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search