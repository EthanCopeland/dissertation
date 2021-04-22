import React from 'react';
import './products.css';
import products from '../products.json';

function Products() {
	return (
		<div id="contact">
			<section className="About">
				<div className="pure-u-3-5">

					<h1 id="header">Welcome to our Store!<br /><br /></h1>
				</div>
				<section className="product-background">
					<div className="pure-u-3-5">
						<h1 className="products-h1">Our Guarantee of High Quality Products <br /><br /></h1>
						<p className="products-p">Open 24/7 Just for you! <br /><br /> We hope you can find the gift sets most suitable for you here, with ranges from our starter bundle with the basic products such as a hat, pair of gloves, and a scarf to the mega bundle. Including two premium hats, gloves and scarves of higher quality for you and an extra.</p>
					</div>
				</section>

				<div className="pure-u-3-5">

					<h1 className="header">Gift Collections<br /><br /></h1>
					<p>Everything you'll need to get started all in one box.</p>
					<div className="product">
						{products.map(product => {
							return (
								<div className="width" key={product.id}>
									<img className="productsImages" src={product.image} alt={`Preview of ${product.title}`} />
									<h3>{product.title}</h3>
									<p className="desc">{product.description}</p>
									<p>${product.price}</p>
									<p>
										<button className="snipcart-add-item"
											data-item-id={product.id}
											data-item-image={product.image}
											data-item-name={product.title}
											data-item-url="/"
											data-item-price={product.price}
										>
											Add to Cart
                   						</button>
									</p>
								</div>
							);
						})}
					</div>
					<hr id="navy" />
					<br />
				</div>

			</section>
		</div>
	);
}

export default Products;