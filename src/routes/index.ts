import { FilmPage } from "../pages/FilmPage"
import { Home } from "../pages/Home"

interface IRoute {
	path: string
	element: React.ComponentType
}

export enum RouteNames {
	HOME = '/',
	FILM = '/:id'
}

export const routes: IRoute[] = [
	{ path: RouteNames.HOME, element: Home },
	{ path: RouteNames.FILM, element: FilmPage },
]