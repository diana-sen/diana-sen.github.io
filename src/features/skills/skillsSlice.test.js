import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';

import skillsTestReducer, {
	toggleForm,
	fetchSkillsData,
	postSkillData,
} from './skillsSlice';
import server from '../../services/server';
import { Response } from 'miragejs';

describe('skillSlice', () => {
	let store;
	let serverTest;
	beforeAll(() => {
		serverTest = server();
	});

	afterAll(() => serverTest.shutdown());
	beforeEach(() => {
		store = configureStore({
			reducer: {
				skillsTestReducer,
			},
		});
	});

	test('should return the initial state', () => {
		const state = store.getState();
		expect(state.skillsTestReducer).toEqual({
			skillsData: [],
			isLoading: 'false',
			hasError: 'false',
			isFormOpen: false,
		});
	});

	test('should handle fetchSkillsData.fulfilled', async () => {
		serverTest.get('/skills', () => {
			return [
				{
					name: 'JavaScript',
					range: 70,
				},
				{
					name: 'Github',
					range: 50,
				},
			];
		});

		await store.dispatch(fetchSkillsData());

		const state = store.getState();

		await expect(state.skillsTestReducer.skillsData).toEqual([
			{
				name: 'JavaScript',
				range: 70,
			},
			{
				name: 'Github',
				range: 50,
			},
		]);
	});

	test('should handle fetchSkillsData.pending', async () => {
		store.dispatch(fetchSkillsData());

		const state = store.getState();
		//		console.log('===================================================');
		//console.log(JSON.stringify(state));

		expect(state.skillsTestReducer.skillsData).toEqual([]);
		expect(state.skillsTestReducer.isLoading).toBeTruthy();
		expect(state.skillsTestReducer.hasError).toBeFalsy();
	});

	test('should handle fetchSkillsData.rejected', async () => {
		serverTest.get('/skills', () => {
			return new Response(
				400,
				{},
				{ errors: ['The database went on vacation'] }
			);
		});

		await store.dispatch(fetchSkillsData());

		const state = store.getState();

		expect(state.skillsTestReducer.skillsData).toEqual([]);
		expect(state.skillsTestReducer.isLoading).toBeFalsy();
		expect(state.skillsTestReducer.hasError).toBeTruthy();
	});
});
