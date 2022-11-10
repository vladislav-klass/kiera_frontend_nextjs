import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

import Button from 'components/ui/Button';
import GitHub from 'components/icons/GitHub';
import Input from 'components/ui/Input';
import LoadingDots from 'components/ui/LoadingDots';
import Logo from 'components/icons/Logo';
import { Provider } from '@supabase/supabase-js';
import { getURL } from '@/utils/helpers';

const Impressum = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: ''
  });
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    let error;
    if (!password) {
      const res = await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: getURL() }
      });
      error = res.error;
    } else {
      const res = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });
      error = res.error;
    }
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    if (!password) {
      setMessage({
        type: 'note',
        content: 'Check your email for the magic link.'
      });
    }
    setLoading(false);
  };

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: { redirectTo: getURL() }
    });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  if (!user)
    return (
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
              {/* add more padding */}
              <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
              </p>
            </div>
          </div>
        </div>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default Impressum;
