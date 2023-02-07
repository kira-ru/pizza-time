import React, {FC} from 'react'

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const Button: FC<ButtonProps> = props => {
    return <button {...props} />
}

export {Button}
