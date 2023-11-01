import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Cocktail from './pages/Cocktail';
import Error from './pages/Error';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Newsletter from './pages/Newsletter';
import SinglePageError from './pages/SinglePageError';
import { landingLoader } from './pages/Landing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{ path: 'cocktail/:id', element: <Cocktail /> },
			{ path: 'newsletter', element: <Newsletter /> },
			{ path: 'about', element: <About /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
