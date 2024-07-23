import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      {/* Example usage of category and food_list */}
      {food_list && food_list
        .filter(item => item.category === category)
        .map((item, index) => (
          <div key={index} className='food-item'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  )
}

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
}

export default FoodDisplay
