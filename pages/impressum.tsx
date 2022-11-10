import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import Script from 'next/script';

import Button from 'components/ui/Button';
import GitHub from 'components/icons/GitHub';
import Input from 'components/ui/Input';
import LoadingDots from 'components/ui/LoadingDots';
import Logo from 'components/icons/Logo';
import { Provider } from '@supabase/supabase-js';
import { getURL } from '@/utils/helpers';

const Impressum = () => {
  return (
    <>
      <div className="mt-8 flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
          <Logo width="64px" height="64px" />
        </div>
        <div className="flex justify-center">

          <div className="mt-8 mb-8">
            <h3 className="font-bold mt-5 text-xltext-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
              Impressum
            </h3>
            <p className="mt-5 text-l text-zinc-200 sm:text-center sm:text-l max-w-l m-auto">
              Kiera.ai GbR <br />
              <br />
              <a className="text-pink-500 underline" href="mailto:info@kiera.ai">info@kiera.ai</a> <br />
              <br />
              +(49)1746502679
              <br />
              <br />
              Stefan Frisch <br />
              Tom Dörr <br />
              Vladislav Klass <br />
              <br />
              Westendstr. 231 <br />
              80686 Munich <br />
              Germany <br />
              <br />
            </p>
            <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default Impressum;
