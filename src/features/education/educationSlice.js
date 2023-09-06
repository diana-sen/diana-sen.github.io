import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	educationData: [],
	isLoading: 'false',
	hasError: 'false',
};

export const fetchEducationData = createAsyncThunk(
	'fetchEducationData',
	async () => {
		const response = await fetch('http://localhost:3000/api/educations');
		const data = await response.json();
		return data;
	}
);

export const educationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEducationData.pending, (state) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(fetchEducationData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasError = false;
				state.educationData = action.payload;
			})
			.addCase(fetchEducationData.rejected, (state, action) => {
				state.hasError = true;
				state.isLoading = false;
			});
	},
});

export default educationSlice.reducer;
