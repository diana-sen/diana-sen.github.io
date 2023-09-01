import React, { useState } from 'react';
import Panel from '../../components/Panel/Panel';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';

import { faBars } from '@fortawesome/free-solid-svg-icons';
const Inner = () => {
	const [panelVisible, setPanelVisible] = useState(true);

	const togglePanel = () => {
		setPanelVisible(!panelVisible);
	};

	const boxTitle = 'About me';
	const boxContent =
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque';

	return (
		<main className='inner'>
			<Panel isVisible={panelVisible} />
			<Button className='button' onClick={togglePanel} icon={faBars}></Button>

			<div className='content'>
				<Box title={boxTitle} content={boxContent}></Box>
			</div>
		</main>
	);
};

export default Inner;
