import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import useInput from '../hooks/useInput'
import { fetchKeywordFilm } from '../store/reducers/ActionCreators'
import { setCurrentPage } from '../store/reducers/PagesSlice'
import { setType } from '../store/reducers/topFilmsSlice'
import { FilteredFilms } from './FilteredFilms'
import { Burger } from './UI/Burger'
import { MyButton } from './UI/MyButton'
import { MyInput } from './UI/MyInput'

export const NavBar: FC = () => {
	const { filteredFilms, isLoading } = useAppSelector(state => state.topFilmSlicereducer)
	const page = useAppSelector(state => state.pageSliceReducer.currentPage)
	const dispatch = useAppDispatch()
	const value = useInput('')
	const navigate = useNavigate()
	const [visible, setVisible] = useState(false)
	const close = () => {
		value.setValue('')
	}

	const toCollection = () => {
		dispatch(setCurrentPage('collection'))
		navigate('/collection')
		value.setValue('')

	}
	const toGenres = () => {
		dispatch(setCurrentPage('genres'))
		navigate('/genres')
		value.setValue('')

	}

	useEffect(() => {
		dispatch(fetchKeywordFilm(value.value))
	}, [value.value])

	useEffect(() => {
		if (isLoading === true) {
			value.setValue('')
		}
	}, [isLoading])

	const overBurger = () => {
		setVisible(true)
	}
	const outBurger = () => {
		setVisible(false)
	}
	return (
		<header onClick={close} className='navBar'>
			<div className='leftBar'>
				<div className='logo'>
					<Burger
						onMouseOver={overBurger}
						onMouseOut={outBurger}
						visible={visible}
						setVisible={setVisible}
					/>
					<div>
						КиНо ЕпТа
					</div>
				</div>
				<MyButton
					type={page === 'collection' ? 'active' : 'primary'}
					onClick={toCollection}
				>
					Коллекции
				</MyButton>
				<MyButton
					type={page === 'genres' ? 'active' : 'primary'}
					onClick={toGenres}
				>
					Жанры
				</MyButton>
				{/* <MyButton
					type={type === 'await' ? 'active' : 'primary'}
					onClick={() => null}
				>
					хз
				</MyButton> */}
			</div>

			<div>
				<MyInput

					{...value}
					type='text'
					placeholder='Поиск'
				/>
			</div>
			{value.value !== '' ? <FilteredFilms films={filteredFilms} />
				: null
			}

		</header>
	)
}
