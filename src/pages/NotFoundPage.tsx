import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-primary-600 mb-6">
            <span className="text-9xl font-bold">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Página não encontrada</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link to="/" className="btn-primary">
              <Home className="mr-2 w-5 h-5" />
              Voltar para Home
            </Link>
            <Link to="/sistemas" className="btn-secondary">
              <Search className="mr-2 w-5 h-5" />
              Explorar Sistemas
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Você pode tentar:</h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Verificar se a URL digitada está correta</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Visitar nossa <Link to="/" className="text-primary-600 hover:underline">página inicial</Link></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Explorar nossos <Link to="/sistemas" className="text-primary-600 hover:underline">sistemas</Link></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Entrar em <Link to="/contato" className="text-primary-600 hover:underline">contato conosco</Link> para obter ajuda</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;