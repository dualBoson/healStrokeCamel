import React	from 'react';

import GameSymbol from '@commonComp/GameSymbol/GameSymbol';

import './SteepnessSymbol.css';

export default class SteepnessSymbol extends React.Component{

	render() {
		
		return (
			<div className="Steepness-Symbol">
				<GameSymbol
					image="Steepness Image"
				/>
			</div>
		);
	}
};
