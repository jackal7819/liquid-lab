import Cocktail, { cocktailLoader } from './pages/Cocktail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Error from './pages/Error';
import HomeLayout from './pages/HomeLayout';
import Journal from './pages/Journal';
import Landing from './pages/Landing';
import SinglePageError from './pages/SinglePageError';
import { journalAction } from './pages/Journal';
import { landingLoader } from './pages/Landing';

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
				path: 'journal',
				element: <Journal />,
				action: journalAction,
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
