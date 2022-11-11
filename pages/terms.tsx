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

const Terms = () => {
  return (
    <>
      <div className="mt-8 flex flex-col justify-between max-w-lg p-3 m-auto w-200 ">
        <div className="flex justify-center">
          <div className="mt-8 mb-8">

            <h1><strong>Terms and Conditions of Kiera</strong></h1>
            <p>These Terms govern</p>
            <ul>
                <li>the use of this Application, and,</li>
            <li>any other related Agreement or legal relationship with the Owner</li>
            </ul>
            <p>in a legally binding way. Capitalized words are defined in the relevant dedicated section of this document.</p>
            <p>The User must read this document carefully.</p>
            <p>Nothing in these Terms creates any relationship of employment, agency, or partnership between the involved parties.
            </p>
            <p>This Application is provided by:</p>
            <p>Kiera</p>
            <p><strong>Owner contact email:</strong> <u>stefan.m.frisch@gmail.com</u> (ToDo)</p>
            <h2><strong>Information about this Application</strong></h2>
            <p>You describe in natural language what the shell is should do. Kiera suggests you a command that might solve the task.
            </p>
            <h2><strong>What the User should know at a glance</strong></h2>
            <ul>
                <li>Please note that some provisions in these Terms may only apply to certain categories of Users. In particular,
                    certain provisions may only apply to Consumers or to those Users that do not qualify as Consumers. Such
                    limitations are always explicitly mentioned within each affected clause. In the absence of any such mention,
                    clauses apply to all Users.</li>
                <li>The right of withdrawal only applies to European Consumers. The right of withdrawal, also commonly called the
                    right of cancellation in the UK,is consistently referred to as "the right of withdrawal" within
                    this document.</li>
            </ul>
            <p></p>
            <h2><strong>TERMS OF USE</strong></h2>
            <p>Unless otherwise specified, the terms of use detailed in this section apply generally when using this Application.
            </p>
            <p>Single or additional conditions of use or access may apply in specific scenarios and in such cases are additionally
                indicated within this document.</p>
            <p>By using this Application, Users confirm to meet the following requirements:</p>
            <ul>
                <li>There are no restrictions for Users in terms of being Consumers or Business Users.</li>
            </ul>
            <h3><strong>Account registration</strong></h3>
            <p>To use the Service Users must register or create a User account, providing all required data or information in a
                complete and truthful manner.</p>
            <p>Failure to do so will cause unavailability of the Service.</p>
            <p>Users are responsible for keeping their login credentials confidential and safe. For this reason, Users are also
                required to choose passwords that meet the highest standards of strength permitted by this Application.</p>
            <p>By registering, Users agree to be fully responsible for all activities that occur under their username and password.
            </p>
            <p>Users are required to immediately and unambiguously inform the Owner viathe contact details indicated in this
                document, if they think their personal information, including but not limited to User accounts, access credentials
                or personal data, have been violated, unduly disclosed or stolen.</p>
            <h4><strong>Account termination</strong></h4>
            <p>Users can terminate their account and stop using the Service at any timeby doing the following:</p>
            <ul>
                <li>By directly contacting the Owner at the contact details provided inthis document.</li>
            </ul>
            <h4><strong>Account suspension and deletion</strong></h4>
            <p>The Owner reserves the right, at its sole discretion, to suspend or delete at any time and without notice, User
                accounts which it deems inappropriate, offensive or in violation of these Terms.</p>
            <p>The suspension or deletion of User accounts shall not entitle Users to any claims for compensation, damages or
                reimbursement.</p>
            <p>The suspension or deletion of accounts due to causes attributable to theUser does not exempt the User from paying any
                applicable fees or prices.</p>
            <h3><strong>Content on this Application</strong></h3>
            <p>Unless where otherwise specified or clearly recognizable, all content available on this Application is owned or
                provided by the Owner or its licensors.</p>
            <p>The Owner undertakes its utmost effort to ensure that the content provided on this Application infringes no
                applicable legal provisions or third-party rights. However, it may not always be possible to achieve such a result.
            </p>
            <p>In such cases, without prejudice to any legal prerogatives of Users to enforce their rights, Users are kindly asked
                to preferably report related complaints using the contact details provided in this document.</p>
            <p>The commands Kiera returns to you are called <strong>Suggestions </strong>and are not part of the content of the
                Application. The <strong>suggestions</strong> are transferred into the ownership of the users. The user can do with
                them as he sees fit. This includes altering, appending, sharing, saving, running, and a combination of those.</p>
            <h4><strong>Rights regarding content on this Application - All rights reserved</strong></h4>
            <p>The Owner holds and reserves all intellectual property rights for any such content.</p>
            <p>Users may not therefore use such content in any way that is not necessary or implicit in the proper use of the
                Service.</p>
            <p>In particular, but without limitation, Users may not copy, download, share (beyond the limits set forth below),
                modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer/assign to third parties or create
                derivative works from the content available on this Application, nor allow any third party to do so through the User
                or their device, even without the User's knowledge.</p>
            <p>Where explicitly stated on this Application, the User may download, copyand/or share some content available through
                this Application for its sole personal and non-commercial use and provided that the copyright attributions and all
                the other attributions requested by the Owner are correctly implemented.</p>
            <p>Any applicable statutory limitation or exception to copyright shall stayunaffected.</p>
            <h3><strong>Content provided by Users</strong></h3>
            <p>The Owner allows Users to input natural language into Kiera which is then part of the content. Part of the input from
                the user is the not explicitly provided information about the shell, the shells current state and the computer of
                the user. This information is implicitly gathered by Kiera to improve the Suggestions and this information is also
                part of the user input.</p>
            <p>By providing content to this Application, Users confirm that they are legally allowed to do so and that they are not
                infringing any statutory provisions and/or third-party rights.</p>
            <p>Further insights regarding acceptable content can be found inside the section of these Terms which detail the
                acceptable uses.</p>
            <p>Users acknowledge and accept that by providing their own content to thisApplication they grant the Owner a
                non-exclusive, worldwide, fully paid-upand royalty-free, irrevocable, perpetual (or for the entire protection term),
                sub-licensable and transferable license to use, access, store, reproduce, modify, distribute, publish, process into
                derivative works, broadcast, stream, transmit or otherwise exploit such content to provide and promote its Service
                in any media or manner.</p>
            <p>To the extent permitted by applicable law, Users waive any moral rights in connection with content they provide to
                this Application.</p>
            <p>Users acknowledge, accept and confirm that all content they provide through this Application is provided subject to
                the same general conditions setforth for content on this Application.</p>
            <h4><strong>Liability for provided content</strong></h4>
            <p>Users are solely liable for any content provide through this Application. Users acknowledge and accept that
                <strong>the Owner does not filter or moderate such content</strong>.</p>
            <p>However, the Owner reserves the right to remove, delete, block or rectify such content at its own discretion and to,
                without prior notice, deny theuploading User access to this Application:</p>
            <ul>
                <li>if any complaint based on such content is received;</li>
            <li>if a notice of infringement of intellectual property rights is received;</li>
            <li>upon order of a public authority; or</li>
            <li>where the Owner is made aware that the content, while being accessible via this Application, may represent a risk
                for Users, third parties and/or the availability of the Service.</li>
            </ul>
            <p>The removal, deletion, blocking or rectification of content shall not entitle Users that have provided such content
                or that are liable for it, to any claims for compensation, damages or reimbursement.</p>
            <p>Users agree to hold the Owner harmless from and against any claim asserted and/or damage suffered due to content they
                provided to or provided through this Application.</p>
            <h3><strong>Access to external resources</strong></h3>
            <p>Through this Application Users may have access to external resources provided by third parties. Users acknowledge and
                accept that the Owner has no control over such resources and is therefore not responsible for their content and
                availability.</p>
            <p>Conditions applicable to any resources provided by third parties, including those applicable to any possible grant of
                rights in content, result from each such third parties' terms and conditions or, in the absence of those,
                applicable statutory law.</p>
            <p>Currently we are working with OpenAI so the content provided by the Usermust comply with their policies.</p>
            <h3><strong>Acceptable use</strong></h3>
            <p>This Application and the Service may only be used within the scope of what they are provided for, under these Terms
                and applicable law.</p>
            <p>Users are solely responsible for making sure that their use of this Application and/or the Service violates no
                applicable law, regulations or third-party rights.</p>
            <p>Therefore, the Owner reserves the right to take any appropriate measure to protect its legitimate interests including
                denying Users access to this Application or the Service, terminating contracts, reporting any misconductperformed
                through this Application or the Service to the competent authorities - such as judicial or administrative
                authorities - whenever Users are suspected to be in violation of any laws, regulations, third-party rights and/or
                these Terms, including, but not limited to, by engaging in any of the following activities:</p>
            <h4><strong>Conduct restrictions</strong></h4>
            <ul>
                <li>pretending to fulfill any possible condition or requirements for accessing this Application and/or using the
                    Services, such as for instance being adult according to law or qualifying as a Consumer.</li>
            <li>concealing their identity or stealing someone else's identity or pretend to be or represent a third-party, if not
                allowed to do so by such third-party.</li>
            <li>manipulating identifiers to disguise or otherwise conceal the origin oftheir queries to our Servers.</li>
            <li>defaming, abusing, harassing, using threatening practices, threatening or violating the legal rights of others in
                any other way;</li>
            <li>promoting activity that may endanger the User's life or the life of any other User or lead to physical harm.
                This includes but is not limited to suicide threats or instigations, intentional physical trauma, the use of illegal
                drugs, or excessive drinking. Under no circumstance is any User allowed to post any content promoting and/or
                encouraging and/or showing any self-destructive or violent behavior on this Application;</li>
            <li>probing, scanning or testing the vulnerability of this Application, including the services or any network connected
                to the website, nor breaching the security or authentication measures on this Application, including the services or
                any network connected to this Application;</li>
            <li>installing, embedding, uploading or otherwise incorporating any malwareinto or via this Application;</li>
            <li>using this Application or the technical infrastructure in an abusive, excessive or otherwise inappropriate way (for
                example: for spamming purposes);</li>
            <li>attempting to disrupt or tamper with the technical infrastructure in a manner that harms or places an undue burden
                on this Application or the Service;</li>
            </ul>
            <h4><strong>Excessive use of the Service</strong></h4>
            <ul>
                <li>using a resource of this Application excessively in relation to other Users of this Application - in
                    such cases, the Owner, at its sole discretion, additionally reserves the right to suspend the
                    User'saccount or limit the related activity until the User reduces the excessiveconsumption;</li>
            </ul>
            <h4><strong>Excessive use of the API</strong></h4>
            <ul>
                <li>sending abusive or excessively frequent requests to the Service viathe API. The Owner will determine what
                    constitutes abuse or excessive usage of the API and additionally reserves the right to temporarily or
                    permanently suspend access to the API by the User. In such cases, the Owner will make a reasonable attempt to
                    alert the User prior to suspension;</li>
            </ul>
            <h4><strong>Scraping</strong></h4>
            <ul>
                <li>adopting any automated process to extract, harvest or scrape information, data and/or content from this
                    Application and all the digital properties thereto related unless where explicitly allowed to do so by the
                    Owner;</li>
            </ul>
            <h4><strong>Content restrictions</strong></h4>
            <ul>
                <li>Disseminatin, querying or publishing content that is unlawful, obscene, illegitimate, libelous or inappropriate;
                </li>
            <li>Querying or publishing any content that promotes, either directly or indirectly, hate, racism, discrimination,
                pornography, violence;</li>
            <li>Disseminating, querying or publishing any content that is false or may create unjustified alarm;</li>
            <li>using this Application to publish, disseminate or otherwise provide content protected by intellectual property laws,
                including but not limited to patent, trademark or copyright law, unlawfully and without the legitimate
                right-holder's consent;</li>
            <li>using this Application to publish, disseminate or otherwise make available any other content which infringes on any
                third-party rights, including but not limited to state, military, trade or professional secrets and personal data;
            </li>
            <li>publishing any content or carrying out any activity that disrupts, interrupts, harms, or otherwise violates the
                integrity of this Application or another User's experience or devices. Such activities include: spamming,
                distributing unauthorized advertisements, phishing, defrauding others, spreading malware or viruses etc.;</li>
            </ul>
            <h4><strong>User protection</strong></h4>
            <ul>
                <li>misappropriating any account in use by another User;</li>
            <li>harvesting or collecting any personally identifying information of other Users including but not limited to their
                email addresses or contact information, by circumventing the privacy setting of other Users' accounts on
                this Application or by any other means;</li>
            <li>using any information relating to other Users, including personal or contact data, for purposes other than those
                this Application is intended for;</li>
            </ul>
            <h4><strong>Commercial use restrictions</strong></h4>
            <ul>
                <li>registering or using this Application in order to promote, sell or advertise products or services of any kind in
                    any way;</li>
            <li>indicating or trying to imply in any manner, that a User stands in a qualified relationship with this Application or
                that this Application has endorsed the User, the User's products or services or any third party's products
                and services for any purpose;</li>
            </ul>
            <h3><strong>Software license</strong></h3>
            <p>Any intellectual or industrial property rights, and any other exclusive rights on software or technical applications
                embedded in or related to thisApplication are held by the Owner and/or its licensors.</p>
            <p>Subject to Users' compliance with and notwithstanding any divergent provision of these Terms, the Owner
                merely grants Users a revocable, non-exclusive, non-sublicensable and non-transferable license to use the software
                and/or any other technical means embedded in the Service within the scope and for the purposes of this Application
                and the Service offered.</p>
            <p>This license does not grant Users any rights to access, usage or disclosure of the original source code. All
                techniques, algorithms, and procedurescontained in the software and any documentation thereto related is the
                Owner's or its licensors' sole property.</p>
            <p>All rights and license grants to Users shall immediately terminate upon any termination or expiration of the
                Agreement.</p>
            <p>Without prejudice to the above, under this license Users may download, install, use and run the software on the
                permitted number of devices, provided that such devices are common and up-to-date in terms of technology and market
                standards.</p>
            <p>The Owner reserves the right to release updates, fixes and further developments of this Application and/or its
                related software and to provide themto Users for free. Users may need to download and install such updates to
                continue using this Application and/or its related software.</p>
            <p>The User may download, install, use and run the software on unlimited devices.</p>
            <p>However, it may not be permitted to run the software on more than one device at a time.</p>
            <h2><strong>TERMS AND CONDITIONS OF SALE</strong></h2>
            <h3><strong>Paid Products</strong></h3>
            <p>Some of the Products provided on this Application, as part of the Service, are provided on the basis of payment.</p>
            <p>The fees, duration and conditions applicable to the purchase of such Products are described below and in the
                dedicated sections of this Application.</p>
            <h3><strong>Product description</strong></h3>
            <p>Prices, descriptions or availability of Products are outlined in the respective sections of this Application and are
                subject to change without notice.</p>
            <p>While Products on this Application are presented with the greatest accuracy technically possible, representation on
                this Application through any means (including, as the case may be, graphic material, images, colors, sounds) is for
                reference only and implies no warranty as to the characteristics of the purchased Product.</p>
            <p>This implies in particular that the <strong>suggestions</strong> might not do the in natural language described task
                or can even have unintended side effects (e.g. deleting a file or permantly alteration) when it is run. For that
                reason we advise the user to take upmost care what he does with thesuggestions.</p>
            <p>The characteristics of the chosen Product will be outlined during the purchasing process.</p>
            <h3><strong>Purchasing process</strong></h3>
            <p>Any steps taken from choosing a Product to order submission form part ofthe purchasing process.</p>
            <p>The purchasing process includes these steps:</p>
            <ul>
                <li>Users must choose the desired Product and verify their purchase selection.</li>
            <li>After having reviewed the information displayed in the purchase selection, Users may place the order by submitting
                it.</li>
            </ul>
            <h3><strong>Order submission</strong></h3>
            <p>When the User submits an order, the following applies:</p>
            <ul>
                <li>The submission of an order determines contract conclusion and therefore creates for the User the obligation to
                    pay the price, taxes and possible further fees and expenses, as specified on the order page.</li>
            <li>In case the purchased Product requires active input from the User, suchas the provision of personal information or
                data, specifications or special wishes, the order submission creates an obligation for the User to cooperate
                accordingly.</li>
            <li>Upon submission of the order, Users will receive a receipt confirming that the order has been received.</li>
            </ul>
            <p>All notifications related to the described purchasing process shall be sent to the email address provided by the User
                for such purposes.</p>
            <h3><strong>Prices</strong></h3>
            <p>Users are informed during the purchasing process and before order submission, about any fees, taxes and costs
                (including, if any, delivery costs) that they will be charged.</p>
            <p>Prices on this Application are displayed:</p>
            <ul>
                <li>either exclusive or inclusive of any applicable fees, taxes and costs, depending on the section the User is
                    browsing.</li>
            </ul>
            <h3><strong>Methods of payment</strong></h3>
            <p>Information related to accepted payment methods are made available during the purchasing process.</p>
            <p>Some payment methods may only be available subject to additional conditions or fees. In such cases related
                information can be found in the dedicated section of this Application.</p>
            <p>All payments are independently processed through third-party services. Therefore, this Application does not collect
                any payment information - such as credit card details - but only receives a notification once the
                payment has been successfully completed.</p>
            <p>If a payment through the available methods fails or is refused by the payment service provider, the Owner shall be
                under no obligation to fulfill the purchase order. Any possible costs or fees resulting from the failed or refused
                payment shall be borne by the User.</p>
            <h3><strong>Authorization for future PayPal payment</strong></h3>
            <p>If Users authorize the PayPal feature which allows future purchases, this Application will store an identification
                code linked to the Users' PayPal account. This will authorize this Application to automatically process
                payments for future purchases or recurring installments of past purchases.</p>
            <p>This authorization can be revoked at any time, either by contacting the Owner or by changing the user settings
                offered by PayPal.</p>
            <h3><strong>Retention of usage rights</strong></h3>
            <p>Users do not acquire any rights to use the purchased Product until the total purchase price is received by the Owner.
            </p>
            <h3><strong>Delivery</strong></h3>
            <h4><strong>Performance of services</strong></h4>
            <p>The purchased service shall be performed or made available within the timeframe specified on this Application or as
                communicated before the order submission.</p>
            <h3><strong>Contract duration</strong></h3>
            <h4><strong>Subscriptions</strong></h4>
            <p>Subscriptions allow Users to receive a Product continuously or regularlyover time. Details regarding the type of
                subscription and termination are outlined below.</p>
            <h4><strong>Open-ended subscriptions</strong></h4>
            <p>Paid subscriptions begin on the day the payment is received by the Owner.</p>
            <p>In order to maintain subscriptions, Users must pay the required recurring fee in a timely manner. Failure to do so
                may cause service interruptions.</p>
            <h4><strong>Termination of open-ended subscriptions</strong></h4>
            <p><strong>Open-ended subscriptions may be terminated at any time by sending a clear and unambiguous termination notice
                    to the Owner using the contactdetails provided in this document, or - if applicable - byusing
                    the corresponding controls inside this Application.</strong></p>
            <p><strong>Terminations shall take effect 2 days after the notice of termination has been received by the
                    Owner.</strong></p>
            <h2><strong>User rights</strong></h2>
            <h3><strong>Right of withdrawal</strong></h3>
            <p>Unless exceptions apply, the User may be eligible to withdraw from the contract within the period specified below
                (generally 14 days), for any reason and without justification. Users can learn more about the withdrawal conditions
                within this section.</p>
            <h4><strong>Who the right of withdrawal applies to</strong></h4>
            <p>Unless any applicable exception is mentioned below, Users who are European Consumers are granted a statutory
                cancellation right under EU rules, to withdraw from contracts entered into online (distance contracts) within
                thespecified period applicable to their case, for any reason and without justification.</p>
            <p>Users that do not fit this qualification, cannot benefit from the rightsdescribed in this section.</p>
            <h4><strong>Exercising the right of withdrawal</strong></h4>
            <p>To exercise their right of withdrawal, Users must send to the Owner an unequivocal statement of their intention to
                withdraw from the contract.</p>
            <p>To this end, Users may send an email to the Owner unequivocal stating the withdrawal. Users are, however, free to
                express their intention to withdraw from the contract by making an unequivocal statement in any other suitable way.
                In order to meet the deadline within which they can exercise such right, Users must send the withdrawal notice
                before the withdrawal period expires.</p>
            <p>When does the withdrawal period expire?</p>
            <ul>
                <li><strong>Regarding the purchase of a service</strong>, the withdrawal period expires 14 days after the day that
                    the contract is entered into, unless the User has waived the withdrawal right.</li>
            </ul>
            <h4><strong>Effects of withdrawal</strong></h4>
            <p>Users who correctly withdraw from a contract will be reimbursed by the Owner for all payments made to the Owner,
                including, if any, those covering the costs of delivery.</p>
            <p>However, any additional costs resulting from the choice of a particular delivery method other than the least
                expensive type of standard delivery offered by the Owner, will not be reimbursed.</p>
            <p>Such reimbursement shall be made without undue delay and, in any event, no later than 14 days from the day on which
                the Owner is informed of the User's decision to withdraw from the contract. Unless otherwise agreed with the
                User, reimbursements will be made using the same means of payment as used to process the initial transaction. In any
                event, the User shall not incur any costs or fees as a result of such reimbursement.</p>
            <h5><strong>...on the purchase of services</strong></h5>
            <p>Where a User exercises the right of withdrawal after having requested that the service be performed before the
                withdrawal period expires, the User shall pay to the Owner an amount which is in proportion to the part of service
                provided.</p>
            <p>Such payment shall be calculated based on the fee contractually agreed upon, and be proportional to the part of
                service provided until the time theUser withdraws, compared with the full coverage of the contract.</p>
            <h2><strong>Liability and indemnification</strong></h2>
            <p>The <strong>Commands</strong> <strong>Kiera</strong> returns to you are called <strong>Suggestions</strong>. They
                should be treated as suggestions only. In particular, we do not claim any correctness of the suggestions. You hold
                the ownership to the suggestions, and you are solely responsible forthem. This includes running the suggestions as
                code in any form.</p>
            <h3><strong>EU Users</strong></h3>
            <h4><strong>Indemnification</strong></h4>
            <p>The User agrees to indemnify and hold the Owner and its subsidiaries, affiliates, officers, directors, agents,
                co-branders, partners and employees harmless from and against any claim or demand - including but
                not limited to lawyer's fees and costs - made by any third party due to or in relation with any
                culpable use of or connection to the Service, violation of these Terms, infringement of any third-party rights or
                statutory provision by the User or its affiliates, officers, directors, agents, co-branders, partners and employees
                to the extent allowed by applicable law.</p>
            <h4><strong>Limitation of liability</strong></h4>
            <p>Unless otherwise explicitly stated and without prejudice to applicable statutory product liability provisions, Users
                shall have no right to claim damages against the Owner (or any natural or legal person acting on its behalf).</p>
            <p>This does not apply to damages to life, health or physical integrity, damages resulting from the breach of an
                essential contractual obligation suchas any obligation strictly necessary to achieve the purpose of the contract,
                and/or damages resulting from intent or gross negligence, as long as this Application has been appropriately and
                correctly used by the User.</p>
            <p>Unless damages have been caused by way of intent or gross negligence, orthey affect life, health or physical
                integrity, the Owner shall only be liable to the extent of typical and foreseeable damages at the moment the
                contract was entered into.</p>
            <p>In particular, within the limits stated above, the Owner shall not be liable for:</p>
            <ul>
                <li>any loss of business opportunities and any other loss, even indirect, that may be incurred by the User (such as,
                    but not limited to, trading losses, loss of revenue, income, profits or anticipated savings, loss of contracts
                    or business relationships, loss of reputation or goodwill, etc.);</li>
                <li>damages or losses resulting from interruptions or malfunctions of this Application due to acts of force majeure,
                    or unforeseen and unforeseeable events and, in any case, independent of the will and beyond the control of the
                    Owner, such as, but not limited to, failures or disruptions of telephone or electrical lines, the Internet and /
                    or other means of transmission, unavailability of websites, strikes, natural disasters, viruses and
                    cyberattacks, interruptions in the delivery of products, third-party services or applications;</li>
                <li>any losses that are not the direct consequence of a breach of the Terms by the Owner;</li>
                <li>any damage, prejudice or loss occurring due to viruses or other malware contained in or connected to files
                    available for download from the internet or via this Application. Users are responsible for implementing
                    sufficient security measures - such as anti-viruses and firewalls to prevent any such infection or
                    attack and for securing backup copies of all data or information exchanged via or uploaded to this Application.
                </li>
            </ul>
            <h3><strong>Australian Users</strong></h3>
            <h4><strong>Limitation of liability</strong></h4>
            <p>Nothing in these Terms excludes, restricts or modifies any guarantee, condition, warranty, right or remedy which the
                User may have under the Competition and Consumer Act 2010 (Cth) or any similar State and Territory legislation and
                which cannot be excluded, restricted or modified (non-excludable right). To the fullest extent permitted by law, our
                liability to the User, including liability for a breach of a non-excludable right and liability which is not
                otherwise excluded under these Terms of Use, is limited, at the Owner's sole discretion, to the
                re-performance of the services or the payment of the cost of having the services supplied again.</p>
            <h3><strong>US Users</strong></h3>
            <h4><strong>Disclaimer of Warranties</strong></h4>
            <p>This Application is provided strictly on an "as is" and "as available" basis.
                    Use of the Service is at Users' own risk. To the maximum extent permitted by applicable law, theOwner
                    expressly disclaims all conditions, representations, and warranties - whether express, implied,
                    statutory or otherwise, including, but not limited to, any implied warranty of merchantability, fitness for a
                    particular purpose, or non-infringement of third-party rights. No advice or information, whether oral or
                    written, obtained by user from owner or through the Service will create any warranty not expressly stated
                    herein.</p>
            <p>Without limiting the foregoing, the Owner, its subsidiaries, affiliates, licensors, officers, directors,
                    agents, co-branders, partners, suppliers and employees do not warrant that the content is accurate, reliable or
                    correct; that the Service will meet Users' requirements; that the Service will be available at any
                    particular time or location, uninterrupted or secure; that any defects or errors will be corrected; or that the
                    Service is free of viruses or other harmful components. Any content downloadedor otherwise obtained through the
                    use of the Service is downloaded at users own risk and users shall be solely responsible for any damage to
                    Users' computer system or mobile device or loss of data that results from such download or
                    Users' use of the Service.</p>
            <p>The Owner does not warrant, endorse, guarantee, or assume responsibility for any product or service
                    advertised or offered by a third party through the Service or any hyperlinked website or service, and the Owner
                    shall not be a party to or in any way monitor any transaction between Users and third-party providers of
                    products or services.</p>
            <p>The Service may become inaccessible or it may not function properly with Users' web browser, mobile
                    device, and/or operating system. The owner cannot be held liable for any perceived or actual damages arising
                    from Service content, operation, or use of this Service.</p>
            <p>Federal law, some states, and other jurisdictions, do not allow the exclusion and limitations of certain
                    implied warranties. The above exclusions may not apply to Users. This Agreement gives Users specific legal
                    rights, and Users may also have other rights which vary from state to state. The disclaimers and exclusions
                    under this agreement shall not apply to the extent prohibited by applicable law.</p>
            <h4><strong>Limitations of liability</strong></h4>
            <p>To the maximum extent permitted by applicable law, in no event shall the Owner, and its subsidiaries,
                    affiliates, officers, directors, agents, co-branders, partners, suppliers and employees be liable for
            </p>
            <ul>
                <li>any indirect, punitive, incidental, special, consequential or exemplary damages, including without
                        limitation damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or
                        relating to the use of, or inability to use, the Service; and</li>
            <li>any damage, loss or injury resulting from hacking, tampering orother unauthorized access or use of the
                    Service or User account or the information contained therein;</li>
            <li>any errors, mistakes, or inaccuracies of content;</li>
            <li>personal injury or property damage, of any nature whatsoever, resulting from User access to or use of the
                    Service;</li>
            <li>any unauthorized access to or use of the Owner's secureservers and/or any and all personal
                    information stored therein;</li>
            <li>any interruption or cessation of transmission to or from the Service;</li>
            <li>any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service;
            </li>
            <li>any errors or omissions in any content or for any loss or damage incurred as a result of the use of any
                    content posted, emailed, transmitted, or otherwise made available through the Service; and/or</li>
            <li>the defamatory, offensive, or illegal conduct of any User or third party. In no event shall the Owner, and
                    its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers and employees be
                    liable for any claims, proceedings, liabilities, obligations, damages, losses or costs in an amount exceeding
                    the amount paid by User to the Owner hereunder in the preceding 12 months, or the period of duration of this
                    agreement between the Owner and User, whichever is shorter.</li>
            </ul>
            <p>This limitation of liability section shall apply to the fullest extent permitted by law in the applicable
                    jurisdiction whether the alleged liability is based on contract, tort, negligence, strict liability, or any
                    other basis, even if company has been advised of the possibility of such damage.</p>
            <p>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, therefore
                    the above limitations or exclusions may not apply to User. The terms give User specific legal rights, and User
                    may also have other rights which vary from jurisdiction to jurisdiction. The disclaimers, exclusions, and
                    limitations of liability under the terms shall not apply to the extent prohibited by applicable law.
            </p>
            <h4><strong>Indemnification</strong></h4>
            <p>The User agrees to defend, indemnify and hold the Owner and its subsidiaries, affiliates, officers,
                    directors, agents, co-branders, partners, suppliers and employees harmless from and against any and all claims
                    or demands, damages, obligations, losses, liabilities, costs or debt, and expenses, including, but not limited
                    to, legal fees and expenses, arising from</p>
            <ul>
                <li>User's use of and access to the Service, including any data or content transmitted or received
                        by User;</li>
            <li>User's violation of these terms, including, but not limited to, User's breach of any of the
                    representations and warrantiesset forth in these terms;</li>
            <li>User's violation of any third-party rights, including, but not limited to, any right of privacy or
                    intellectual property rights;</li>
            <li>User's violation of any statutory law, rule, or regulation;</li>
            <li>any content that is submitted from User's account, including third party access with User's
                    unique username, password or other security measure, if applicable, including, but not limited to, misleading,
                    false, or inaccurate information;</li>
            <li>User's wilful misconduct; or</li>
            <li>statutory provision by User or its affiliates, officers, directors, agents, co-branders, partners, suppliers
                    and employees to the extent allowed by applicable law.</li>
            </ul >
            <h2><strong>Common provisions</strong></h2>
            <h3><strong>No Waiver</strong></h3>
            <p>The Owner's failure to assert any right or provision under theseTerms shall not constitute a waiver of any
                such right or provision. No waiver shall be considered a further or continuing waiver of such term or any other
                term.</p>
            <h3><strong>Service interruption</strong></h3>
            <p>To ensure the best possible service level, the Owner reserves the right to interrupt the Service for maintenance,
                system updates or any other changes, informing the Users appropriately.</p>
            <p>Within the limits of law, the Owner may also decide to suspend or terminate the Service altogether. If the Service is
                terminated, the Owner will cooperate with Users to enable them to withdraw Personal Data or information in
                accordance with applicable law.</p>
            <p>Additionally, the Service might not be available due to reasons outside the Owner's reasonable control, such
                as "force majeure" (eg. labor actions, infrastructural breakdowns or blackouts etc). Inparticular
                this hold for an unavailability of the OpenAi servers.</p>
            <h3><strong>Service reselling</strong></h3>
            <p>Users may not reproduce, duplicate, copy, sell, resell or exploit any portion of this Application and of its Service
                without the Owner's express prior written permission, granted either directly or through a legitimate
                reselling programme.</p>
            <h3><strong>Privacy policy</strong></h3>
            <p>To learn more about the use of their Personal Data, Users may refer to the privacy policy of this Application.</p>
            <h3><strong>Intellectual property rights</strong></h3>
            <p>Without prejudice to any more specific provision of these Terms, any intellectual property rights, such as
                copyrights, trademark rights, patent rights and design rights related to this Application are the exclusive property
                of the Owner or its licensors and are subject to the protection granted by applicable laws or international treaties
                relating to intellectual property.</p>
            <p>All trademarks - nominal or figurative - and all other marks, trade names, service marks, word marks,
                illustrations, images, or logos appearing in connection with this Application are, and remain, the exclusive
                property of the Owner or its licensors and are subject to the protection granted by applicable laws or international
                treaties related to intellectual property.</p>
            <h3><strong>Changes to these Terms</strong></h3>
            <p>The Owner reserves the right to amend or otherwise modify these Terms atany time. In such cases, the Owner will
                appropriately inform the User of these changes.</p>
            <p>Such changes will only affect the relationship with the User for the future.</p>
            <p>The continued use of the Service will signify the User's acceptance of the revised Terms. If Users do not
                wish to be bound by the changes, they must stop using the Service. Failure to accept the revised Terms, may entitle
                either party to terminate the Agreement.</p>
            <p>The applicable previous version will govern the relationship prior to the User's acceptance. The User can obtain any
                previous version from the Owner.</p>
            <p>If required by applicable law, the Owner will specify the date by which the modified Terms will enter into force.</p>
            <h3><strong>Assignment of contract</strong></h3>
            <p>The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or
                obligations under these Terms, takingthe User's legitimate interests into account. Provisions
                regardingchanges of these Terms will apply accordingly.</p>
            <p>Users may not assign or transfer their rights or obligations under theseTerms in any way, without the written
                permission of the Owner.</p>
            <h3><strong>Contacts</strong></h3>
            <p>All communications relating to the use of this Application must be sent using the contact information stated in this
                document.</p>
            <h3><strong>Severability</strong></h3>
            <p>Should any provision of these Terms be deemed or become invalid or unenforceable under applicable law, the invalidity
                or unenforceability of such provision shall not affect the validity of the remaining provisions, which shall remain
                in full force and effect.</p>
            <h4><strong>US Users</strong></h4>
            <p>Any such invalid or unenforceable provision will be interpreted, construed and reformed to the extent reasonably
                required to render it valid, enforceable and consistent with its original intent. These Terms constitute the entire
                Agreement between Users and the Owner with respect to the subject matter hereof, and supersede all other
                communications, including but not limited to all prior agreements, between the parties with respect to such subject
                matter. These Terms will be enforced to the fullest extent permitted by law.</p>
            <h4><strong>EU Users</strong></h4>
            <p>Should any provision of these Terms be or be deemed void, invalid or unenforceable, the parties shall do their best
                to find, in an amicable way, anagreement on valid and enforceable provisions thereby substituting the void, invalid
                or unenforceable parts.</p>
            <p>In case of failure to do so, the void, invalid or unenforceable provisions shall be replaced by the applicable
                statutory provisions, if so permitted or stated under the applicable law.</p>
            <p>Without prejudice to the above, the nullity, invalidity or the impossibility to enforce a particular provision of
                these Terms shall not nullify theentire Agreement, unless the severed provisions are essential to the Agreement, or
                of such importance that the parties would not have entered into the contract if they had known that the provision
                would not be valid, or in cases where the remaining provisions would translate into an unacceptable hardship on any
                of the parties.</p>
            <h3><strong>Governing law</strong></h3>
            <p>These Terms are governed by the law of the place where the Owner is based, as disclosed in the relevant section of
                this document, without regard toconflict of laws principles.</p>
            <h4><strong>Exception for European Consumers</strong></h4>
            <p>However, regardless of the above, if the User qualifies as a European Consumer and has their habitual residence in a
                country where the law providesfor a higher consumer protection standard, such higher standards shall prevail.</p>
            <h3><strong>Venue of jurisdiction</strong></h3>
            <p>The exclusive competence to decide on any controversy resulting from or connected to these Terms lies with the courts
                of the place where the Owner is based, as displayed in the relevant section of this document.</p>
            <h4><strong>Exception for European Consumers</strong></h4>
            <p>The above does not apply to any Users that qualify as European Consumers, nor to Consumers based in Switzerland,
                Norway or Iceland.</p>
            <h2><strong>Dispute resolution</strong></h2>
            <h3><strong>Amicable dispute resolution</strong></h3>
            <p>Users may bring any disputes to the Owner who will try to resolve them amicably.</p>
            <p>While Users' right to take legal action shall always remain unaffected, in the event of any controversy regarding the
                use of this Application or the Service, Users are kindly asked to contact the Owner at the contact details provided
                in this document.</p>
            <p>The User may submit the complaint including a brief description and if applicable, the details of the related order,
                purchase, or account, to the Owner's email address specified in this document.</p>
            <p>The Owner will process the complaint without undue delay and within 2 days of receiving it.</p>
            <h3><strong>Online dispute resolution for Consumers</strong></h3>
            <p>The European Commission has established an online platform for alternative dispute resolutions that facilitates an
                out-of-court method for solving disputes related to and stemming from online sale and service contracts.</p>
            <p>As a result, any European Consumer or Consumer based in Norway, Iceland,or Liechtenstein can use such platform for
                resolving disputes stemming from contracts which have been entered into online. The platform is <u>available at the
                    following link</u>.</p>
            <h2><strong>Definitions and legal references</strong></h2>
            <p>The <strong>commands</strong> (discuss) <strong>Kiera</strong> returns to you are called
                <strong>Suggestions</strong>.</p>

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

export default Terms;
