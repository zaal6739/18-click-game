import React from 'react';

const ImageCard = ({ backgroundColor, selectedCharacter, onImageClick }) => {
	return (
		<div className='col s3'>
			<div className={`card hoverable ${backgroundColor} lighten-3`} onClick={() => { onImageClick(selectedCharacter) }}>
				<div className='card-image'>
					<img src={`18-click-game/public/assets/img/${selectedCharacter}`} alt='Characters' />
				</div> 
			</div>
		</div>
	);
};

export default ImageCard;