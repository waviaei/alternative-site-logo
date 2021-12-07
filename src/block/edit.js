//import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import './editor.scss';

// renderメソッドのインポート
import { render, useState, useEffect } from '@wordpress/element';
// Componentのインポート
import { TextControl, Button } from '@wordpress/components';

// stateの初期値設定
// const [rowSvg, setText] = useState('初期値');
// const [outputSVG, setOutputSVG] = useState();

export default function Edit({ setAttributes, attributes }) {
	const { url } = attributes;
	return (
		// <p { ...useBlockProps() }>
		// 	{ __(
		// 		'Alternative Site Logo – hello from the editor!',
		// 		'alternative-site-logo'
		// 	) }
		// </p>
		<div {...useBlockProps()}>
			{url ? (
				<img src={url} alt="" />
			) : (
				<MediaPlaceholder
					onSelect={(el) => {
						setAttributes({ url: el.url });
					}}
					allowedTypes={['image/svg+xml']}
				/>
			)}
			{/* <TextControl
				label="Logo SVG Tags"
				value={rowSvg}
				onChange={(value) => setText(value)}
			/> */}
		</div>
	);
}
