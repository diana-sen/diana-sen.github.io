import { configureStore } from '@reduxjs/toolkit';
import educationReducer from '../features/education/educationSlice';
import skillsReducer from '../features/skills/skillsSlice';

export const store = configureStore({
	reducer: {
		getEducationReducer: educationReducer,
		getSkillsReducer: skillsReducer,
	},
});
