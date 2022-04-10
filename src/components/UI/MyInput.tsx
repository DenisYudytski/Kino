import React, { ChangeEventHandler, FC } from 'react'

interface InputProps {
	type: string
	placeholder?: string
	value: string
	onChange: ChangeEventHandler<HTMLInputElement>
}

export const MyInput: FC<InputProps> = ({ ...props }) => {
	return (
		<input className='input' {...props} />
	)
}
