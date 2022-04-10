import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyButton } from './MyButton'


interface BurgerProps {
	onMouseOver: () => void
	onMouseOut: () => void
	visible: boolean
	setVisible: (arg: boolean) => void
}

export const Burger: FC<BurgerProps> = ({ onMouseOver, onMouseOut, visible, setVisible }) => {

	const navigate = useNavigate()

	const goHome = () => {
		setVisible(false)
		navigate('/')
	}
	return (
		<div className='menu'>
			<div
				onMouseOut={onMouseOut}
				onMouseOver={onMouseOver}
				className={!visible ? 'burger' : 'burger__active'}
			>
				<div className='burger-line'></div>
				<div className='burger-line'></div>
				<div className='burger-line'></div>
			</div>
			<div
				onMouseOut={onMouseOut}
				onMouseOver={onMouseOver}
				className={!visible ? 'menu-content' : 'menu-content__active'}
			>
				<MyButton onClick={goHome}>
					Главная
				</MyButton>
			</div>

		</div>
	)
}
