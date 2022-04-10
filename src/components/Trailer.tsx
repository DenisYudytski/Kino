import React, { FC } from 'react'

export const Trailer: FC = () => {
	return (
		<div>
			<script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>
			<script type="module" src="https://unpkg.com/x-frame-bypass"></script>
			<iframe is="x-frame-bypass" src="https://widgets.kinopoisk.ru/discovery/trailer/167560?onlyPlayer=1&autoplay=1&cover=1" width="500" height="500"></iframe>
		</div>
	)
}
