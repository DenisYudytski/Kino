import React, { FC } from 'react'

interface OutLinkProps {
	path: string
}

export const OutLink: FC<OutLinkProps> = ({ path, children }) => {
	return (
		<a className='outLink' href={path}>
			{children}
		</a>
	)
}
