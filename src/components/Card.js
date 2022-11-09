import React from 'react';

import ProductDesktop from '../assets/image-product-desktop.jpg';
import ProductMobile from '../assets/image-product-mobile.jpg';
import IconCart from './IconCart';

export default function Card() {
  return (
    <div className="card m-4 w-[343px] rounded-md bg-white p-0 shadow-xl md:h-[28rem] md:w-[600px] md:card-side">
      <figure className="md:hidden">
        <img
          className="object-cover md:hidden"
          src={ProductMobile}
          alt="perfume on the table"
        />
      </figure>
      <img
        className="hidden rounded-l-md object-fill md:flex"
        src={ProductDesktop}
        alt="perfume on the table"
      />
      <div className="card-body p-4 md:p-6">
        <p className="text-[0.75rem] uppercase tracking-[5px] text-brand-gray">
          Perfume
        </p>
        <h2 className="card-title mb-4 pr-0 font-fraunces text-[2rem] leading-8 text-brand-dark-blue md:pr-12">
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="mb-4 w-full pr-6 text-[0.9rem] text-brand-gray md:mb-0 md:pr-0">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="mb-4 flex items-center">
          <p className="font-fraunces text-4xl font-bold text-brand-green">
            $149.99
          </p>
          <p className="font-medium text-brand-gray line-through">$169.99</p>
        </div>
        <div className="card-actions m-0 justify-center p-0">
          <button className="no-animation btn w-full gap-2 border-none bg-brand-green normal-case text-white hover:bg-brand-dark-green">
            <IconCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
