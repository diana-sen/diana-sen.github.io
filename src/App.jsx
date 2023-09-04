import {
	Route,
	Navigate,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import NotFound from './pages/NotFound/NotFound';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/'>
				<Route
					index
					element={<Home />}
					errorElement={<Navigate to='not-found' />}
				></Route>
				<Route
					path='inner'
					element={<Inner />}
					errorElement={<Navigate to='not-found' />}
				></Route>
				<Route path='not-found' element={<NotFound />}></Route>
				<Route path='*' element={<Navigate to='not-found' />}></Route>
			</Route>
		),
		{ basename: '/' }
	);

	return <RouterProvider router={router} />;
}

export default App;
