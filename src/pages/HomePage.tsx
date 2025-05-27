import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Database, Server, ShieldCheck, Users, Headphones } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SystemCard from '../components/SystemCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-3xl"
          >
            <h1 className="text-white mb-6">
              Tecnologia de ponta para o seu negócio
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8">
              Há mais de 15 anos oferecendo soluções completas em automação comercial para empresas de todos os portes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link to="/sistemas" className="btn-primary">
                Nossos Sistemas
              </Link>
              <Link to="/contato" className="btn-secondary">
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <a
              href="#about"
              className="text-white flex flex-col items-center"
              aria-label="Saiba mais"
            >
              <span className="text-sm mb-2">Saiba mais</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5" />
                <path d="M7 6l5 5 5-5" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Quem Somos</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A Data Automação é uma empresa especializada em fornecer soluções inovadoras de automação comercial para o varejo brasileiro.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
                <p className="text-gray-600 mb-6">
                  Oferecer soluções tecnológicas de excelência que impulsionem o crescimento dos nossos clientes, transformando a maneira como gerenciam seus negócios e proporcionando maior eficiência e controle.
                </p>
                <ul className="space-y-3">
                  {[
                    "Compromisso com a inovação e qualidade",
                    "Atendimento personalizado e suporte técnico",
                    "Soluções adaptadas às necessidades do mercado brasileiro",
                    "Parceria de longo prazo com nossos clientes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/sobre" className="btn-primary mt-8 inline-flex items-center">
                  Conheça nossa história <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Equipe Data Automação" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Por que escolher a Data Automação?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nossos diferenciais que fazem da Data Automação a escolha certa para sua empresa.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor size={36} />,
                title: "Sistemas Intuitivos",
                description: "Interfaces amigáveis e fáceis de usar, com curva de aprendizado reduzida."
              },
              {
                icon: <Database size={36} />,
                title: "Dados Seguros",
                description: "Armazenamento e processamento seguro de informações com backups automáticos."
              },
              {
                icon: <Server size={36} />,
                title: "Infraestrutura Robusta",
                description: "Servidores de alta performance garantindo disponibilidade constante."
              },
              {
                icon: <ShieldCheck size={36} />,
                title: "Conformidade Fiscal",
                description: "Sistemas sempre atualizados com a legislação fiscal brasileira."
              },
              {
                icon: <Users size={36} />,
                title: "Equipe Especializada",
                description: "Profissionais qualificados com ampla experiência no varejo."
              },
              {
                icon: <Headphones size={36} />,
                title: "Suporte Dedicado",
                description: "Atendimento ágil e eficiente para resolver suas dúvidas."
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={0.2 * index} className="card p-6">
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Nossos Sistemas</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Soluções completas para todas as necessidades do seu negócio.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <SystemCard
                id="connect-store"
                name="Connect Store"
                description="Sistema de gestão completo para comércio varejista com controle de estoque, vendas e financeiro."
                icon={<Monitor size={32} />}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <SystemCard
                id="easyassist"
                name="EasyAssist"
                description="Solução para gerenciamento de atendimento ao cliente e suporte técnico."
                icon={<Headphones size={32} />}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <SystemCard
                id="saurus"
                name="Saurus"
                description="Sistema ERP completo para gestão empresarial integrada."
                icon={<Database size={32} />}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <SystemCard
                id="syspdv"
                name="Syspdv"
                description="PDV completo com emissor de cupom fiscal e integração com periféricos."
                icon={<Server size={32} />}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <SystemCard
                id="sapewin"
                name="Sapewin"
                description="Sistema de automação de processos empresariais e workflow."
                icon={<ShieldCheck size={32} />}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <SystemCard
                id="varejo-facil"
                name="Varejo Fácil"
                description="Solução simplificada para pequenos comércios com controle de caixa e estoque."
                icon={<Users size={32} />}
              />
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.7} className="text-center mt-12">
            <Link to="/sistemas" className="btn-primary">
              Ver Todos os Sistemas
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 bg-primary-600 text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-white mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-white opacity-90 max-w-3xl mx-auto mb-8 text-lg">
              Entre em contato conosco e descubra como nossas soluções podem impulsionar os resultados da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn bg-green-600 hover:bg-green-700 text-white"
              >
                Falar pelo WhatsApp
              </a>
              <Link to="/contato" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Solicitar Contato
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;