/* eslint-disable */
import Link from 'next/link';
import { Divider } from 'semantic-ui-react';
import Head from "next/head";


function App() {

	return (
		<>
			<Head>
				<title>Hur Fungerar Det?</title>
			</Head>
			<center>
				<h2>
					Hur Fungerar Hemtjänst?
				</h2>
				<Divider />
				<br />
			</center>
			<div style={{ maxWidth: '500px' }}>
				<h4>Hur fungerar det?</h4>
				<p>Ingen aning.</p>
			</div>
			<div style={{height: 'auto'}} />
		</>
	);
}

export default App;