import React, {FC} from 'react'
// @ts-ignore
import styles from './miniloader.module.css'
import cn from 'classnames'

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
