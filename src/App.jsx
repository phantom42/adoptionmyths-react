import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import RandomMythPage from './pages/RandomMyth/RandomMythPage';
import MythPage from './pages/Myth/MythPage';
import { getRandomMythListLoader } from './pages/RandomMyth/randomMythListLoader';	
import { MythLoader } from './pages/Myth/mythLoader';
import Solution from './pages/Solution';

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
			},
			{
				path: "myth",
				element: <RandomMythPage />,
				loader: getRandomMythListLoader//randomMythLoader
			},
			{
				path: "the-answer",
				element: <Solution />
			},
			{
				path: "the-solution",
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