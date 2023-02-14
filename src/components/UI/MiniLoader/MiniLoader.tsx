import React, {FC} from 'react'
// @ts-ignore
import cn from 'classnames'
// @ts-ignore
import styles from './miniloader.module.css'

interface MiniLoaderProps {
    classes?: React.CSSProperties
}

const MiniLoader: FC<MiniLoaderProps> = ({classes}) => {
    return (
        <div className={cn(styles.loader, classes)}>
            <span></span>
        </div>
    )
}

export default MiniLoader
