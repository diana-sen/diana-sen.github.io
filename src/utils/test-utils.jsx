import React from 'react';
import { render } from '@testing-library/react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// Basic setup with same slice reducers
import { educationSlice } from '../features/education/educationSlice';
import { skillsSlice } from '../features/skills/skillsSlice';
import { postSkillMiddleware } from '../store/store';

export function renderWithProviders(
	ui,
	{
		preloadedState = {
			getEducationReducer: {
				educationData: [],
				isLoading: 'false',
				hasError: 'false',
			},
			skillsReducer: {
				skillsData: [],
				isLoading: 'false',
				hasError: 'false',
				isFormOpen: false,
			},
		},
		// Create a store instance
		store = configureStore({
			reducer: {
				getEducationReducer: educationSlice.reducer,
				skillsReducer: skillsSlice.reducer,
			},
			middleware: (getDefaultMiddleware) =>
				getDefaultMiddleware().concat(postSkillMiddleware),
			preloadedState,
		}),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
