import React from 'react';
import './products.css';
import products from '../products.json';

function Products() {
  return (
    <div id="contact">
      <section className="About">
        <div className="pure-u-3-5">

          <h1 className="about-header">Welcome to our Store!<br /><br /></h1>
        </div>
        <section className="product-background">
          <div className="pure-u-3-5">
            <h1 className="products-h1">Our Gurantee of High Quality Products <br /><br /></h1>
            <p className="products-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus eros ac vestibulum viverra. In eu arcu non tellus laoreet venenatis sit amet et lectus. Nullam sagittis non sapien eget eleifend. Vivamus in congue diam, eget accumsan neque. Morbi vitae arcu ut tellus molestie placerat. Fusce gravida eleifend nulla, sit amet vehicula risus pharetra sit amet. Mauris eleifend facilisis interdum. Ut consequat, dolor eu eleifend ultrices, libero sem accumsan massa, a ullamcorper tellus risus sit amet orci. Ut sodales ante sed suscipit imperdiet. Quisque tempor dapibus eros nec rhoncus. Nam ut augue at magna sagittis suscipit. Nulla pharetra diam a molestie placerat. Fusce ornare augue in ex eleifend suscipit. Duis at purus in neque tincidunt congue. Proin eu posuere tellus. Aliquam sodales nec odio a porttitor.</p>
          </div>
        </section>
        <div className="pure-u-3-5">


        <div className="navContainer">
        <p className="title">
          <a href="/account">
              Login / Register
          </a>
        </p>

        <p className="description">
          <a className="snipcart-checkout snipcart-summary" href="/">
          <p>Cart</p>
            <i className="far fa-shopping-cart"></i>
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>

      </div>
       


          <h1 className="about-header">Gift Collections<br /><br /></h1>
          <p>Everything you'll need tucked in one box.</p>
          <div className="gifts">
            {products.map(product => {
              return (
                <div key={product.id}>
                  <img className="productsImages" src={product.image} alt={`Preview of ${product.title}`} />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>£{product.price}</p>
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
        <div className="pure-u-3-5">

          <h1 className="about-header-blue">Scarves and Gloves<br /><br /></h1>
          <p>Setting the stage in a comfortable way.</p>
          <hr id="blue" />
          <br />
        </div>
        <div className="pure-u-3-5">

          <h1 className="about-header-green">Hats and Masks<br /><br /></h1>
          <p>The best impression is with the first impression.</p>
          <hr id="green" />
          <br />
        </div>
      </section>
    </div>
  );
}

export default Products;