import React, {FC} from 'react';
import styles from 'components/Error/error.module.scss';

const Error: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>
                <span>😕</span>
                <br />
                Ничего не найдено
            </h1>
            <p className={styles.description}>
                К сожалени данная страница отсутствует в нашем интернет-магазине
            </p>
        </div>
    );
};

export {Error};
