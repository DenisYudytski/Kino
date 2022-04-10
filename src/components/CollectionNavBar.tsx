import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setType } from '../store/reducers/topFilmsSlice'
import { MyButton } from './UI/MyButton'

export const CollectionNavBar: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { type } = useAppSelector(state => state.topFilmSlicereducer)

	const getPopular = () => {
		dispatch(setType("popular"))
		navigate('/collection')
		// value.setValue('')
	}
	const getBest = () => {
		dispatch(setType("best"))
		navigate('/collection')
		// value.setValue('')
	}
	const getAwait = () => {
		dispatch(setType("await"))
		navigate('/collection')
		// value.setValue('')
	}

	return (
		<header className='collectionNavbar'>
			<MyButton
				type={type === 'popular' ? 'active' : 'primary'}
				onClick={getPopular}
			>
				Популярные
			</MyButton>
			<MyButton
				type={type === 'best' ? 'active' : 'primary'}
				onClick={getBest}
			>
				Топ 250
			</MyButton>
			<MyButton
				type={type === 'await' ? 'active' : 'primary'}
				onClick={getAwait}
			>
				Ожидаемые
			</MyButton>
		</header>
	)
}
