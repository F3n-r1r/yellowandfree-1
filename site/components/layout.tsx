import * as React from 'react'

// TODO : make pretty
// TODO : make responsive
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="header">
				<h1 className="header__headline">Yellow And Free</h1>
			</header>
			

			<main className="main">
				{children}
			</main>

			<footer className="footer">
				<p>- Benjamin Lund Larsen</p>
			</footer>
		</>
	)
}
