import cn from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

import Button from 'components/ui/Button';
import { postData } from 'utils/helpers';
import { getStripe } from 'utils/stripe-client';
import { useUser } from 'utils/useUser';
import { Price, ProductWithPrice } from 'types';



interface Props {
  products: ProductWithPrice[];
}

type BillingInterval = 'year' | 'month';

export default function Pricing({ products }: Props) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  }

  const containerRef = useRef<any>();

  useEffect(() => {
    const script = document.createElement('script')
    script.id = "asciicast-arXqnlaexWu7RfaBQodWpmXlO",
      script.src = "https://asciinema.org/a/arXqnlaexWu7RfaBQodWpmXlO.js?autoplay=1?preload=1?speed=2",
      script.async = true,
      containerRef.current.appendChild(script)
  }, []);
  ;

  if (!products.length)
    return (
      <section className="bg-black">
        <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-6xl font-extrabold text-white sm:text-center sm:text-6xl">
            No subscription pricing plans found. Create them in your{' '}
            <a
              className="text-pink-500 underline"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Control your terminal with natural language
          </h1>

          {/* Embed a iframe here*/}
          <div className="justify-center" ref={containerRef}>
          </div>

          <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            Use your command line intuitively by typing in natural language.
            Kiara works with OpenAI's powerful Codex AI which also powers GitHub Copilot. <br></br><br></br>

            Try it out now for free!
          </p>

          {/* <div className="justify-center"> */}
          {/* <div className="mt-8 mb-8"> */}
          <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            Install Kiera with pip:
          </p>
          <p className="text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            <code>
              pip install kiera
            </code>
          </p>

          <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            After installing successfully try from the command line:
          </p>
          <p className="text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            <code>
              ka show free memory <br></br>
              ka initialize git repository <br></br>
              ka print all files created last week
              </code>
          </p>


          <p className="mt-16 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            Any questions? <a className="text-pink-500 underline" href="mailto:info@kiera.ai">Contact us</a>
          </p>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
