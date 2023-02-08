import React from 'react';
import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchForm = () => {
    return (
        <form className='search' >
            <input
                placeholder='검색'
                type="text"
                className='search-input'
            />
            <button className='search-btn'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
};

export default SearchForm;