import React, { FC } from 'react'
import { IRate } from '../types/types'

interface FilmRatingProps {
	rating: IRate | null
}

export const FilmRating: FC<FilmRatingProps> = ({ rating }) => {
	if (!rating) {
		return null
	}
	return (
		<div
			className={
				rating?.bad ? 'filmCard-rating bad'
					: rating?.good ? 'filmCard-rating good'
						: rating?.great ? 'filmCard-rating great'
							: ''}>
			{!rating.none ? rating.rate : null}
		</div>
	)
}
