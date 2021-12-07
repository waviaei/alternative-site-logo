//import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( {attributes} ) {
	const { url } = attributes;
	if (!url ) {
		return null;
	}
	return (
		// <p { ...useBlockProps.save() }>
		// 	{ __(
		// 		'Alternative Site Logo – hello from the saved content!',
		// 		'alternative-site-logo'
		// 	) }
		// </p>
		<div {...useBlockProps.save()}>
			<img src={url} alt="" />
		</div>
	);
}
