import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Monitor, Database, Server, ShieldCheck, Users, Headphones } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const SystemDetailPage: React.FC = () => {
  const { systemId } = useParams<{ systemId: string }>();
  
  // System data
  const systems = {
    'connect-store': {
      name: 'Connect Store',
      title: 'Gestão Completa para o Varejo',
      description: 'Sistema de gestão completo para comércio varejista com controle de estoque, vendas e financeiro.',
      longDescription: 'O Connect Store é uma solução completa para gestão de comércios varejistas, oferecendo um conjunto abrangente de ferramentas para controle de estoque, vendas, clientes e finanças. Com interface intuitiva e relatórios detalhados, permite que você gerencie seu negócio de forma eficiente e tenha controle total sobre suas operações.',
      icon: <Monitor size={40} />,
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Controle de estoque com gestão de inventário',
        'PDV completo com emissão de NFC-e',
        'Cadastro e fidelização de clientes',
        'Controle financeiro e fluxo de caixa',
        'Relatórios gerenciais detalhados',
        'Controle de múltiplas filiais',
        'Integração com e-commerce',
        'Gestão de compras e fornecedores'
      ],
      benefits: [
        'Aumento das vendas com controle eficiente',
        'Redução de perdas no estoque',
        'Melhor experiência para seus clientes',
        'Tomada de decisões baseada em dados',
        'Automação de processos operacionais'
      ],
      useCases: [
        {
          title: 'Supermercados',
          description: 'Controle completo de estoque, múltiplas formas de pagamento e integração com balanças e leitores.'
        },
        {
          title: 'Lojas de Vestuário',
          description: 'Gestão de coleções, grade de produtos, controle de vendedores e comissões.'
        },
        {
          title: 'Farmácias',
          description: 'Controle de lotes, validades, medicamentos controlados e integração com sistemas de saúde.'
        }
      ]
    },
    'easyassist': {
      name: 'EasyAssist',
      title: 'Atendimento ao Cliente Simplificado',
      description: 'Solução para gerenciamento de atendimento ao cliente e suporte técnico.',
      longDescription: 'O EasyAssist é uma plataforma de atendimento ao cliente que simplifica a gestão de chamados técnicos, dúvidas e solicitações. Com ferramentas para acompanhamento de chamados, base de conhecimento e chat em tempo real, permite que sua equipe ofereça um suporte de qualidade e mantenha seus clientes satisfeitos.',
      icon: <Headphones size={40} />,
      image: 'https://images.pexels.com/photos/7709208/pexels-photo-7709208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Abertura e acompanhamento de chamados',
        'Base de conhecimento integrada',
        'Chat em tempo real com clientes',
        'Avaliação de satisfação pós-atendimento',
        'Controle de SLA e níveis de serviço',
        'Relatórios de desempenho da equipe',
        'Notificações automáticas por e-mail e SMS',
        'Controle de filas de atendimento'
      ],
      benefits: [
        'Melhoria na satisfação dos clientes',
        'Redução do tempo de resolução de problemas',
        'Maior produtividade da equipe de suporte',
        'Histórico completo de interações com clientes',
        'Identificação de problemas recorrentes'
      ],
      useCases: [
        {
          title: 'Suporte Técnico',
          description: 'Gestão de chamados técnicos com níveis de prioridade e acompanhamento de SLA.'
        },
        {
          title: 'SAC',
          description: 'Atendimento ao consumidor com registro de reclamações, sugestões e elogios.'
        },
        {
          title: 'Help Desk Interno',
          description: 'Suporte para colaboradores com categorização de chamados e base de conhecimento.'
        }
      ]
    },
    'saurus': {
      name: 'Saurus',
      title: 'ERP Completo para Gestão Empresarial',
      description: 'Sistema ERP completo para gestão empresarial integrada.',
      longDescription: 'O Saurus é um sistema ERP abrangente que integra todos os departamentos da sua empresa em uma única plataforma. Com módulos para finanças, recursos humanos, compras, vendas e muito mais, oferece uma visão completa do seu negócio e permite uma gestão eficiente e estratégica.',
      icon: <Database size={40} />,
      image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Gestão financeira completa',
        'Controle de compras e fornecedores',
        'Gestão de recursos humanos',
        'Controle de produção e estoque',
        'Business Intelligence integrado',
        'Controle orçamentário',
        'Gestão de projetos',
        'Fluxo de trabalho e aprovações'
      ],
      benefits: [
        'Integração entre todos os setores da empresa',
        'Eliminação de retrabalho e duplicidade de informações',
        'Maior controle e visibilidade dos processos',
        'Tomada de decisões estratégicas baseadas em dados',
        'Redução de custos operacionais'
      ],
      useCases: [
        {
          title: 'Indústrias',
          description: 'Controle da produção, estoques de matéria-prima e gestão de custos.'
        },
        {
          title: 'Empresas de Serviços',
          description: 'Gestão de projetos, alocação de recursos e faturamento de serviços.'
        },
        {
          title: 'Comércio Atacadista',
          description: 'Controle de grandes volumes de mercadorias e gestão de logística.'
        }
      ]
    },
    'syspdv': {
      name: 'Syspdv',
      title: 'Ponto de Venda Completo',
      description: 'PDV completo com emissor de cupom fiscal e integração com periféricos.',
      longDescription: 'O Syspdv é uma solução completa para ponto de venda, com emissão de cupom fiscal e integração com diversos periféricos como leitores de código de barras, balanças, impressoras e TEF. Com interface intuitiva e funcionalidades avançadas, torna o processo de vendas mais ágil e eficiente.',
      icon: <Server size={40} />,
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Emissão de NFC-e, CF-e SAT e MFE',
        'Integração com balanças e leitores',
        'Controle de operadores e caixas',
        'Relatórios de vendas em tempo real',
        'Promoções e descontos automáticos',
        'Integração com TEF e cartões',
        'Venda assistida com catálogo de produtos',
        'Funcionamento offline e sincronização posterior'
      ],
      benefits: [
        'Agilidade no atendimento ao cliente',
        'Controle rigoroso das operações de caixa',
        'Conformidade com a legislação fiscal',
        'Redução de erros nas operações de venda',
        'Melhor experiência de compra para os clientes'
      ],
      useCases: [
        {
          title: 'Lojas de Varejo',
          description: 'Operação de caixa ágil com múltiplas formas de pagamento e promoções.'
        },
        {
          title: 'Restaurantes e Lanchonetes',
          description: 'Controle de mesas, pedidos e integração com produção.'
        },
        {
          title: 'Farmácias',
          description: 'Venda de medicamentos com controle de lotes e integração com sistemas de saúde.'
        }
      ]
    },
    'sapewin': {
      name: 'Sapewin',
      title: 'Automação de Processos Empresariais',
      description: 'Sistema de automação de processos empresariais e workflow.',
      longDescription: 'O Sapewin é uma plataforma de automação de processos empresariais que permite criar fluxos de trabalho personalizados, automatizar aprovações e documentos, e integrar diferentes sistemas. Com recursos avançados de workflow, transforma processos manuais em digitais, aumentando a eficiência e reduzindo erros.',
      icon: <ShieldCheck size={40} />,
      image: 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Automação de processos internos',
        'Gestão de documentos e workflow',
        'Aprovações e alertas automáticos',
        'Dashboards personalizados',
        'Integração com sistemas de terceiros',
        'Formulários eletrônicos personalizados',
        'Controle de prazos e pendências',
        'Notificações automáticas'
      ],
      benefits: [
        'Redução de tempo em processos burocráticos',
        'Eliminação de papel e processos manuais',
        'Maior controle sobre os processos internos',
        'Aumento da produtividade da equipe',
        'Rastreabilidade completa das atividades'
      ],
      useCases: [
        {
          title: 'Departamento Financeiro',
          description: 'Automação de aprovações de pagamentos e controle de fluxo de caixa.'
        },
        {
          title: 'Recursos Humanos',
          description: 'Gestão de solicitações de férias, contratações e avaliações de desempenho.'
        },
        {
          title: 'Departamento Jurídico',
          description: 'Controle de contratos, processos e aprovações legais.'
        }
      ]
    },
    'varejo-facil': {
      name: 'Varejo Fácil',
      title: 'Gestão Simplificada para Pequenos Negócios',
      description: 'Solução simplificada para pequenos comércios com controle de caixa e estoque.',
      longDescription: 'O Varejo Fácil é uma solução desenvolvida especialmente para pequenos comércios que buscam uma ferramenta simples e eficiente para controle de caixa, estoque e clientes. Com interface intuitiva e funcionalidades essenciais, permite que pequenos empreendedores tenham controle total do seu negócio sem complicações.',
      icon: <Users size={40} />,
      image: 'https://images.pexels.com/photos/6169/woman-hand-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Interface simples e intuitiva',
        'Controle básico de estoque',
        'Gestão de caixa diário',
        'Cadastro de clientes e produtos',
        'Relatórios simplificados',
        'Emissão de nota fiscal eletrônica',
        'Controle de contas a pagar e receber',
        'Backup automático em nuvem'
      ],
      benefits: [
        'Facilidade de uso mesmo para iniciantes',
        'Controle financeiro eficiente',
        'Gestão adequada para pequenos negócios',
        'Baixo custo de implementação',
        'Rápida adoção pela equipe'
      ],
      useCases: [
        {
          title: 'Pequenas Lojas',
          description: 'Controle de vendas diárias, estoque e clientes sem complicações.'
        },
        {
          title: 'Mercadinhos de Bairro',
          description: 'Gestão simples de produtos, preços e controle de caixa.'
        },
        {
          title: 'Empreendedores Iniciantes',
          description: 'Primeira ferramenta de gestão para quem está começando no varejo.'
        }
      ]
    }
  };

  // Get current system data
  const system = systems[systemId as keyof typeof systems];
  
  // Fallback if system doesn't exist
  if (!system) {
    return (
      <div className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Sistema não encontrado</h2>
          <p className="text-gray-600 mb-8">O sistema que você está procurando não está disponível.</p>
          <Link to="/sistemas" className="btn-primary">
            Ver Todos os Sistemas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero 
        title={system.name} 
        subtitle={system.title}
        backgroundImage={system.image}
      />
      
      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link to="/sistemas" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar para Sistemas
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="text-primary-600 mb-4">{system.icon}</div>
                <h2 className="mb-4">{system.name}</h2>
                <p className="text-gray-600 mb-6">
                  {system.longDescription}
                </p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  Solicitar Demonstração
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={system.image} 
                  alt={`${system.name} - Data Automação`}
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
              <h2 className="mb-4">Funcionalidades</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Conheça os principais recursos do {system.name} que podem transformar o seu negócio.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {system.features.map((feature, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="text-primary-600 mr-3 mt-1">
                    <Check size={18} />
                  </div>
                  <p>{feature}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Benefícios do sistema"
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div>
                <h2 className="mb-6">Benefícios</h2>
                <p className="text-gray-600 mb-6">
                  Ao implementar o {system.name} em seu negócio, você terá diversos benefícios que impactarão diretamente seus resultados.
                </p>
                <ul className="space-y-4">
                  {system.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1">
                        <Check size={20} />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Casos de Uso</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Veja como o {system.name} pode ser aplicado em diferentes segmentos do varejo.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {system.useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Pronto para implementar o {system.name}?</h2>
            <p className="text-white opacity-90 max-w-3xl mx-auto mb-8">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com nossas soluções.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=557521013553&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn bg-white text-primary-600 hover:bg-gray-100"
              >
                Solicitar Demonstração
              </a>
              <Link 
                to="/contato"
                className="btn bg-transparent border border-white text-white hover:bg-white/10"
              >
                Falar com um Consultor
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Related Systems */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Sistemas Relacionados</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Conheça outras soluções da Data Automação que podem complementar o {system.name}.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(systems)
              .filter(([key]) => key !== systemId)
              .slice(0, 3)
              .map(([key, relatedSystem], index) => (
                <AnimatedSection key={key} delay={0.1 * index}>
                  <div className="card group hover:-translate-y-2">
                    <div className="p-6">
                      <div className="text-primary-600 mb-4">{relatedSystem.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{relatedSystem.name}</h3>
                      <p className="text-gray-600 mb-4">{relatedSystem.description}</p>
                      <Link 
                        to={`/sistemas/${key}`}
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      >
                        Saiba mais <ArrowLeft className="ml-1 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemDetailPage;