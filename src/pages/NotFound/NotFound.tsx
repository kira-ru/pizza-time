import React from 'react'
import styles from 'components/Error/error.module.scss'

export const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <h1>
                <span>😕</span>
                <br />
                Такой страницы не существуют
            </h1>
        </div>
    )
}
