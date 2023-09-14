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
		if (response.status !== 200) {
			throw new Error('Unable to fetch data');
		} else {
			const data = await response.json();
			//		console.log('this is fetching data', data);
			return data;
		}
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
				//console.log('this is fulfilled', action.payload);
				state.educationData = action.payload;
			})
			.addCase(fetchEducationData.rejected, (state, action) => {
				state.hasError = true;
				state.isLoading = false;
			});
	},
});

export default educationSlice.reducer;
