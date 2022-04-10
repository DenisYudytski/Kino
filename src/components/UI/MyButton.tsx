import { FC } from 'react'

interface Button {
	onClick: () => void
	type?: string
	disable?: boolean
}

export const MyButton: FC<Button> = ({ children, type, ...props }) => {
	return (
		<button {...props} className={type === 'primary' ? "myBtn primary" : type === 'active' ? 'myBtn active' : "myBtn"}>
			{children}
		</button>
	)
}
