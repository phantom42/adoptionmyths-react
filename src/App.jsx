import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import RandomMythPage from './pages/RandomMyth/RandomMythPage';
import { randomMythLoader } from './pages/RandomMyth/randomMythLoader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index:true,
				element: <RandomMythPage />,
				loader: randomMythLoader
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