'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from './app/lib/storageHelpers';

export default function CookieBanner() {
  // This variable is used to store the cookie consent value
  const [cookieConsent, setCookieConsent] = useState(false);

  // This effect is used to grab the cookie consent value from localStorage
  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  // This effect is used to update the cookie consent value in localStorage
  // Its gonna execute when user load the page and when user click on the button to accept or denied cookies
  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 ${
        cookieConsent !== null ? 'hidden' : 'flex'
      } px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            Utilizamos <span className="font-bold text-sky-400">cookies</span> para mejorar tu
            experiencia en nuestro sitio web.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          No permitir
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
          onClick={() => setCookieConsent(true)}
        >
          Permitir cookies
        </button>
      </div>
    </div>
  );
}
