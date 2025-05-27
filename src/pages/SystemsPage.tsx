import React from 'react';
import { motion } from 'framer-motion';
import { Database, Monitor, Server, ShieldCheck, Users, Headphones } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import SystemCard from '../components/SystemCard';

const SystemsPage: React.FC = () => {
  const systems = [
    {
      id: "connect-store",
      name: "Connect Store",
      description: "Sistema de gestão completo para comércio varejista com controle de estoque, vendas e financeiro.",
      icon: <Monitor size={32} />,
      features: [
        "Controle de estoque e inventário",
        "Gestão de vendas e faturamento",
        "Controle financeiro e fluxo de caixa",
        "Relatórios gerenciais detalhados",
        "Integração com e-commerce"
      ]
    },
    {
      id: "easyassist",
      name: "EasyAssist",
      description: "Solução para gerenciamento de atendimento ao cliente e suporte técnico.",
      icon: <Headphones size={32} />,
      features: [
        "Abertura e acompanhamento de chamados",
        "Base de conhecimento integrada",
        "Avaliação de satisfação do cliente",
        "Controle de SLA e métricas de atendimento",
        "Chat em tempo real"
      ]
    },
    {
      id: "saurus",
      name: "Saurus",
      description: "Sistema ERP completo para gestão empresarial integrada.",
      icon: <Database size={32} />,
      features: [
        "Gestão financeira completa",
        "Controle de compras e fornecedores",
        "Gestão de recursos humanos",
        "Business Intelligence integrado",
        "Controle orçamentário"
      ]
    },
    {
      id: "syspdv",
      name: "Syspdv",
      description: "PDV completo com emissor de cupom fiscal e integração com periféricos.",
      icon: <Server size={32} />,
      features: [
        "Emissão de NFC-e e SAT",
        "Integração com balanças e leitores",
        "Controle de operadores e caixas",
        "Relatórios de vendas em tempo real",
        "Promoções e descontos automáticos"
      ]
    },
    {
      id: "sapewin",
      name: "Sapewin",
      description: "Sistema de automação de processos empresariais e workflow.",
      icon: <ShieldCheck size={32} />,
      features: [
        "Automação de processos internos",
        "Gestão de documentos e workflow",
        "Aprovações e alertas automáticos",
        "Dashboards personalizados",
        "Integração com sistemas de terceiros"
      ]
    },
    {
      id: "varejo-facil",
      name: "Varejo Fácil",
      description: "Solução simplificada para pequenos comércios com controle de caixa e estoque.",
      icon: <Users size={32} />,
      features: [
        "Interface simples e intuitiva",
        "Controle básico de estoque",
        "Gestão de caixa diário",
        "Cadastro de clientes e produtos",
        "Relatórios simplificados"
      ]
    }
  ];

  return (
    <>
      <PageHero 
        title="Nossos Sistemas" 
        subtitle="Conheça as soluções completas da Data Automação para o seu negócio."
        backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Systems Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Soluções Completas para seu Negócio</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A Data Automação oferece um conjunto integrado de sistemas para atender às necessidades específicas do seu negócio.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <AnimatedSection key={system.id} delay={0.1 * index}>
                <div className="card h-full">
                  <div className="p-6">
                    <div className="text-primary-600 mb-4">{system.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{system.name}</h3>
                    <p className="text-gray-600 mb-4">{system.description}</p>
                    <ul className="mb-6 space-y-2">
                      {system.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/sistemas/${system.id}`}
                      className="btn-primary w-full text-center"
                    >
                      Saiba Mais
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="mb-6">Integração Completa</h2>
                <p className="text-gray-600 mb-4">
                  Todos os sistemas da Data Automação foram desenvolvidos para funcionar de forma integrada, proporcionando uma experiência unificada e eliminando a necessidade de inserir informações em múltiplos lugares.
                </p>
                <p className="text-gray-600 mb-4">
                  A integração entre os módulos permite que você tenha uma visão completa do seu negócio, desde o estoque até o financeiro, passando pelo atendimento ao cliente e vendas.
                </p>
                <p className="text-gray-600">
                  Além disso, nossos sistemas podem ser integrados com soluções de terceiros, como marketplaces, plataformas de e-commerce e sistemas de contabilidade.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sistemas integrados" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">O que nossos clientes dizem</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Conheça a experiência de quem já utiliza nossas soluções.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Mendes",
                company: "Supermercado Bom Preço",
                testimonial: "O sistema Connect Store revolucionou a forma como gerenciamos nosso estoque. Conseguimos reduzir as perdas em mais de 30% no primeiro trimestre de uso.",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Mariana Costa",
                company: "Loja de Roupas Fashion",
                testimonial: "Com o Varejo Fácil, conseguimos ter um controle muito melhor do nosso caixa e das vendas. O sistema é super intuitivo e fácil de usar.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Paulo Andrade",
                company: "Rede de Farmácias Saúde",
                testimonial: "Implementamos o Saurus em todas as nossas 12 lojas e o resultado foi incrível. A integração entre as unidades nos deu uma visão completa do negócio.",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Quer conhecer melhor nossos sistemas?</h2>
            <p className="text-white opacity-90 max-w-3xl mx-auto mb-8">
              Agende uma demonstração gratuita e descubra como nossas soluções podem impulsionar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn bg-white text-primary-600 hover:bg-gray-100"
              >
                Agendar Demonstração
              </a>
              <a 
                href="/contato"
                className="btn bg-transparent border border-white text-white hover:bg-white/10"
              >
                Solicitar Orçamento
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default SystemsPage;