import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CollectionPage } from '../pages/CollectionPage'
import { CurrentGenrePage } from '../pages/CurrentGenrePage'
import { FilmPage } from '../pages/FilmPage'
import { GenresPage } from '../pages/GenresPage'
import { Home } from '../pages/Home'

export const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/collection' element={<CollectionPage />} />
			<Route path='/genres' element={<GenresPage />} />
			<Route path='/genres/:id' element={<CurrentGenrePage />} />
			<Route path='/:id' element={<FilmPage />} />
		</Routes>
	)
}
