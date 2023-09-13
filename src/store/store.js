import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import educationReducer from '../features/education/educationSlice';
import skillsReducer from '../features/skills/skillsSlice';

export const addNewSkillToLocalStorage = (data) => {
	const localStorageData = localStorage.getItem('skills');
	let skills;
	if (localStorageData) {
		skills = JSON.parse(localStorageData);
	} else {
		skills = [];
	}
	skills.push(data);
	localStorage.setItem('skills', JSON.stringify(skills));
};

export const postSkillMiddleware = (store) => (next) => (action) => {
	if (action.type === 'postSkillData/fulfilled') {
		addNewSkillToLocalStorage(action.payload.data);
	}
	return next(action);
};

export const store = configureStore({
	reducer: {
		getEducationReducer: educationReducer,
		SkillsReducer: skillsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postSkillMiddleware),
});
