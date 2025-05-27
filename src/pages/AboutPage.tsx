import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero 
        title="Sobre Nós" 
        subtitle="Conheça a história e os valores que fazem da Data Automação líder em soluções para o varejo."
        backgroundImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* History Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="mb-6">Nossa História</h2>
                <p className="text-gray-600 mb-4">
                  Fundada há mais de 15 anos, a Data Automação surgiu com o propósito de oferecer soluções tecnológicas inovadoras para o varejo brasileiro, com foco em automação comercial.
                </p>
                <p className="text-gray-600 mb-4">
                  Iniciamos com uma pequena equipe de desenvolvedores apaixonados por tecnologia e com grande experiência no setor varejista. Ao longo dos anos, expandimos nossas operações e ampliamos nosso portfólio de produtos para atender às diversas necessidades dos nossos clientes.
                </p>
                <p className="text-gray-600">
                  Hoje, somos reconhecidos pela excelência dos nossos sistemas e pelo atendimento personalizado, estabelecendo parcerias duradouras com empresas de todos os portes.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="História da Data Automação" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Missão, Visão e Valores</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Os princípios que norteiam nossa atuação e definem quem somos.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <Target size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções tecnológicas de excelência que impulsionem o crescimento dos nossos clientes, transformando a maneira como gerenciam seus negócios.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visão</h3>
              <p className="text-gray-600">
                Ser referência nacional em soluções de automação comercial, reconhecida pela inovação, qualidade e excelência no atendimento ao cliente.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-600 mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Compromisso com a inovação</li>
                <li>• Ética e transparência</li>
                <li>• Excelência em atendimento</li>
                <li>• Responsabilidade social</li>
                <li>• Valorização das pessoas</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Nossa Equipe</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Profissionais qualificados e comprometidos com a excelência em todas as etapas.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Diretor Executivo",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Ana Oliveira",
                role: "Gerente de Desenvolvimento",
                image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Marcos Santos",
                role: "Especialista em Suporte",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Juliana Costa",
                role: "Consultora Comercial",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((member, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden inline-block">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Anos de Experiência" },
              { value: "1000+", label: "Clientes Satisfeitos" },
              { value: "6", label: "Sistemas Desenvolvidos" },
              { value: "24/7", label: "Suporte Técnico" }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-xl">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="mb-6">Pronto para conhecer nossas soluções?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com nossas soluções de automação comercial.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/sistemas" className="btn-primary">
                Conhecer Sistemas
              </Link>
              <Link to="/contato" className="btn-secondary">
                Falar com um Consultor
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutPage;