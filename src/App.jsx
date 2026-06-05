import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import RandomMythPage from './pages/RandomMyth/RandomMythPage';
import MythPage from './pages/Myth/MythPage';
import BetterLife from './pages/BetterLife/BetterLife';
import SubmitPage from './pages/Submit/SubmitPage';
import AdminPage from './pages/Admin/AdminPage';
import { getRandomMythListLoader } from './pages/RandomMyth/randomMythListLoader';	
import { MythLoader } from './pages/Myth/mythLoader';
import Solution from './pages/Solution';
import AllMyths from './pages/AllMyths/AllMyths';
import ErrorPage from './pages/Error/ErrorPage';
import { getAllMythsLoader } from './pages/AllMyths/allMythsLoader';
import getBetterLifeLoader from './pages/BetterLife/BetterLifeLoader';
// import {getAdminLoader} from './pages/Admin/adminLoader';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
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
			{
				path: "betterlife",
				element: <BetterLife />,
				loader: getBetterLifeLoader
			},
			{
				path: "better-life",
				element: <BetterLife />,
				loader: getBetterLifeLoader
			},
			{
				path: "adoptionmeansabetterlife",
				element: <BetterLife />,
				loader: getBetterLifeLoader
			},
			{
				path: "adoption-means-a-better-life",
				element: <BetterLife />,
				loader: getBetterLifeLoader
			},
			// {
			// 	path: "admin",
			// 	element: <AdminPage />,
			// 	loader: getAdminLoader
			// },
			{
				path: "submit-myth",
				element: <SubmitPage />
			},
			{
				path: 'error',
				element: <ErrorPage />
			}
		]
	}
])
function App() {
	return (
		<RouterProvider router={router}/>
	)
}

export default App;