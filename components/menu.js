import Link from 'next/link';

export default ( { href, label } ) => (
	<span>
		<Link href={href} as={'/next_js'}><a>{label}</a></Link>

		<style jsx>{`
			{
				padding: 6px 4px;
			};

			a {
				color: #fff;
				text-decoration: none;
				font-size: 16px;
			};
		`}</style>
	</span>
);
