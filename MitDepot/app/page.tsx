'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pitchPdfUrl = '/pitch/MitDepot_Pitch.pdf';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const downloadLinks = [
    { label: 'Download One Pager (PDF)', url: '/pdf/MitDepot%20One%20Pager.pdf' },
    { label: 'Download AntiScam Guide (PDF)', url: '/pdf/MitDepot%20AntiScam.pdf' },
    { label: 'Download Recovery Ark (PDF)', url: '/pdf/MitDepot%20Recovery%20Ark.pdf' }
  ];

  const faqs = [
    {
      q: 'Er det sikkert at bruge MitDepot?',
      a: 'Ja. Vi opbevarer aldrig dine private nøgler, ord eller enheder. Al rådgivning foregår 1:1 og skriftligt, uden fjernadgang eller skærmdeling.'
    },
    {
      q: 'Kan jeg stadig bruge Ledger eller Trezor?',
      a: 'Ja – vi arbejder med alle kendte wallets. Vi hjælper dig med at analysere og forbedre dit nuværende setup.'
    },
    {
      q: 'Tilbyder I arveplanlægning?',
      a: 'Ja. I "Fuld kontrol"-pakken hjælper vi dig med fysisk og juridisk arv, så dine efterladte kan få adgang ved behov.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F2] dark:bg-[#121212] text-black dark:text-white p-6">
      <div className="flex justify-end">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gray-300 dark:bg-gray-700 text-sm px-4 py-2 rounded-full shadow"
        >
          {isDarkMode ? '☀️ Lys tilstand' : '🌙 Mørk tilstand'}
        </button>
      </div>

      <section className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Velkommen til MitDepot</h1>
        <p className="text-lg mb-6">Din professionelle rådgivning i Bitcoin self-custody. Ingen modpartsrisiko. 100% ejerskab.</p>
        <button onClick={() => setShowPitch(true)} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-2xl shadow-md">Se Pitch</button>
      </section>

      <section className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3 py-10">
        {[
          {
            title: 'Klar til at eje',
            price: '10.000 kr',
            desc: 'For dig, der vil i gang med self-custody. Hardware, opsætning og forståelse.'
          },
          {
            title: 'Ejer med overblik',
            price: '20.000 kr',
            desc: 'Multisig, trusselsanalyse og visuel struktur. Du får kontrol med dit setup.'
          },
          {
            title: 'Fuld kontrol',
            price: '45.000 kr',
            desc: 'Komplet løsning inkl. arv, genvinding, seed-opdeling og skræddersyet plan.'
          }
        ].map((pkg, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
            <p className="mb-2">{pkg.price}</p>
            <p>{pkg.desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto py-16">
        <h3 className="text-2xl font-bold mb-4 text-center">Download Gratis Materiale</h3>
        <div className="grid gap-4">
          {downloadLinks.map((link, index) => (
            <a key={index} href={link.url} download className="block bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-800 text-orange-900 dark:text-orange-100 py-3 px-4 rounded-lg text-center">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16">
        <h3 className="text-2xl font-bold mb-4 text-center">FAQ – Ofte stillede spørgsmål</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-1">{faq.q}</h4>
              <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-16">
        <h3 className="text-xl font-bold mb-2">Book en gratis afklaringssamtale</h3>
        <a href="mailto:kontakt@mitdepot.com" className="text-blue-600 dark:text-blue-300 underline">kontakt@mitdepot.com</a>
      </section>

      {showPitch && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 w-full max-w-5xl h-[90vh] relative">
            <button onClick={() => setShowPitch(false)} className="absolute top-4 right-4 text-black dark:text-white font-bold text-lg">×</button>
            <iframe
              src={pitchPdfUrl}
              title="MitDepot Pitch PDF"
              className="w-full h-full border rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
