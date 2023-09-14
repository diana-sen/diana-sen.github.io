import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';

import educationTestReducer, { fetchEducationData } from './educationSlice';
import server from '../../services/server';
import { Response } from 'miragejs';

describe('educationSlice', () => {
	let store;
	let serverTest;
	beforeAll(() => {
		serverTest = server();
	});

	afterAll(() => serverTest.shutdown());
	beforeEach(() => {
		store = configureStore({
			reducer: {
				educationTestReducer,
			},
		});
	});

	test('should return the initial state', () => {
		const state = store.getState();
		expect(state.educationTestReducer).toEqual({
			educationData: [],
			isLoading: 'false',
			hasError: 'false',
		});
	});

	test('should handle fetchEducationData.fulfilled', async () => {
		await store.dispatch(fetchEducationData());

		const state = store.getState();

		await expect(state.educationTestReducer.educationData).toEqual([
			{
				date: 2023,
				title: 'Introduction to JavaScript Course',
				text: 'EPAM Systems\n\n•Web development course including HTML, CSS, JavaScript, unit testing, and React.\n•Delivered module tasks to comply with course requirements.',
			},
			{
				date: 2022,
				title: 'Product Management Course',
				text: 'EPAM Systems\n\n• Developed user personas, user requirements, and features.\n• Created strategical roadmap, themes, epics, user stories, and backlog definition.\n• Planned pre-launch, launch, and post-launch strategies and activities.',
			},
			{
				date: 2021,
				title: 'MSc degree in Biomedical Sciences and Technology',
				text: 'Instituto Nacional de Astrofísica, Óptica y Electrónica',
			},
			{
				date: 2015,
				title: 'BSc degree in Biomedical Engineering',
				text: 'Universidad Politécnica de Chiapas',
			},
		]);
	});

	test('should handle fetchEducationData.pending', async () => {
		store.dispatch(fetchEducationData());

		const state = store.getState();
		//console.log('===================================================');
		//console.log(JSON.stringify(state));

		expect(state.educationTestReducer.educationData).toEqual([]);
		expect(state.educationTestReducer.isLoading).toBeTruthy();
		expect(state.educationTestReducer.hasError).toBeFalsy();
	});

	test('should handle fetchEducationData.rejected', async () => {
		serverTest.get('/educations', () => {
			return new Response(
				400,
				{},
				{ errors: ['The database went on vacation'] }
			);
		});

		await store.dispatch(fetchEducationData());

		const state = store.getState();

		expect(state.educationTestReducer.educationData).toEqual([]);
		expect(state.educationTestReducer.isLoading).toBeFalsy();
		expect(state.educationTestReducer.hasError).toBeTruthy();
	});
});
