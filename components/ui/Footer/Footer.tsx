import Link from 'next/link';
import s from './Footer.module.css';

import Logo from 'components/icons/Logo';
import GitHub from 'components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-white transition-colors duration-150 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/">
            <a className="flex flex-initial items-center font-bold md:mr-24">
              <span className="rounded-full border border-zinc-700 mr-2">
                <Logo />
              </span>
              <span>Kiera.ai</span>
            </a>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                Home
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
            <Link href="/pricing">
                <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                  Pricing
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
            <Link href="mailto:info@kiera.ai">
                <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                  Contact
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/impressum">
                <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                  Impressum
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/privacypolicy">
                <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/terms">
                <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                  Terms of Use
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-zinc-900">
        <div>
          <span>&copy; 2022 Kiera.ai All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
