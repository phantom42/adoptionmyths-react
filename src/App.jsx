import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import RandomMythPage from './pages/RandomMyth/RandomMythPage';
import MythPage from './pages/Myth/MythPage';
import { getRandomMythListLoader } from './pages/RandomMyth/randomMythListLoader';	
import { MythLoader } from './pages/Myth/mythLoader';
import Solution from './pages/Solution';
import AllMyths from './pages/AllMyths/AllMyths';
import { getAllMythsLoader } from './pages/AllMyths/allMythsLoader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index:true,
				element: <RandomMythPage />,
				loader: getRandomMythListLoader//randomMythLoader
			},
			{
				path: "myth/:slug",
				element: <MythPage />,
				loader: MythLoader,
			},
			{
				path: "myth",
				element: <RandomMythPage />,
				loader: getRandomMythListLoader//randomMythLoader
			},
			{
				path: "myths",
				element: <AllMyths />,
				loader: getAllMythsLoader
			},
			{
				path: "the-answer",
				element: <Solution />
			},
			{
				path: "theanswer",
				element: <Solution />
			},
			{
				path: "answer",
				element: <Solution />
			},
			{
				path: "the-solution",
				element: <Solution />
			},
			{
				path: "thesolution",
				element: <Solution />
			},
			{
				path: "solution",
				element: <Solution />
			},
		]
	}
])
function App() {
	return (
		<RouterProvider router={router}/>
	)
}

export default App;