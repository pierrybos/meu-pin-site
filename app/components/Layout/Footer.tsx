"use client"
import './footer.css';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';
import React, { useState, FormEvent } from 'react'




const FooterNote = () => (
  <div className="text-xs" data-testid={testIds.LAYOUT.FOOTER}>
    <p>© 2023 by Personal Life Coach.</p>
    <p>
      <span>Powered and secured by </span>
      <span>
        <a
          className="underline"
          href="https://wix.com/?utm_campaign=vir_created_with"
          target="_blank"
          rel="noreferrer noopener"
        >
          Wix
        </a>
      </span>
    </p>
  </div>
);

const Footer = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
 
      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
 
      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
 
return (
  <footer className="w-fullm-h-56 bg-turquoise-100 leading-7">
    <div className="max-w-full-content mx-auto sm:flex gap-2 pt-11 pb-20">
      <div className="flex-1">
        <div className="px-6 sm:pr-0">
          <div className="header-line"></div>
          <p className="font-lulo mb-10">Contacto</p>
          <div className="text-sm tracking-wide sm:mb-5">
            <p>
              <span>Av Assis Brasil,</span>
            </p>

            <p>
              <span>Porto Alegre, RS 91010-006</span>
            </p>

            <p>
              <span>​​</span>
            </p>

            <p>
              <span>Tel: 51 982599506</span>
            </p>

            <p>
              <span>​</span>
            </p>

            <p>
              <span>
                <a href="mailto:info@mysite.com" target="_self">
                  info@mysite.com
                </a>
              </span>
            </p>
          </div>
{ /*         <div className="mb-16">
            <ul aria-label="Social Bar" className="flex gap-4">
              <li>
                <a
                  href="http://www.facebook.com/wix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={25}
                    height={25}
                    alt="Facebook"
                    src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.twitter.com/wix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={25}
                    height={25}
                    src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/wix/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={25}
                    height={25}
                    src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/Wix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={25}
                    height={25}
                    src="https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/78aa2057f0cb42fbbaffcbc36280a64a.png"
                    alt="YouTube"
                  />
                </a>
              </li>
            </ul>
</div> */ }
          <div className="mb-16 hidden sm:block">
            <FooterNote />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <form onSubmit={onSubmit}>
          <ScrollIntoView hashName="#contact" />
          <div className="px-6 sm:pl-0 sm:pr-9">
            <div className="footer-form-field">
              <label htmlFor="contact-form-name" className="footer-form-label">
                Seu Nome
              </label>
              <input
                className="footer-form-input"
                id="contact-form-name"
                type="text"
                name="name"
                placeholder=""
                aria-required="false"
                maxLength={100}
              />
            </div>
            <div className="footer-form-field">
              <label
                htmlFor="contact-form-email"
                className="footer-form-label"
                aria-required
              >
                Seu Email
              </label>
              <input
                className="footer-form-input"
                id="contact-form-email"
                type="email"
                name="email"
                required
                aria-required="true"
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxLength={250}
              />
            </div>
            <div className="footer-form-field">
              <label
                htmlFor="contact-form-subject"
                className="footer-form-label"
              >
                Telefone
              </label>
              <input
                className="footer-form-input"
                id="contact-form-subject"
                type="text"
                name="subject"
                placeholder=""
                aria-required="false"
              />
            </div>
            <div className="footer-form-field">
              <label
                htmlFor="contact-form-message"
                className="footer-form-label"
              >
                Informe a quantidade de pins que deseja, e entraremos em contato
              </label>
              <textarea
                className="footer-form-input h-32"
                id="contact-form-message"
                name="message"
                placeholder=""
                aria-required="false"
              />
            </div>
            <div aria-disabled="false" className="flex justify-end mt-4 mb-10">
              <button
                className="btn-main w-full p-1 w-full sm:w-32"
                aria-disabled="false"
                disabled={isLoading}>
                <span>{isLoading ? 'Solicitando...' : 'Solicitar'}
                </span>
              </button>
            </div>
            <div className="sm:hidden">
              <FooterNote />
            </div>
          </div>
        </form>
      </div>
    </div>
  </footer>
);
}

export default Footer;
