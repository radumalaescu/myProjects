import React, { Component } from 'react'
import styles from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
    render () {
    let ingredient = null;

    if (this.props.type === 'bread-bottom') {
        ingredient = <div className={styles.BreadBottom}></div>
    }
    if(this.props.type === 'bread-top'){
        (ingredient = <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
        </div>)
    }
    if (this.props.type === 'meat') {
        ingredient = <div className={styles.Meat}></div>
    }
    if (this.props.type === 'cheese') {
        ingredient = <div className={styles.Cheese}></div>
    }
    if (this.props.type === 'salad') {
        ingredient = <div className={styles.Salad}></div>
    }
    if (this.props.type === 'bacon') {
        ingredient = <div className={styles.Bacon}></div>
    }
    return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;