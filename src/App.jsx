import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import RandomMythPage from './pages/RandomMyth/RandomMythPage';
import { randomMythLoader } from './pages/RandomMyth/randomMythLoader';
import { getRandomMythListLoader } from './pages/RandomMyth/randomMythListLoader';	

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index:true,
				element: <RandomMythPage />,
				loader: getRandomMythListLoader//randomMythLoader
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