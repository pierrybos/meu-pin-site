'use client'
import './page.css';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';

export default async function Home() {
  return (
    <div>
      <div
        className="text-center w-full min-h-screen relative"
        data-testid={testIds.HOME_PAGE.HEADER}
      >
          <img className="video-background"
            src="/index.jpeg"
          />
        <div className="text-center px-3">
          <div className="font-sans font-bold uppercase tracking-widest pt-16 bg-slate-100/50	">
            Não se preocupe mais em perder
          </div>
          <div className="font-lulo text-4xl sm:text-6xl md:text-8xl pt-4 bg-slate-100/50">
            Seu Arganel
          </div>
          <div className="text-xl pt-6 tracking-wider bg-slate-100/50">
            Agora ele terá seu nome
          </div>
          <div className="pt-7">
            <a
              className="btn-main"
              href="/#contact"
              data-testid={testIds.HOME_PAGE.BOOK_NOW_CTA}
            >
              Quero
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[-175px]">
        <ScrollIntoView hashName="#about" offset="-128px" />
        <div className="w-full bg-white h-full relative">
          <div className="max-w-full-content mx-auto h-full">
            <div className="pl-5 py-2 pr-5 sm:w-2/4 sm:pr-24 sm:pr-0">
              <div className="header-line my-8"></div>
              <h2 className="mb-7 mt-10 tracking-tighter max-w-xs title">
              Conheça MeuPin
              </h2>
              <p className="text-sm flex-1 leading-7">
                A solução perfeita para aventureiros e desbravadores que desejam manter seus arganeis,
                  trunfos e pins de forma segura e identificável. Com nossas placas de identificação de alta
                  qualidade, você nunca mais perderá seu anel de aventura sem saber de quem é. 
                  Cada placa é personalizada com um QRCode exclusivo que contém informações de contato, 
                  permitindo que qualquer pessoa que o encontre entre em contato com você de forma rápida 
                  e fácil.</p>
                  <strong className="font-semibold text-gray-900">
    Características Principais:</strong>
    <ul className="list-disc">
        <li>Plaquinhas de Identificação em tamanhos de 1cm, 1.5cm ou 2cm</li>
        <li>QRCode único gravado para identificação rápida</li>
        <li>Mantenha seu arganel, trunfo ou pin seguro e identificável</li>
        <li>Ideal para Desbravadores, Aventureiros e amantes da natureza</li>
        <li>Evite a perda acidental e recupere seu arganel com facilidade</li>
    </ul>

    <p className="text-sm flex-1 leading-7">
Não perca mais seu arganel sem saber de quem é. 
Experimente MeuPin hoje e mantenha-se 
sempre pronto para a próxima aventura.</p>

              <div className="mt-11 mb-20">
                <a href="/#contact" className="btn-main">
                  Quero
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:absolute sm:top-0 sm:left-2/4 sm:w-2/4 h-full">
            <div className="bg-[url('/arganeis.jpg')] w-full h-full bg-cover min-h-[320px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
