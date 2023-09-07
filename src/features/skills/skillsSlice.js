import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	skillsData: [],
	isLoading: 'false',
	hasError: 'false',
};

export const fetchSkillsData = createAsyncThunk('fetchSkillsData', async () => {
	console.log('llamando a fetch skills');
	const response = await fetch('http://localhost:3000/api/skills');
	const data = await response.json();
	return data;
});

export const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {},
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
			});
	},
});

export default skillsSlice.reducer;
