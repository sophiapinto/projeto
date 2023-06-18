<h3 align="center">
  Ferramenta para verificação de aprazamento de vacinas.
</h3>

<p align="center">Projeto inicializado com create-react-app.</p>
<p align="center">Uso de PureComponents.</p>
<p align="center">Rotas através do react-router-dom.</p>


## PROGRAMADORas

- [Sophia Pinto](https://github.com/sophiapinto)
- [Elisa](https://github.com/sophiapinto)


## 🚀 Tecnologias

- ⚡ NodeJS

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `projeto-react`;
3. Rode `yarn` para instalar as dependências;
4. Rode `yarn start` roda o projeto.

<!--
## ⚡️ Como contribuir
- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.
Depois que o merge da sua pull request for feito, você pode deletar a sua branch.
## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
 -->
---
Feito com 💖 by Elisa e Sophia Pinto.



## Obervações importantes!

### Sobre o gerenciador de pacotes

- Ao utilizar `yarn` não se pode usar o `npm` para instalar dependências.
- Utilizar dois gerenciadores de pacote no mesmo projeto pode gerar problemas de compatibilidade de dependências, e causar o problema que eles vieram para resolver -- "Funciona na minha maquina"

Dito isto, utilize apenas o `yarn`, como foi citado em ["Pré-requisitos"](#-pré-requisitos), este é o gerenciador de pacotes oficializado neste projeto.

**Para seguir essa boa pratica, é necessário:**

- deletar o arquivo [/package-lock.json](/package-lock.json)
- Utilizar `yarn add nome-do-pacote-que-deseja-instalar` no lugar de `npm install nome-do-pacote...`

### Sobre o código react

Ao executar o servidor, e abrir o console no navegador é possível observar os erros que o projeto apresta naquela página, recomendo acessarem com frequência essa ferramenta e não ignorar os erros apresentados.

- Abaixo o erro que aparece na pagina inicial, esse erro vai aparecer em todas as subpaginas, pois é um erro no nivel do arquivo [src/index.js](src/index.js)

<img src='/dj_notas/print-erro-no-console-1.png'>

> Como a maioria dos erros, ele mesmo ensina como corrigir, no caso esse erro é causado pela atualização do react 17 para o react 18, onde o componente de renderização foi alterado, nesse link ensina a corrigir: [https://reactjs.org/link/switch-to-createroot](https://reactjs.org/link/switch-to-createroot)
