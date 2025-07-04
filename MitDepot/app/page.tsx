'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Page() {
  // Define state with explicit types
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState<boolean>(false);
  const [currentPitchPage, setCurrentPitchPage] = useState<number>(0);
  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);

  const pitchContent = [
    {
      title: 'I. Indledning – Hvad er MitDepot?',
      content: (
        <>
          <p>
            "Bitcoin er ikke bare en investering – det er din økonomiske livsforsikring."
            <br />
            MitDepot er rådgivning i sikker, privat og fremtidssikret opbevaring af Bitcoin.
          </p>
          <ul className={styles.pitchList}>
            <li>Vi arbejder 1:1 med formuebeviste personer.</li>
            <li>Vi bygger på gennemtænkt sikkerhed, open-source værktøjer og skræddersyer efter behov.</li>
            <li>Det her handler ikke om hype, crypto eller trading cykler – men om, hvordan du beholder dine Bitcoin.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'II. Problemet – Hvorfor er det her nødvendigt?',
      content: (
        <>
          <ul className={styles.pitchList}>
            <li>De fleste Bitcoin-ejere har stadig modpartsrisiko (børser, apps, custodians).</li>
            <li>20% af al BTC er allerede mistet – ikke pga. hacks, men pga. menneskelige fejl.</li>
            <li>Uden et robust set-up, en klar arveplan og korrekte værktøjer kan du/dine elskede miste adgangen for altid.</li>
            <li>En enkelt fejl – ét forkert tryk, én mistet kode/nøgle – og pengene er for evigt væk.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'III. Løsningen – Hvad tilbyder MitDepot?',
      content: (
        <>
          <p>Vi hjælper dig med en skræddersyet opsætning af:</p>
          <ul className={styles.pitchList}>
            <li>Hardware wallets, alt efter behov (hot/cold, single/multi/passphrase m.m.).</li>
            <li>Arveplan, kan din familie/børn finde ud af at få adgang til dine Bitcoin i tilfælde af sygdom/død?</li>
            <li>Trusselsanalyse, Svigtepunksanalyse, Privatlivsbehov.</li>
          </ul>
          <p>Du får hjælp til hele opsætningen – uden at vi nogensinde har adgang til dine midler, enhed eller lignende.</p>
        </>
      ),
    },
    {
      title: 'IV. Udbytte – Hvordan MitDepot kommer ind i billedet',
      content: (
        <>
          <ul className={styles.pitchList}>
            <li>Du får ro i maven nu og i fremtiden.</li>
            <li>Du ved præcis, hvor dine Bitcoin er, har 24/7/365 adgang og at ingen andre har kan.</li>
            <li>Du undgår at efterlade kaos til din ikke-tekniske onkel eller selv at miste dem.</li>
            <li>Du slipper for at famle i mørket – vi har prøvet det før og guider dig hele vejen.</li>
            <li>Du tager ansvar – men med en sparringspartner, der forstår både teknikken og dine behov.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'V. Hvorfor MitDepot?',
      content: (
        <>
          <ul className={styles.pitchList}>
            <li>Vi er 100 % Bitcoin-only – vi gør ikke alt. Vi gør det her med præcision.</li>
            <li>Alt vi bruger er open-source, verified og battle-tested – ingen sorte bokse.</li>
            <li>Vi forstår formuebevistes behov: kontrol, diskretion, arv og sikkerhed.</li>
            <li>Vi rådgiver – vi opbevarer ikke. Du ejer, du bestemmer.</li>
            <li>Vores løsninger fungerer i praksis – ikke bare på papir.</li>
          </ul>
          <p>Det her handler ikke om crypto, trading eller andet gøjl. Det er din livline til at sikre din fremtidige Bitcoin formue.</p>
        </>
      ),
    },
    {
      title: 'VI. Pakker & Priser',
      content: (
        <div className={styles.packagesContainer}>
          <div className={`${styles.package} ${styles.packageRow}`}>
            <div className={`${styles.package} ${styles.packageGreen}`}>
              <h3>🟠 Klar til at eje</h3>
              <p>
                <strong>Pris:</strong> 10.000 kr.
                <br />
                Til dig, der vil i gang – eller optimere det, du allerede har.
              </p>
              <p>Inkluderer:</p>
              <ul className={styles.packageList}>
                <li>Hardware wallet opsætning</li>
                <li>Single-sig med/uden passphrase</li>
                <li>Backup-strategi og risikoforståelse</li>
                <li>Grundlæggende sikkerhed og vaner</li>
                <li>Pakken bruges også til gennemgang af eksisterende opsætning (hvis ønsket)</li>
              </ul>
              <p className={styles.duration}>
                <strong>Varighed:</strong> Ca. 2 timer
              </p>
              <p className={styles.note}>
                <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
              </p>
            </div>
            <div className={`${styles.package} ${styles.packageYellow}`}>
              <h3>🟡 Ejer med overblik</h3>
              <p>
                <strong>Pris:</strong> 20.000 kr.
                <br />
                Til dig med større mængder bitcoin og behov for teknisk dybde.
              </p>
              <p>Inkluderer:</p>
              <ul className={styles.packageList}>
                <li>Alt i første pakke</li>
                <li>Rådgivning om hardware wallets</li>
                <li>Airgapped wallet-struktur</li>
                <li>Brug og opsætning af Bitcoin node</li>
                <li>Skræddersyet recovery-plan/guide</li>
                <li>Fokus på back-up, sikkerhed og gennemgang af angrebsvektorer</li>
              </ul>
              <p className={styles.duration}>
                <strong>Varighed:</strong> 2–4 timer (ekslusiv Node download)
              </p>
              <p className={styles.note}>
                <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
              </p>
            </div>
            <div className={`${styles.package} ${styles.packageBlue}`}>
              <h3>🔵 Fuld kontrol</h3>
              <p>
                <strong>Pris:</strong> 45.000 kr.
                <br />
                Til dig, der ønsker suveræn sikkerhed – for livet og for arvingerne.
              </p>
              <p>Inkluderer:</p>
              <ul className={styles.packageList}>
                <li>Alt i “Ejer med overblik”</li>
                <li>Multisig-opsætning (hvis relevant)</li>
                <li>Udvidet trusselsanalyse, svigtpunksanalyse</li>
                <li>Arveplan og familievejledning</li>
                <li>Opsætning og brug af Bitcoin node</li>
                <li>UTXO-management, privat bevidsthed</li>
                <li>Ét gratis check-up inden for 4 måneder</li>
              </ul>
              <p className={styles.duration}>
                <strong>Varighed:</strong> Fleksibel efter behov og kompleksitet
              </p>
              <p className={styles.note}>
                <strong>Note:</strong> Vi afslutter først, når alt er testet og forstået.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handlePitchAccess = () => setShowPasswordModal(true);

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordInput === '9945') {
      setShowPitch(true);
      setActiveSection('Pitch');
      setCurrentPitchPage(0);
      setShowPasswordModal(false);
      setPasswordInput('');
    } else {
      alert('Forkert adgangskode. Prøv igen.');
      setPasswordInput('');
    }
  };

  const handleDownloadAccess = async () => {
    try {
      console.log('Fetching PDF links...');
      const response = await fetch('/api/pdfs', { method: 'GET' });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data.urls && Array.isArray(data.urls)) {
        setPdfUrls(data.urls);
        setShowDownloadModal(true);
      } else {
        alert('No URLs found in response');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Failed to fetch PDF links: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
        handlePitchAccess();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNextPage = () => currentPitchPage < pitchContent.length - 1 && setCurrentPitchPage(currentPitchPage + 1);
  const handlePreviousPage = () => currentPitchPage > 0 && setCurrentPitchPage(currentPitchPage - 1);
  const handleClosePitch = () => {
    setShowPitch(false);
    setActiveSection(null);
    setCurrentPitchPage(0);
  };
  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordInput('');
  };
  const handleCloseDownloadModal = () => {
    setShowDownloadModal(false);
    setPdfUrls([]);
  };

  return (
<main className={styles.main}>
  <div className={styles.header}>
    <div className={styles.headerText}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h1 className={styles.title}>MitDepot</h1>
        <img src="/logo.png" alt="MitDepot Logo" style={{ height: '10rem', width: '15rem' }} />
      </div>
      <h2 className={styles.subtitle} style={{ color: '#333333' }}>
        Vi hjælper dig eje dine Bitcoin selv – og sove trygt.
        <br />
        <span className={styles.subtitleNormal}>Sikkert. Privat. For evigt.</span>
      </h2>
    </div>
  </div>

      <div className={styles.contentWrapper}>
        <p className={styles.intro}>
          Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.
          <br />
          Dine penge. Din fremtid. Din familie. Tag kontrol.
        </p>

        <div className={styles.cta}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Book et gratis 30-minutters møde
          </a>
        </div>

        <p className={styles.description}>
          Bitcoin er ikke spekulation. Det er basepenge i digital form – et globalt, upolitisk system
          med begrænset udbud, der ikke omliggende til nogen.
          Ingen banker. Ingen stater. Ingen modparter.
          Men uden korrekt opbevaring forsvinder sikkerheden og suveræniteten.
          Hos MitDepot lærer du at holde dine Bitcoin, som de var tiltænkt:
          100% under din egen kontrol!
        </p>

        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source src="/intro.mp4" type="video/mp4" />
            Din browser understøtter ikke video-tagget.
          </video>
        </div>

        <div className={styles.mainContent}>
          <p>
            Bitcoin self-custody ved hjælp af MitDepot er din livbåd i en verden hvor det
            traditionelle FIAT-system suger livet ud af dine beholdninger og aktiver gennem inflation
            og kontrol. Over 80% af Bitcoin-ejere risikerer at miste alt gennem, men DU er stadig den største risiko for tab af dine Bitcoin.
            Med vores 1:1-rådgivning lærer du at eje dine Bitcoin sikkert gennem self-custody inklusiv
            arveplanlægning, trusselsanalyse, svigtpunktsanalyse, multisig m.m. – uden at vi
            nogensinde rører dine private keys. Dette er ikke bare en chance for 100% kontrol og tryghed.
            Det er din sidste udvej før dørene lukker, og du bliver fanget i et forgængeligt system.
          </p>
        </div>

        <div className={styles.secondaryCta}>
          <a
            href="https://calendly.com/selvdepot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaButton} ${styles.ctaButtonGreen}`}
          >
            Klar til at tage ansvar? Book et kald nu
          </a>
        </div>

        <p className={styles.assessmentText}>
          Dette er ikke et salgstrick. Vi vurderer nøje, om du reelt er egnet til at håndtere
          self-custody af Bitcoin. Hvis du er for ung, for gammel, eller af andre grunde ikke har
          de nødvendige forudsætninger – fx kognitiv svækkelse eller tekniske begrænsninger –
          vil du blive afvist, men med mulighed for undervisning og støtte, indtil du er klar.
          <br />
          <br />
          Ægte ejerskab kræver ægte ansvar. Der findes ingen garantiordning, hotline eller hjælpelinje
          at ringe til, hvis noget går galt. Bitcoin giver dig fuld kontrol – og fuldt ansvar.
        </p>
      </div>

      <div className={styles.footerLinks}>
        {['Kontakt', 'Disclaimer', 'Privatliv', 'Vilkår'].map((section) => (
          <p
            key={section}
            onClick={() => setActiveSection(activeSection === section ? null : section)}
            className={`${styles.footerLink} ${activeSection === section ? styles.activeLink : ''}`}
          >
            {section}
          </p>
        ))}
      </div>

      {activeSection && (
        <div className={styles.footerContent}>
          {activeSection === 'Kontakt' && (
            <>
              <p>
                📬 Email:{' '}
                <a href="mailto:selvdepot@gmail.com" className={styles.footerLink}>
                  SelvDepot@gmail.com
                </a>
              </p>
              <p>
                📅 Book:{' '}
                <a
                  href="https://calendly.com/selvdepot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  calendly.com/selvdepot/30min
                </a>
              </p>
            </>
          )}
          {activeSection === 'Disclaimer' && (
            <p>
              Alt indhold på denne hjemmeside er udelukkende til generel information og udgør ikke juridisk,
              finansiel, skattemæssig eller investeringsrådgivning. MitDepot tilbyder alene undervisning
              og værktøjer til selvstændig opbevaring af Bitcoin.
            </p>
          )}
          {activeSection === 'Privatliv' && (
            <p>
              Vi indsamler ingen personlige oplysninger uden dit samtykke. Ved booking via Calendly
              håndteres dine oplysninger af dem under deres politikker. Vi bruger ikke cookies eller analytics.
            </p>
          )}
          {activeSection === 'Vilkår' && (
            <p>
              Ved brug af MitDepot accepterer du, at alt indhold er til uddannelsesmæssige formål.
              Vi tilbyder ikke investering, skatte- eller juridisk rådgivning. Dansk lovgivning er gældende.
            </p>
          )}
        </div>
      )}
      {activeSection === 'Pitch' && showPitch && (
        <div className={styles.pitchSection}>
          <button onClick={handleClosePitch} className={styles.closeButton}>
            Luk
          </button>
          <div className={styles.pitchContent}>
            <h2>{pitchContent[currentPitchPage].title}</h2>
            {pitchContent[currentPitchPage].content}
            <div className={styles.pitchNavigation}>
              {currentPitchPage > 0 && (
                <button onClick={handlePreviousPage} className={`${styles.navButton} ${styles.prevButton}`}>
                  Forrige
                </button>
              )}
              {currentPitchPage < pitchContent.length - 1 && (
                <button onClick={handleNextPage} className={`${styles.navButton} ${styles.nextButton}`}>
                  Næste
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {showPasswordModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Indtast adgangskode</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={styles.passwordInput}
                placeholder="Indtast kode"
              />
              <div>
                <button type="submit" className={styles.confirmButton}>
                  Bekræft
                </button>
                <button type="button" onClick={handleClosePasswordModal} className={styles.cancelButton}>
                  Annuller
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDownloadModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Download Gratis PDF'er</h3>
            <p>Her kan du downloade vores forberedelsesmaterialer:</p>
            <ul className={styles.downloadList}>
              {pdfUrls.length > 0 ? (
                pdfUrls.map((url, index) => (
                  <li key={index}>
                    <a href={url} download className={styles.downloadButton}>
                      {['MitDepot Gendannelses Ark', 'MitDepot AntiScam', 'MitDepot One Pager'][index]}
                    </a>
                  </li>
                ))
              ) : (
                <li>No links available</li>
              )}
            </ul>
            <button onClick={handleCloseDownloadModal} className={styles.cancelButton}>
              Luk
            </button>
          </div>
        </div>
      )}
    </main>
  );
}