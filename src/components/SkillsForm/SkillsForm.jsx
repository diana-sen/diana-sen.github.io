import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/Button';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { postSkillData } from '../../features/skills/skillsSlice';

const SkillsForm = () => {
	const dispatch = useDispatch();

	// Validations
	const SubmitValidationSchema = Yup.object().shape({
		name: Yup.string()
			.min(1, 'Must be 1 character or more')
			.max(30, 'Must be 30 chararcters or less')
			.required('Skill name is a required field'),
		range: Yup.number()
			.positive()
			.integer()
			.min(10, 'Skill range must be greater than or equial to 10')
			.max(100, 'Skill range must be less than or equal to 100')
			.required("Skill range must be a 'number' type"),
	});

	const onSubmitForm = (data, actions) => {
		dispatch(postSkillData({ data }));
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={{ name: '', range: '' }}
			validationSchema={SubmitValidationSchema}
			onSubmit={onSubmitForm}
		>
			{(props) => {
				const { isSubmitting, isValid } = props;
				return (
					<div className='skills-form'>
						<Form aria-label='skill-form'>
							<div className='skill-field-container'>
								<div className='field-label'>
									<label htmlFor='name'>Skill name: </label>
									<Field
										id='name'
										name='name'
										type='text'
										placeholder='Enter skill name'
									/>
								</div>
								<div className='error'>
									<ErrorMessage name='name' />
								</div>
							</div>
							<div className='skill-field-container'>
								<div className='field-label'>
									<label htmlFor='range'>Skill Range: </label>
									<Field
										id='range'
										name='range'
										type='number'
										step='10'
										min='10'
										max='100'
										placeholder='Enter skill range'
									/>
								</div>

								<div className='error'>
									<ErrorMessage name='range' />
								</div>
							</div>
							<div className='button-container'>
								<Button
									type={'submit'}
									text={'Add skill'}
									className={isValid ? 'button' : 'button btn-disabled'}
									disabled={isSubmitting}
								></Button>
							</div>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};

export default SkillsForm;
