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

            <h1><strong>Privacy Policy of Kiera</strong></h1>
            <p>Kiera.ai collects some Personal Data from its Users.</p>
            <p>This document can be printed for reference by using the print command in the settings of any browser.</p>
            <h2><strong>Owner and Data Controller</strong></h2>
            <p>Kiera</p>
            <p><strong>Owner contact email:</strong> stefan.m.frisch@gmail.com</p>
            <h2><strong>Types of Data collected</strong></h2>
            <p>Among the types of Personal Data that Kiera collects, by itself or through third parties, there are: device
              information; Usage Data; email address; Data communicated while using the service; various types of Data; first
              name; last name; gender; date of birth; phone number; profession; country; state; county; User ID; username;
              password; company name; fax number; ZIP/Postal code; city; picture; prefix profile picture; workplace; website;
              budget; academic background; number of employees; billing address; house number; language; mouse movements; motion
              sensor events; Data communicated in order to use the Service; scroll position; keypress events; touch events;
              geographic position; payment info; purchase history; shipping address.</p>
            <p>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy
              policy or by specific explanation texts displayed prior to the Data collection.</p>
            <p>Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using
              Kiera.</p>
            <p>Unless specified otherwise, all Data requested by Kiera is mandatory and failure to provide this Data may make it
              impossible for Kiera to provide its services. In cases where Kiera specifically states that some Data is not
              mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning
              of the Service.</p>
            <p>Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.</p>
            <p>Any use of Cookies or of other tracking tools by Kiera or by the owners of third-party services used by Kiera serves
              the purpose of providing the Service required by the User, in addition to any other purposes described in the
              present document and in the Cookie Policy, if available.</p>
            <p>Users are responsible for any third-party Personal Data obtained, published or shared through Kiera and confirm that
              they have the third party's consent to provide the Data to the Owner.</p>
            <h2><strong>Mode and place of processing the Data</strong></h2>
            <h3><strong>Methods of processing</strong></h3>
            <p>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or
              unauthorized destruction of the Data.</p>
            <p>The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and
              modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may beaccessible
              to certain types of persons in charge, involved with the operation of Kiera (administration, sales, marketing,
              legal, system administration) or external parties (such as third-party technical service providers, mail carriers,
              hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner.
              The updated list of these parties may be requested from the Owner at any time.</p>
            <h3><strong>Legal basis of processing</strong></h3>
            <p>The Owner may process Personal Data relating to Users if one of the following applies:</p>
            <ul>
              <li>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be
                allowed to process Personal Data until the User objects to such processing ("opt-out"), without
                having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the
                processing of Personal Data is subject to European data protection law;</li>
              <li>provision of Data is necessary for the performance of an agreement withthe User and/or for any pre-contractual
                obligations thereof;</li>
              <li>processing is necessary for compliance with a legal obligation to whichthe Owner is subject;</li>
              <li>processing is related to a task that is carried out in the public interest or in the exercise of official authority
                vested in the Owner;</li>
              <li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li>
            </ul>
            <p>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in
              particular whether the provisionof Personal Data is a statutory or contractual requirement, or a requirement
              necessary to enter into a contract.</p>
            <h3><strong>Place</strong></h3>
            <p>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the
              processing are located.</p>
            <p>Depending on the User's location, data transfers may involve transferring the User's Data to a country other than
              their own. To find out more aboutthe place of processing of such transferred Data, Users can check the section
              containing details about the processing of Personal Data.</p>
            <p>Users are also entitled to learn about the legal basis of Data transfersto a country outside the European Union or to
              any international organization governed by public international law or set up by two or more countries,such as the
              UN, and about the security measures taken by the Owner to safeguard their Data.</p>
            <p>If any such transfer takes place, Users can find out more by checking the relevant sections of this document or
              inquire with the Owner using the information provided in the contact section.</p>
            <h3><strong>Retention time</strong></h3>
            <p>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.</p>
            <p>Therefore:</p>
            <ul>
              <li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User
                shall be retained until such contract has been fully performed.</li>
              <li>Personal Data collected for the purposes of the Owner's legitimate interests shall be retained as long as
                needed to fulfill such purposes.Users may find specific information regarding the legitimate interests pursued by
                the Owner within the relevant sections of this document or by contacting the Owner.</li>
            </ul>
            <p>The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such
              processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data
              for a longer period whenever required to do so for the performance of a legal obligation or upon order of an
              authority.</p>
            <p>Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to
              erasure, the right to rectificationand the right to data portability cannot be enforced after expiration of the
              retention period.</p>
            <h2><strong>The purposes of processing</strong></h2>
            <p>The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal
              obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third
              parties), detect any malicious or fraudulent activity, as well as the following: Access to third-party accounts,
              Collection of privacy-related preferences, Data transfer outside the EU, Hosting and backend infrastructure,
              Contacting the User, Registration and authentication provided directly by Kiera, SPAM protection, Social features,
              Location-based interactions, Handling payments, improvement of prediction (training data gathering), and Data
              transfer outside of the UK.</p>
            <p>For specific information about the Personal Data used for each purpose, the User may refer to the section
              "Detailed information on the processing of Personal Data".</p>
            <h2><strong>Detailed information on the processing of Personal Data</strong></h2>
            <p>Personal Data is collected for the following purposes and using the following services:</p>
            <p><strong> </strong><strong>Access to third-party accounts</strong></p>
            <p>This type of service allows Kiera to access Data from your account on a third-party service and perform actions with
              it. These services are not activated automatically, but require explicit authorization by the User.</p>
            <p>GitHub account access (GitHub Inc.)</p>
            <p>This service allows Kiera to connect with the User's account on GitHub, provided by GitHub Inc.</p>
            <p>Personal Data processed: device information; email address; Usage Data.</p>
            <p>Place of processing: United States - Privacy Policy.</p>
            <p><strong>Contacting the User</strong></p>
            <p>Contact form (Kiera)</p>
            <p>By filling in the contact form with their Data, the User authorizes Kiera to use these details to reply to requests
              for information, quotes or any other kind of request as indicated by the form's header.</p>
            <p>Personal Data processed: country; county; date of birth; email address; first name; gender; last name; phone number;
              physical address; profession; state; Usage Data; User ID.</p>
            <p><strong>Data transfer outside of the UK</strong></p>
            <p>The Owner is allowed to transfer Personal Data collected within the UK to third countries only subject to specific
              legal requirements (so-called "restricted transfers"). Restricted transfers may take place according to
              theconditions specified below. Users can enquire with the Owner to learn which legal basis applies to which specific
              service. Data transfers according to a UK adequacy regulation (Kiera). If this is the legal basis, the transfer of
              Personal Data from the UK to third countries may take place according to a so called "adequacy
              regulation" of the UK Government. The UK Government adopts adequacy regulations for specific countries or
              territories whenever such countries or territories guarantee Personal Data protection standards comparable to those
              set forth by UK data protection legislation. Users can find an updated list of all adequacy regulations on the
              website of the Information Commissioner's Office (ICO).</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Data transfer abroad based on standard contractual clauses (UK) (Kiera)</strong></p>
            <p>If this is the legal basis, the transfer of Personal Data from the UK tothird countries is carried out by the Owner
              according to "standardcontractual clauses" provided by the European Commission. This means that Data
              recipients have committed to process Personal Data in compliance with the data protection standards set forth by EU
              data protection legislation, which are recognized as valid also under UK law. For further information, Users are
              requested to contact the Owner through the contact detailsprovided in the present document.</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Data transfer abroad based on consent (UK) (Kiera)</strong></p>
            <p>If this is the legal basis, Personal Data of Users shall be transferred from the UK to third countries only if the
              User has explicitly consented tosuch transfer, after having been informed of the possible risks due to theabsence of
              an adequacy decision and appropriate safeguards. In such cases,the Owner shall inform Users appropriately and
              collect their explicit consent via Kiera.</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Other legal basis for Data transfer abroad (UK) (Kiera)</strong></p>
            <p>If no other legal basis applies, Personal Data shall be transferred fromthe UK to third countries only if at least
              one of the following conditionsis met: </p>
            <ul>
              <li>the transfer is necessary for the performance of a contract betweenthe User and the Owner or of pre-contractual
                measures taken at the User's request;</li>
            </ul>
            <li>the transfer is necessary for the conclusion or performance of a contract concluded in the interest of the</li>
            <li>User between the Owner and another natural or legal person;</li>
            <li>the transfer is necessary for important reasons of public interest;</li>
            <li>the transfer is necessary for establishment, exercise or defence of legal claims;</li>
            <li>the transfer is necessary in order to protect the vital interests of the data subject or of other persons,</li>
            <li>where the data subject is physically or legally incapable of giving consent;</li>
            <li>the data transferred is sourced from a public register created under UKlaw;</li>
            <li>subject to further conditions, the Owner has a compelling legitimate interest to perform a one-off</li>
            <li>transfer of Personal Data.</li>
            <p>In such cases, the Owner shall inform the User about the legal bases thetransfer is based on via Kiera.</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Data transfer outside the EU</strong></p>
            <p>The Owner is allowed to transfer Personal Data collected within the EU to third countries (i.e. any country not part
              of the EU) only pursuant to a specific legal basis. Any such Data transfer is based on one of the legal bases
              described below. Users can inquire with the Owner to learn which legalbasis applies to which specific service.</p>
            <p><strong>Data transfer to countries that guarantee European standards (Kiera)</strong></p>
            <p>If this is the legal basis, the transfer of Personal Data from the EU tothird countries is carried out according to
              an adequacy decision of the European Commission. The European Commission adopts adequacy decisions for specific
              countries whenever it considers that country to possess and provide Personal Data protection standards comparable to
              those set forth by EU dataprotection legislation. Users can find an updated list of all adequacy decisions issued on
              the European Commission's website.</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Data transfer abroad based on standard contractual clauses (Kiera)</strong></p>
            <p>If this is the legal basis, the transfer of Personal Data from the EU tothird countries is carried out by the Owner
              according to "standardcontractual clauses" provided by the European Commission. This means that Data recipients have
              committed to process Personal Data in compliance with the data protection standards set forth by EU data protection
              legislation. For further information, Users are requested to contact the Owner through the contact details provided
              in the present document.</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Other legal basis for Data transfer abroad (Kiera)</strong></p>
            <p>If no other legal basis applies, Personal Data shall be transferred fromthe EU to third countries only if at least
              one of the following conditionsis met:</p>
            <ul>
              <li>the transfer is necessary for the performance of a contract between the User and the Owner or of pre-contractual
                measures taken at the User's request;</li>
              <li>the transfer is necessary for the conclusion or performance of a contract concluded in the interest of the User
                between the Owner and another natural or legal person;</li>
              <li>the transfer is necessary for important reasons of public interest;</li>
              <li>the transfer is necessary for establishment, exercise or defence of legal claims;</li>
              <li>the transfer is necessary in order to protect the vital interests of the data subject or of other persons,</li>
              <li>where the data subject is physically or legally incapable of giving consent;</li>
              <li>the data transferred is sourced from a public register created under the law of the country that the data originates
                from;</li>
              <li>subject to further conditions, the Owner has a compelling legitimate interest to perform a one-off transfer of
                Personal Data.</li>
            </ul>
            <p>In such cases, the Owner shall inform the User about the legal bases thetransfer is based on via Kiera.</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Data transfer abroad based on consent (Kiera)</strong></p>
            <p>If this is the legal basis, Personal Data of Users shall be transferred from the EU to third countries only if the
              User has explicitly consented tosuch transfer, after having been informed of the possible risks due to theabsence of
              an adequacy decision and appropriate safeguards. In such cases,the Owner shall inform Users appropriately and
              collect their explicit consent via Kiera.</p>
            <p>Personal Data processed: various types of Data.</p>
            <p><strong>Handling payments</strong></p>
            <p>Unless otherwise specified, Kiera processes any payments by credit card,bank transfer or other means via external
              payment service providers. In general and unless where otherwise stated, Users are requested to provide their
              payment details and personal information directly to such payment service providers. Kiera isn't involved in the
              collection and processing of such information: instead, it will only receive a notification by the relevant payment
              service provider as to whether payment has been successfully completed.</p>
            <p><strong>PayPal (PayPal Inc.)</strong></p>
            <p>PayPal is a payment service provided by PayPal Inc., which allows Users to make online payments.</p>
            <p>Personal Data processed: billing address; device information; email address; first name; last name; payment info;
              phone number; purchase history; Usage Data; username; various types of Data as specified in the privacy policy of
              the service.</p>
            <p>Place of processing: See the PayPal privacy policy - Privacy Policy.</p>
            <p><strong>Amazon Payments (Amazon)</strong></p>
            <p>Amazon Payments is a payment service provided by Amazon.com, Inc., whichallows Users to make online payments using
              their Amazon credentials.</p>
            <p>Personal Data processed: billing address; device information; email address; first name; last name; payment info;
              phone number; purchase history; Usage Data; username; various types of Data as specified in the privacy policy of
              the service.</p>
            <p>Place of processing: See the Amazon privacy policy - Privacy Policy.</p>
            <p><strong>Android Pay</strong></p>
            <p>Android Pay is a payment service provided by Google LLC or by Google Ireland Limited, depending on how the Owner
              manages the Data processing, whichallows Users to make payments using their mobile phones.</p>
            <p>Personal Data processed: billing address; email address; first name; last name; payment info; phone number; purchase
              history; shipping address; Usage Data; various types of Data as specified in the privacy policy of the service.</p>
            <p>Place of processing: United States - Privacy Policy; Ireland - Privacy Policy.</p>
            <p><strong>Apple Pay (Apple Inc.)</strong></p>
            <p>Apple Pay is a payment service provided by Apple Inc., which allows Users to make payments using their mobile phones.
            </p>
            <p>Personal Data processed: billing address; email address; first name; last name; payment info; phone number; purchase
              history; shipping address; Usage Data; various types of Data as specified in the privacy policy of the service.</p>
            <p>Place of processing: United States - Privacy Policy.</p>
            <p><strong>Google Pay</strong></p>
            <p>Google Pay is a payment service provided by Google LLC or by Google Ireland Limited, depending on how the Owner
              manages the Data processing, which allows users to make online payments using their Google credentials.</p>
            <p>Personal Data processed: billing address; email address; first name; last name; payment info; phone number; purchase
              history; shipping address; Usage Data; various types of Data as specified in the privacy policy of the service.</p>
            <p>Place of processing: United States - Privacy Policy; Ireland - Privacy Policy.</p>
            <p><strong>Stripe</strong></p>
            <p>Stripe is a payment service provided by Stripe Inc, Stripe Technology Europe Ltd or by Stripe Payments Ltd, depending
              on how the Owner manages the Data processing.</p>
            <p>Personal Data processed: billing address; email address; first name; last name; payment info; purchase history; Usage
              Data; various types of Data as specified in the privacy policy of the service.</p>
            <p>Place of processing: United States - Privacy Policy; Ireland - Privacy Policy; United Kingdom
              - Privacy Policy.</p>
            <p><strong>Hosting and backend infrastructure</strong></p>
            <p>This type of service has the purpose of hosting Data and files that enable Kiera to run and be distributed as well as
              to provide a ready-made infrastructure to run specific features or parts of Kiera. Some services among those listed
              below, if any, may work through geographically distributed servers, making it difficult to determine the actual
              location where the Personal Data are stored.</p>
            <p><strong>Supabase</strong></p>
            <p>Personal Data processed: Usage Data; various types of Data as specified in the privacy policy of the service.</p>
            <p>Place of processing: See the Supabase privacy policy - Privacy Policy.</p>
            <p><strong>Location-based interactions</strong></p>
            <p>Geolocation (Kiera)</p>
            <p>Kiera may collect, use, and share User location Data in order to providelocation-based services. Most browsers and
              devices provide tools to opt out from this feature by default. If explicit authorization has been provided, the
              User's location data may be tracked by Kiera.</p>
            <p>Personal Data processed: geographic position.</p>
            <p>Non-continuous geolocation (Kiera)</p>
            <p>Kiera may collect, use, and share User location Data in order to providelocation-based services. Most browsers and
              devices provide tools to opt out from this feature by default. If explicit authorization has been provided, the
              User's location data may be tracked by Kiera. The geographic location of the User is determined in a manner
              that isn't continuous, either at the specific request of the User or when the User doesn't point out its current
              location in the appropriate field and allows the application to detect the position automatically.</p>
            <p>Personal Data processed: geographic position.</p>
            <p><strong>Registration and authentication provided directly by Kiera</strong></p>
            <p>By registering or authenticating, Users allow Kiera to identify them andgive them access to dedicated services. The
              Personal Data is collected andstored for registration or identification purposes only. The Data collected are only
              those necessary for the provision of the service requested by the Users.</p>
            <p>Direct registration (Kiera)</p>
            <p>The User registers by filling out the registration form and providing the Personal Data directly to Kiera.</p>
            <p>Personal Data processed: academic background; billing address; budget; city; company name; country; county; date of
              birth; email address; fax number; first name; gender; house number; language; last name; number of employees;
              password; phone number; physical address; picture; prefix profession; profile picture; state; Usage Data; User ID;
              username; various types of Data; website; workplace; ZIP/Postal code.</p>
            <p><strong>SPAM protection</strong></p>
            <p>This type of service analyzes the traffic of Kiera, potentially containing Users' Personal Data, with the purpose of
              filtering it from parts of traffic, messages and content that are recognized as SPAM.</p>
            <p><strong>hCaptcha (Intuition Machines, Inc)</strong></p>
            <p>hCaptcha is a SPAM protection service provided by Intuition Machines, Inc.</p>
            <p>Personal Data processed: Data communicated in order to use the Service; keypress events; motion sensor events; mouse
              movements; scroll position; touch events; Usage Data.</p>
            <p>Place of processing: United States - Privacy Policy.</p>
            <h2><strong>Further information about the processing of Personal Data</strong></h2>
            <p><strong>Analysis and predictions based on the User's Data ("profiling")</strong></p>
            <p>The Owner may use the Personal and Usage Data collected through Kiera tocreate or update User profiles. This type of
              Data processing allows the Owner to evaluate User choices, preferences and behaviour for the purposes outlined in
              the respective section of this document. User profiles can also be created through the use of automated tools like
              algorithms, which can also be provided by third parties. To find out more about the profiling activities performed,
              Users can check the relevant sections of this document. TheUser always has a right to object to this kind of
              profiling activity. To find out more about the User's rights and how to exercise them, the User is invited to
              consult the section of this document outlining the rights of theUser.</p>
            <p><strong>Automated decision-making</strong></p>
            <p>Automated decision-making means that a decision which is likely to have legal effects or similarly significant
              effects on the User, is taken solelyby technological means, without any human intervention. <u>Kiera</u> may use the
              User's Personal Data to make decisions entirely or partially based on automated processes according to the purposes
              outlined in this document. Kiera adopts automated decision-making processes as far as necessary to enter into or
              perform a contract between User and Owner, or on the basis of the User's explicit consent, where such
              consent is required by the law. Automated decisions are made by technological means - mostly based on
              algorithms subject to predefined criteria - which may also beprovided by third parties. The rationale behind
              the automated decision making is: to enable or otherwise improve the decision-making process; to grant Users fair
              and unbiased treatment based on consistent and uniform criteria; to reduce the potential harm derived from human
              error, personal bias andthe like which may potentially lead to discrimination or imbalance in the treatment of
              individuals etc.; to reduce the risk of User's failure to meettheir obligation under a contract. To find out more
              about the purposes, the third-party services, if any, and any specific rationale for automated decisions used within
              Kiera, Users can check the relevant sections in this document. </p>
            <p><strong>Consequences of automated decision-making processes for Users and rights of Users subjected to it</strong>.
            </p>
            <p>As a consequence, Users subject to such processing, are entitled to exercise specific rights aimed at preventing or
              otherwise limiting the potential effects of the automated decisions taken. In particular, Users have the right to:
              obtain an explanation about any decision taken as a result of automated decision-making and express their point of
              view regarding this decision; challenge a decision by asking the Owner to reconsider it or take a newdecision on a
              different basis; request and obtain from the Owner human intervention on such processing. To learn more about the
              User's rightsand the means to exercise them, the User is invited to consult the sectionof this document
              relating to the rights of the User. </p>
            <p><strong>User identification via a universally unique identifier (UUID)</strong> </p>
            <p>Kiera may track Users by storing a so-called universally unique identifier (or short UUID) for analytics purposes or
              for storing Users' preferences. This identifier is generated upon installation of this Application, it persists
              between Application launches and updates, but it is lost when the User deletes the Application. A reinstall
              generates a new UUID.</p>
            <p><strong>Browser Fingerprinting</strong></p>
            <p>Browser Fingerprinting creates an identifier based on a device's unique combination of characteristics (e.g. IP
              address, HTTP header, browser properties etc.), that allows to distinguish the User from other Users, thereby
              enabling to track the User's browsing behavior across the web. Browser Fingerprinting does not have an expiration
              date and cannot be deleted.</p>
            <p><strong>Preference Cookies</strong></p>
            <p>Preference Cookies store the User preferences detected on Kiera in the local domain such as, for example, their
              timezone and region. </p>
            <p><strong>The Service is intended for adults</strong> </p>
            <p>Users declare themselves to be adult according to their applicable legislation. Minors may not use Kiera.</p>
            <p><strong>localStorage</strong></p>
            <p>localStorage allows Kiera to store and access data right in the User's browser with no expiration date.</p>
            <p><strong>Selling goods and services online</strong> </p>
            <p>The Personal Data collected are used to provide the User with services or to sell goods, including payment and
              possible delivery. The Personal Datacollected to complete the payment may include the credit card, the bank account
              used for the transfer, or any other means of payment envisaged. The kind of Data collected by Kiera depends on the
              payment system used.</p>
            <p><strong>Personal Data collected through sources other than the User</strong></p>
            <p>The Owner of Kiera may have legitimately collected Personal Data relating to Users without their knowledge by reusing
              or sourcing them from third parties on the grounds mentioned in the section specifying the legal basis of
              processing. Where the Owner has collected Personal Data in such a manner,Users may find specific information
              regarding the source within the relevant sections of this document or by contacting the Owner.</p>
            <p><strong>Pseudonymous use</strong></p>
            <p>When registering for Kiera, Users have the option to indicate a nicknameor pseudonym. In this case, Users' Personal
              Data shall not be published ormade publicly available. Any activity performed by Users on Kiera shall appear in
              connection with the indicated nickname or pseudonym. However, Usersacknowledge and accept that their activity on
              Kiera, including content, information or any other material possibly uploaded or shared on a voluntary and
              intentional basis may directly or indirectly reveal their identity.</p>
            <p><strong>Equal protection of User Data</strong></p>
            <p>Kiera shares User Data only with third parties carefully selected to ensure that they provide the same or equal
              protection of User Data as stated in this privacy policy and requested by applicable data protection laws. Further
              information on data processing and privacy practices by third parties can be found in their respective privacy
              policies.</p>
            <h2><strong>The rights of Users</strong></h2>
            <p>Users may exercise certain rights regarding their Data processed by the Owner.</p>
            <p>In particular, Users have the right to do the following:</p>
            <ul>
              <li><strong>Withdraw their consent at any time.</strong> Users have theright to withdraw consent where they have
                previously given their consent to the processing of their Personal Data.</li>
            <li><strong>Object to processing of their Data.</strong> Users have the right to object to the processing of their Data
              if the processing is carried out on a legal basis other than consent. Further details are provided in thededicated
              section below.</li>
            <li><strong>Access their Data.</strong> Users have the right to learn if Data is being processed by the Owner, obtain
              disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.</li>
            <li><strong>Verify and seek rectification.</strong> Users have the right toverify the accuracy of their Data and ask for
              it to be updated or corrected.</li>
            <li><strong>Restrict the processing of their Data.</strong> Users have the right, under certain circumstances, to
              restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other
              than storing it.</li>
            <li><strong>Have their Personal Data deleted or otherwise removed.</strong>Users have the right, under certain
              circumstances, to obtain the erasure of their Data from the Owner.</li>
            <li><strong>Receive their Data and have it transferred to another controller.</strong> Users have the right to receive
              their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it
              transmitted to another controller without any hindrance. This provision is applicable provided that the Data is
              processed by automated means and that the processing is based on the User's consent, on a contract which theUser is
              part of or on pre-contractual obligations thereof.</li>
            <li><strong>Lodge a complaint.</strong> Users have the right to bring a claim before their competent data protection
              authority.</li>
          </ul>
          <h3><strong>Details about the right to object to processing</strong></h3>
          <p>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner
            or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processingby
            providing a ground related to their particular situation to justify the objection.</p>
          <p>Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object
            to that processing at any time without providing any justification. To learn, whether the Owner is processing
            Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.</p>
          <h3><strong>How to exercise these rights</strong></h3>
          <p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this
            document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and
            always within one month.</p>
          <h2><strong>Additional information about Data collection and processing</strong></h2>
          <h3><strong>Legal action</strong></h3>
          <p>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible
            legal action arising from improper use of Kiera or the related Services.</p>
          <p>The User declares to be aware that the Owner may be required to reveal personal data upon request of public
            authorities.</p>
          <h3><strong>Additional information about User's Personal Data</strong></h3>
          <p>In addition to the information contained in this privacy policy, Kiera may provide the User with additional and
            contextual information concerning particular Services or the collection and processing of Personal Data upon
            request.</p>
          <h3><strong>System logs and maintenance</strong></h3>
          <p>For operation and maintenance purposes, Kiera and any third-party services may collect files that record interaction
            with Kiera (System logs) use other Personal Data (such as the IP Address) for this purpose.</p>
          <h3><strong>Information not contained in this policy</strong></h3>
          <p>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time.
            Please see the contact information at the beginning of this document.</p>
          <h3><strong>How "Do Not Track" requests are handled</strong></h3>
          <p>Kiera does not support "Do Not Track" requests.</p>
          <p>To determine whether any of the third-party services it uses honor the "Do Not Track" requests,
            please read their privacy policies.</p>
          <h3><strong>Changes to this privacy policy</strong></h3>
          <p>The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page
            and possibly within Kiera and/or - as far as technically and legally feasible - sending a notice to Users via any
            contact information available to the Owner. It is strongly recommended to check this page often, referring to the
            date of the last modification listed at the bottom.</p>
          <p>Should the changes affect processing activities performed on the basis of the User's consent, the Owner shall
            collect new consent from the User, where required.</p>
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
