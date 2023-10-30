import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Cocktail from './pages/Cocktail';
import Error from './pages/Error';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Newsletter from './pages/Newsletter';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{ index: true, element: <Landing /> },
			{ path: 'cocktail', element: <Cocktail /> },
			{ path: 'newsletter', element: <Newsletter /> },
			{ path: 'about', element: <About /> },
			{ path: '*', element: <Error/> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
