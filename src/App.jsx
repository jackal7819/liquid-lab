import Cocktail, { cocktailLoader } from './pages/Cocktail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Error from './pages/Error';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Newsletter from './pages/Newsletter';
import SinglePageError from './pages/SinglePageError';
import { landingLoader } from './pages/Landing';
import { newsletterAction } from './pages/Newsletter';

const queryClient = new QueryClient({
	defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

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
				loader: landingLoader(queryClient),
			},
			{
				path: 'cocktail/:id',
				element: <Cocktail />,
				errorElement: <SinglePageError />,
				loader: cocktailLoader(queryClient),
			},
			{
				path: 'newsletter',
				element: <Newsletter />,
				action: newsletterAction,
			},
			{ path: 'about', element: <About /> },
		],
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
