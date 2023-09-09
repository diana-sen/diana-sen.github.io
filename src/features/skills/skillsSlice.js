import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { current } from 'immer';

const initialState = {
	skillsData: [],
	isLoading: 'false',
	hasError: 'false',
	isFormOpen: false,
};

// Thunks for fetch and post data
export const fetchSkillsData = createAsyncThunk('fetchSkillsData', async () => {
	const response = await fetch('http://localhost:3000/api/skills');
	const data = await response.json();
	return data;
});

export const postSkillData = createAsyncThunk('postSkillData', async (data) => {
	try {
		const response = await fetch('http://localhost:3000/api/skills', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify(data),
		});
		return response.json();
	} catch (error) {
		return error;
	}
});

export const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {
		toggleForm: (state) => {
			state.isFormOpen = !state.isFormOpen;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSkillsData.pending, (state) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(fetchSkillsData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasError = false;
				state.skillsData = action.payload;
			})
			.addCase(fetchSkillsData.rejected, (state, action) => {
				state.hasError = true;
				state.isLoading = false;
			})
			.addCase(postSkillData.pending, (state) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(postSkillData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasError = false;
				let skills = [];
				if (state.skillsData) {
					skills = [...current(state.skillsData)];
				}
				skills.push(action.payload.data);
				state.skillsData = skills;
			})
			.addCase(postSkillData.rejected, (state) => {
				state.hasError = true;
				state.isLoading = false;
			});
	},
});

export const { toggleForm } = skillsSlice.actions;
export default skillsSlice.reducer;
