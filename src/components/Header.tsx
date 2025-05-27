import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [systemsDropdown, setSystemsDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSystemsDropdown = () => setSystemsDropdown(!systemsDropdown);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink to="/" className={({isActive}) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/sobre" className={({isActive}) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Sobre Nós
          </NavLink>
          
          {/* Systems Dropdown */}
          <div className="relative group">
            <NavLink to="/sistemas" className={({isActive}) => 
              `nav-link flex items-center ${isActive ? 'active' : ''}`
            }>
              Sistemas
              <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
              <div className="bg-white rounded-md shadow-lg py-1">
                <Link to="/sistemas/connect-store" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Connect Store
                </Link>
                <Link to="/sistemas/easyassist" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  EasyAssist
                </Link>
                <Link to="/sistemas/saurus" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Saurus
                </Link>
                <Link to="/sistemas/syspdv" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Syspdv
                </Link>
                <Link to="/sistemas/sapewin" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Sapewin
                </Link>
                <Link to="/sistemas/varejo-facil" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Varejo Fácil
                </Link>
              </div>
            </div>
          </div>
          
          <NavLink to="/contato" className={({isActive}) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Contato
          </NavLink>
          <a href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0" 
             className="btn-primary ml-4" 
             target="_blank" 
             rel="noopener noreferrer">
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-full left-0 right-0">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/sobre" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Sobre Nós
            </NavLink>
            
            {/* Mobile Systems Dropdown */}
            <div>
              <button 
                className="flex items-center justify-between w-full nav-link"
                onClick={toggleSystemsDropdown}
              >
                Sistemas
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${systemsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {systemsDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link 
                    to="/sistemas/connect-store" 
                    className="block py-1 text-gray-700 hover:text-primary-600"
                    onClick={toggleMenu}
                  >
                    Connect Store
                  </Link>
                  <Link 
                    to="/sistemas/easyassist" 
                    className="block py-1 text-gray-700 hover:text-primary-600"
                    onClick={toggleMenu}
                  >
                    EasyAssist
                  </Link>
                  <Link 
                    to="/sistemas/saurus" 
                    className="block py-1 text-gray-700 hover:text-primary-600"
                    onClick={toggleMenu}
                  >
                    Saurus
                  </Link>
                  <Link 
                    to="/sistemas/syspdv" 
                    className="block py-1 text-gray-700 hover:text-primary-600"
                    onClick={toggleMenu}
                  >
                    Syspdv
                  </Link>
                  <Link 
                    to="/sistemas/sapewin" 
                    className="block py-1 text-gray-700 hover:text-primary-600"
                    onClick={toggleMenu}
                  >
                    Sapewin
                  </Link>
                  <Link 
                    to="/sistemas/varejo-facil" 
                    className="block py-1 text-gray-700 hover:text-primary-600"
                    onClick={toggleMenu}
                  >
                    Varejo Fácil
                  </Link>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/contato" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Contato
            </NavLink>
            <a 
              href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0" 
              className="btn-primary text-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;