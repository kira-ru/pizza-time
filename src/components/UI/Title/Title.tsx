import React, {FC} from 'react'

interface TitleProps {
    text: string
}

export const Title: FC<TitleProps> = React.memo(({text}) => {
    return (
        <h2 data-testid="pizzas page" className="content__title">
            {text}
        </h2>
    )
})
