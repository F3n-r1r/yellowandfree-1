import * as React from 'react'
import Link from 'next/link'
import { Models } from '@gg/api/db'
import { apiClient } from '@gg/api/client'

import { NextPage } from 'next'

interface Props {
	listings: Models.Listing[];
}

const setView = (event) => {
	var products = document.querySelector('.products');
	var target = event.currentTarget;
	var view = target.getAttribute('data-view');
	document.querySelector('.view-controls__btn--active').classList.remove('view-controls__btn--active');
	target.classList.add('view-controls__btn--active');
	

	if(view === 'list' && !products.classList.contains('products--list')) {
		products.classList.remove('products--grid');
		products.classList.add('products--list');
	}

	if(view === 'grid' && !products.classList.contains('products--grid')) {
		products.classList.remove('products--list');
		products.classList.add('products--grid');
	}
}

const Result: NextPage<Props> = ({ listings }) => {
	// TODO : add prices + type (icon?)
	// TODO : make it hurt my eyes less (using tailwind or custom css)
	// TODO : use "helmet" to change title of page
	// TODO : add dark mode (toggle or from browser)
	// TODO : make SEO friendly (SSR)
	// TODO : sort by price
	// TODO : add menu
	// TODO : add search box
	// TODO : filter by type (buy vs sell)
	// TODO : pagination
	// TODO : toggle list vs cards




	return (
		<>
			<header className="product-header">
				<div className="view-controls">
					<button data-view="list" onClick={ setView } className="view-controls__btn view-controls__btn--active">
						<svg viewBox="0 0 24 24"><path d="M7 6h10a1 1 0 010 2H7a1 1 0 110-2zm0 10h10a1 1 0 010 2H7a1 1 0 010-2zm0-5h10a1 1 0 010 2H7a1 1 0 010-2z"></path></svg>
					</button>
					<button data-view="grid" onClick={ setView }  className="view-controls__btn">
						<svg viewBox="0 0 24 24"><path d="M7 6h4.25v5.25H6V7a1 1 0 011-1zm-1 6.75h5.25V18H7a1 1 0 01-1-1v-4.25zM12.75 6H17a1 1 0 011 1v4.25h-5.25V6zm0 6.75H18V17a1 1 0 01-1 1h-4.25v-5.25z"></path></svg>
					</button>
				</div>
			</header>

			<ul className="products products--list">
				{
					listings.map(listing => (
						<li className="product" key={listing.id}>
							<Link passHref href={`/listing/${listing.id}`}>
								<a className="product__link">
									<div className="product__content">
										<h4 className="product__title">{listing.title}</h4>
										<p className="product__description">{listing.content}</p>
									</div>
								</a>
							</Link>
						</li>
					))
				}
			</ul>
		</>
	)
}

Result.getInitialProps = async () => {
	const listings = await apiClient.listings.getAll();
	return { listings }
}

export default Result
