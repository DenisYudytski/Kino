import React, { FC } from 'react'

interface AgeLimitProps {
	age: string
}

export const AgeLimit: FC<AgeLimitProps> = ({ age }) => {
	return (
		<div className='ageLimit'>
			{age}
		</div>
	)
}
