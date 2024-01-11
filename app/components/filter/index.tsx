'use client'


import './style.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PriceRangeSlider from "./PriceRangeSlider"
import enabledFilters from "./config"




export default function Layout() {



    return (
        <div className='filter'>
            {enabledFilters.search &&
                <div className="input-container">
                    <input type="text" placeholder="Search..." />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            }
            {enabledFilters.priceRange &&
                <PriceRangeSlider />

            }
        </div>
    )
}
