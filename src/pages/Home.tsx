import { FC, useEffect, useState } from 'react'
import { FilmCard } from '../components/FilmCard'
import List from '../components/List'
import { Loader } from '../components/UI/Loader'
import { API_URL_TOP100, API_URL_TOP250, API_URL_TOP_AWAIT } from '../consts/consts'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { IFilm } from '../models/IFilm'
import { addFilms, fetchTopFilms } from '../store/reducers/ActionCreators'


export const Home: FC = () => {
	return (
		<div>
			САЛАМ
		</div>
	)
}
