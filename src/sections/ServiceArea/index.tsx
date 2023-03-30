import React from "react";
import "./ServiceArea.css";
import "./ServiceArea-Mobile.css";

import GestaoRedesSociais from "../../assets/gestao_redes_sociais.png";
import Marketing from "../../assets/marketing.png";
import DesenvolvimentoWeb from "../../assets/desenvolvimento-web.png";
import DesignerECriacao from "../../assets/designer_e_criacao.png";
import GestaoDeEquipes from "../../assets/gestao-equipes.png";
import GestaoComercial from "../../assets/gestao_comercial.png";
import GestaoComercial1 from "../../assets/gestao_comercialfoto.png";
import GestaoComercial2 from "../../assets/gestao_comercialfoto2.png";
import GestaoComercial3 from "../../assets/gestao_comercialfoto3.png";
import video from "../../assets/Inbound.mp4";
import ServiceBox from "../../components/ServiceBox";

const ServiceArea = () => {
  return (
    <section className="service-area" id="services">
      <div className="service-text">
        <h2>
          Conheça Nossos <span>Serviços</span>
        </h2>
      </div>
      <main className="service-division">
        <ServiceBox
          titulo="Gestão de Redes Sociais"
          thumbnail={GestaoRedesSociais}
          desc="ANÁLISE COMPLETA, BENCHMARKETING E PLANO ESTRUTURAL"
        />
        <ServiceBox
          titulo="Marketing Estrategico e SEO"
          thumbnail={Marketing}
          desc="ESTRATEGIA FOCADA EM MARKETING E SEO"
        />
        <ServiceBox
          titulo="Desenvolvimento Web"
          thumbnail={DesenvolvimentoWeb}
          desc="DESENVOLVIMENTO DE LANDING PAGES E-COMMERCE E OUTROS"
        />
        <ServiceBox
          titulo="Designer e Criação Publicitária"
          thumbnail={DesignerECriacao}
          desc="CRIAÇÃO DE IDENTIDADES VISUAIS E SUAS DEMANDAS"
        />
      </main>

      <main className="gestao-area">
        <main className="gestao-text">
          <h2>
            <span> AUMENTE SUA </span>
            <div className="eficiencia">
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
            </div>{" "}
            <span>OPERACIONAL</span>
          </h2>
        </main>
        <main className="gestao-deco">
          <div className="first-box">
            <img src={GestaoComercial1} alt="" />
          </div>
          <div className="last-box">
            <img src={GestaoComercial2} alt="" />
          </div>
          <div className="box-img">
          <img src={GestaoComercial3} alt="" />
          </div>
        </main>
      </main>

      <main className="gestao-area2">
        <div className="info-box">
          <h2>Alavancando o Sucesso Empresarial</h2>
          <h3>Otimizar sua gestão de vendas e conquistar mais clientes</h3>
          <img src={GestaoComercial} alt="" />
          <p>
          A gestão comercial é um fator crucial para o sucesso de qualquer empresa, independentemente do seu tamanho ou segmento de atuação. Neste artigo, apresentaremos algumas estratégias eficazes para otimizar a gestão de vendas e conquistar mais clientes, incluindo a definição de metas claras, o uso de tecnologias avançadas e a capacitação da equipe de vendas. Com essas dicas práticas, sua empresa estará preparada para enfrentar os desafios do mercado e alcançar o sucesso comercial desejado.
          </p>
        </div>
        <div className="info-box">
          <h2>Desenvolver e Motivar seus Colaboradores</h2>
          <h3>Dicas práticas para liderar com eficiência e aumentar a produtividade da equipe</h3>
          <img src={GestaoDeEquipes} alt="" />
          <p>
          A liderança e gestão de equipes são fundamentais para o sucesso empresarial. Neste artigo, apresentaremos estratégias para formar equipes de alta performance e alcançar resultados expressivos, incluindo a definição de objetivos claros, o estabelecimento de uma comunicação eficiente, a identificação das competências de cada colaborador e a oferta de oportunidades de desenvolvimento.
          </p>
        </div>
      </main>

      <main className="video">
        <div className="video-box">
          <video width={1280} height={720} src={video} controls></video>
        </div>
      </main>
    </section>
  );
};

export default ServiceArea;
