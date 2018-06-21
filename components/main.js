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
	<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />

			<title>Employee Paystubs</title>
		</head>
		<body>
			<main>
				<nav>
					<Menu href={'/'} label={'Home'} />
					<Menu key='employees' href={'/employees'} label={'Employees'} />
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

			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossOrigin="anonymous"></script>
		</body>
	</html>
);
