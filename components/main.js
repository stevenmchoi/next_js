import Link from 'next/link';

const Menu = ( { href, label } ) => (
	<span>
		<Link href={href}><a>{label}</a></Link>

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

export default ( { children } ) => (
	<main>
		<nav>
			<Menu href={'/'} label={'Home'} />
			<Menu key='employees' href={'/employees'} label={'Employees'} />
			<Menu key='about' href={'/about'} label={'About'} />
		</nav>

		<div>
			{children}
		</div>

		<style global jsx>{`
			body {
				font-family: Helvetica, sans-serif;
			};

			nav {
				text-align: left;
				background-color: #000;
				color: #fff;
				padding: 12px;
				position: fixed;
				z-index: 1000;
				top: 0;
				left: 0;
				right: 0;
			};

			a {
				color: #0e0e0e;
				text-decoration: none;
			};
		`}</style>

		<style jsx>{`
			div {
				width: 100%;
				color: #333;
				padding-top: 50px;
			};
		`}</style>
	</main>
);
