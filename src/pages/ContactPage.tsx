import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHero 
        title="Entre em Contato" 
        subtitle="Estamos prontos para atender às suas necessidades e ajudar a encontrar a melhor solução para o seu negócio."
        backgroundImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Como Podemos Ajudar?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Entre em contato conosco para obter mais informações sobre nossos sistemas, solicitar uma demonstração ou tirar dúvidas.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 mx-auto mb-4 bg-primary-50 p-4 rounded-full inline-flex">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600">
                <a href="tel:+557521013553" className="hover:text-primary-600 transition-colors">
                  (75) 2101-3553
                </a>
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 mx-auto mb-4 bg-primary-50 p-4 rounded-full inline-flex">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-gray-600">
                <a href="mailto:data@dataautomacao.com.br" className="hover:text-primary-600 transition-colors">
                  data@dataautomacao.com.br
                </a>
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 mx-auto mb-4 bg-primary-50 p-4 rounded-full inline-flex">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600">
                Feira de Santana - BA
                <br />
                Brasil
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 mx-auto mb-4 bg-primary-50 p-4 rounded-full inline-flex">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p className="text-gray-600">
                Segunda à Sexta
                <br />
                8:00 - 18:00
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Envie-nos uma mensagem</h3>
                <ContactForm />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-semibold mb-6">Canais de Atendimento</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Suporte Técnico</h4>
                    <p className="text-gray-600 mb-2">
                      Para clientes que já utilizam nossos sistemas e precisam de assistência técnica.
                    </p>
                    <a 
                      href="tel:+557521013553" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      (75) 2101-3553
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Vendas</h4>
                    <p className="text-gray-600 mb-2">
                      Para informações sobre produtos, preços e demonstrações.
                    </p>
                    <a 
                      href="mailto:vendas@dataautomacao.com.br" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      vendas@dataautomacao.com.br
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">WhatsApp</h4>
                    <p className="text-gray-600 mb-2">
                      Atendimento rápido via mensagem.
                    </p>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Fale pelo WhatsApp
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Redes Sociais</h4>
                    <p className="text-gray-600 mb-2">
                      Acompanhe nossas novidades e entre em contato.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.facebook.com/dataautomacao/"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-700"
                        aria-label="Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/data_automacao/"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-pink-600 hover:text-pink-700"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Perguntas Frequentes</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Respostas para as dúvidas mais comuns sobre nossos sistemas e serviços.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Como funciona a demonstração dos sistemas?",
                answer: "Nossas demonstrações são personalizadas e podem ser realizadas presencialmente ou por videoconferência. Um consultor especializado apresentará as funcionalidades do sistema escolhido e responderá a todas as suas dúvidas."
              },
              {
                question: "Quanto tempo leva para implementar um sistema?",
                answer: "O tempo de implementação varia de acordo com a complexidade do negócio e do sistema escolhido. Em média, nossos sistemas podem ser implementados em 2 a 4 semanas, incluindo treinamento da equipe."
              },
              {
                question: "Os sistemas podem ser personalizados?",
                answer: "Sim, todos os nossos sistemas podem ser personalizados para atender às necessidades específicas do seu negócio. Nossa equipe de desenvolvimento pode adaptar funcionalidades e criar recursos exclusivos."
              },
              {
                question: "Existe suporte técnico contínuo?",
                answer: "Sim, oferecemos suporte técnico contínuo para todos os nossos clientes. Nosso time de suporte está disponível por telefone, e-mail e chat para resolver qualquer problema ou dúvida."
              },
              {
                question: "Os sistemas funcionam em dispositivos móveis?",
                answer: "Sim, a maioria dos nossos sistemas possui versões para dispositivos móveis ou interfaces responsivas que permitem acesso via navegadores em smartphones e tablets."
              },
              {
                question: "Como é realizado o treinamento da equipe?",
                answer: "Oferecemos treinamentos presenciais e online para garantir que sua equipe aproveite ao máximo as funcionalidades dos nossos sistemas. Os treinamentos são personalizados de acordo com as necessidades da sua empresa."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-white opacity-90 max-w-3xl mx-auto mb-8">
              Entre em contato conosco e descubra como nossas soluções podem impulsionar seu negócio.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn bg-white text-primary-600 hover:bg-gray-100"
            >
              Falar com um Consultor
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;