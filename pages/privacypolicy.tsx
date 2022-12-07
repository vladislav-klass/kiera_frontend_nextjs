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

const PrivacyPolicy = () => {
  return (
    <>
      <div className="mt-8 flex flex-col justify-between max-w-lg p-3 m-auto w-200 ">
        <div className="flex justify-center">
          <div className="mt-8 mb-8">
            <p><strong>Datenschutzerklärung</strong></p>
            <p>In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung dieser Website.</p>
            <p><strong>Verantwortlicher</strong></p>
            <p>Verantwortlich für die Datenverarbeitung ist<br></br>
              <em>Vladislav Klass, Tom Doerr, Westendstr. 231, 01746502679, info@kiera.ai</em></p>
            <p><strong>Personenbezogene Daten</strong></p>
            <p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person") beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.</p>
            <p><strong>Daten beim Websiteaufruf</strong></p>
            <p>Wenn Sie diese Website nur nutzen, um sich zu informieren und keine Daten angeben, dann verarbeiten wir nur die Daten, die zur Anzeige der Website auf dem von Ihnen verwendeten internetfähigen Gerät erforderlich sind. Das sind insbesondere:</p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>jeweils übertragene Datenmenge</li>
              <li>die Website, von der die Anforderung kommt</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
            </ul>
            <p>Rechtsgrundlage für die Verarbeitung dieser Daten sind berechtigte Interessen gemäß Art. 6 Abs. 1 UAbs. 1 Buchstabe f) DSGVO, um die Darstellung der Website grundsätzlich zu ermöglichen.</p>
            <p>Darüber hinaus können Sie verschiedene Leistungen auf der Website nutzen, bei der weitere personenbezogene und nicht personenbezogene Daten verarbeitet werden.</p>
            <p><strong>Ihre Rechte</strong></p>
            <p>Als betroffene Person haben Sie folgende Rechte:</p>
            <ul>
              <li>Sie haben ein Auskunftsrecht bezüglich der Sie betreffenden personenbezogenen Daten, die der Verantwortliche verarbeitet (Art. 15 DSGVO),</li>
              <li>Sie haben das Recht auf Berichtigung der Sie betreffenden Daten, wenn diese unrichtig oder unvollständig gespeichert werden (Art. 16 DSGVO),</li>
              <li>Sie haben das Recht auf Löschung (Art. 17 DSGVO),</li>
              <li>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO),</li>
              <li>Sie haben das Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</li>
              <li>Sie haben ein Widerspruchsrecht gegen die Verarbeitung Sie betreffender personenbezogener Daten (Art. 21 DSGVO),</li>
              <li>Sie haben das Recht nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt (Art. 22 DSGVO),</li>
              <li>Sie haben das Recht, sich bei einem vermuteten Verstoß gegen das Datenschutzrecht bei der zuständigen Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist die Aufsichtsbehörde an Ihrem üblichen Aufenthaltsort, Arbeitsplatz oder am Ort des vermuteten Verstoßes.</li>
            </ul>
            <p><br></br></p>
            <p><strong>Einsatz von Cookies&nbsp;</strong></p>
            <p>Beim Besuch der Website können Cookies auf Ihrem Gerät gespeichert werden. Cookies sind kleine Textdateien, die von dem von Ihnen verwendeten Browser gespeichert werden. Cookies können keine Programme ausführen und auch keine Viren auf Ihr Gerät übertragen. Die Stelle, die den Cookie setzt, kann darüber jedoch bestimmte Informationen erhalten. Cookies dienen dazu, das Internetangebot benutzerfreundlicher zu machen. Mithilfe von Cookies kann beispielsweise das Gerät, mit dem diese Website aufgerufen wurde, bei einem erneuten Aufruf erkannt werden.</p>
            <p>Durch die Browsereinstellungen lässt sich das Setzen von Cookies einschränken oder verhindern. So kann z. B. nur die Annahme von Cookies, die von Drittanbietern stammen, blockiert werden oder aber auch die Annahme von allen Cookies. Durch das Blockieren sind jedoch möglicherweise nicht mehr alle Funktionen dieser Website nutzbar. Im weiteren Text dieser Datenschutzerklärung informieren wir Sie konkret, an welchen Stellen und zu welchen Zwecken Cookies auf den Seiten zum Einsatz kommen.</p>
            <p>Quelle: <a href="https://www.anwalt.de/vorlage/muster-datenschutzerklaerung.php" rel="nofollow">Muster-Datenschutzerklärung von anwalt.de</a></p>

          </div >
        </div >
      </div >
    </>
  );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default PrivacyPolicy;
