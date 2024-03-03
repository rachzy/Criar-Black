import React, { MutableRefObject, useRef } from "react";
import "./Footer.css";
import "./Footer-Mobile.css";

const Footer = () => {
  const inputs = [
    useRef() as MutableRefObject<HTMLInputElement>,
    useRef() as MutableRefObject<HTMLInputElement>,
    useRef() as MutableRefObject<HTMLInputElement>,
  ];

  function handleSubmitButtonClick() {
    const nome = inputs[0].current.value;
    const assunto = inputs[2].current.value;
    window.open(
      `https://api.whatsapp.com/send/?phone=5534988730881&text=Olá, ${
        nome && `me chamo ${nome}, e `
      }acessei o website da Criar Ideias e me interessei pelos seus serviços. Gostaria de agendar uma reunião ${
        assunto && `para falar sobre ${assunto}.`
      }&type=phone_number&app_absent=0`
    );
  }

  return (
    <section className="rodape" id="contact">
      <main className="rodape-division">
        <div className="reuniao">
          <h2>Agende Sua Reunião</h2>
          <h3>Você sera respondido em seu WhatsApp</h3>
          <div className="underline">
            <input name="nome" ref={inputs[0]} type="text" placeholder="Nome" />
          </div>
          <div className="underline">
            <input ref={inputs[1]} type="text" placeholder="E-Mail" />
          </div>
          <div className="underline">
            <input
              name="assunto"
              ref={inputs[2]}
              type="text"
              placeholder="Assunto"
            />
          </div>
          <button onClick={handleSubmitButtonClick}>Enviar</button>
        </div>
        <div className="endereco">
          <h2>Endereço</h2>
          <h3>
            Av. João Alves do Nascimento, 2264 Sala 304 Centro - Patrocínio - MG
            CEP: 38744-528
          </h3>
          <h2 className="contato">Contato</h2>
          <a
            target="_blank"
            href="https://wa.me/5534999454242?text=Ol%C3%A1+Rafa%2C+visitei+seu+site+e+gostaria+de+entender+mais+sobre+a+Criar%21"
          >
            <i className="fa-brands fa-whatsapp"></i> (34) 9 8873-0881
          </a>
          <a target="_blank" href="mailto:contato@criarideias.com.br">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            contato@criarideias.com.br
          </a>
        </div>
        <div className="outros">
          <h2>Outros Serviços</h2>
          <a href="#">Mecanismo de Busca Otimizada</a>
          <a href="#">Desenvolvimento Web</a>
          <a href="#">Mídia Social</a>
          <a href="#">Branding</a>
        </div>
      </main>
    </section>
  );
};

export default Footer;
