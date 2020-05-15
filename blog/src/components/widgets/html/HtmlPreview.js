import React from 'react';

export default function ({ html }) => {
	return (
		<div dangerouslySetInnerHTML={{
			__html: props.html
		}}> </div>
	);
}
