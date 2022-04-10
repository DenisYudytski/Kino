import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyButton } from './MyButton'


interface BurgerProps {
	onMouseOver: () => void
	onMouseOut: () => void
	visible: boolean

}

export const Burger: FC<BurgerProps> = ({ onMouseOver, onMouseOut, visible }) => {

	const navigate = useNavigate()


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
			</div>

		</div>
	)
}
