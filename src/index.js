import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PageDefault from './components/PageDefault';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
  <PageDefault>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
    >
      <h1>404 Ops, quebrou tudo :O</h1>
      <p>
        Você pode jogar,
        <a href="/">voltar pra home :)</a>
        ou
        <a href="http://encurtador.com.br/dltLQ">aprender a fazer o jogo</a>

      </p>

      {/*
      Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui:
      - https://codepen.io/omariosouto/pen/pogmdGE
      E quem quiser programar o jogo:
      - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    */}
      <iframe
        title="Flappy Bird Game"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        width="340"
        height="600"
      />
    </div>
  </PageDefault>
);
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
