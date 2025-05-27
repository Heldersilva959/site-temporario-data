import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="mb-4">
              Soluções completas em automação comercial para o seu negócio. Tecnologia de ponta para o varejo brasileiro.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/dataautomacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/data_automacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/sistemas" className="hover:text-white transition-colors">
                  Sistemas
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Systems */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Nossos Sistemas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sistemas/connect-store" className="hover:text-white transition-colors">
                  Connect Store
                </Link>
              </li>
              <li>
                <Link to="/sistemas/easyassist" className="hover:text-white transition-colors">
                  EasyAssist
                </Link>
              </li>
              <li>
                <Link to="/sistemas/saurus" className="hover:text-white transition-colors">
                  Saurus
                </Link>
              </li>
              <li>
                <Link to="/sistemas/syspdv" className="hover:text-white transition-colors">
                  Syspdv
                </Link>
              </li>
              <li>
                <Link to="/sistemas/sapewin" className="hover:text-white transition-colors">
                  Sapewin
                </Link>
              </li>
              <li>
                <Link to="/sistemas/varejo-facil" className="hover:text-white transition-colors">
                  Varejo Fácil
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+557521013553" className="hover:text-white transition-colors">
                  (75) 2101-3553
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:data@dataautomacao.com.br" className="hover:text-white transition-colors">
                  data@dataautomacao.com.br
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Fale pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Data Automação. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;