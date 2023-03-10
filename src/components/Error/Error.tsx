import React, {FC} from 'react'
import styles from 'components/Error/error.module.scss'

export const Error: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>
                <span>😕</span>
                <br />
                Похоже произошла ошибка
            </h1>
        </div>
    )
}
