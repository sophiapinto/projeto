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

## Obervações importantes

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

![print-erro-no-console-1](/dj_notas/print-erro-no-console-1.png)

> Como a maioria dos erros, ele mesmo ensina como corrigir, no caso esse erro é causado pela atualização do react 17 para o react 18, onde o componente de renderização foi alterado, nesse link ensina a corrigir: [https://reactjs.org/link/switch-to-createroot](https://reactjs.org/link/switch-to-createroot)

- Clicando no botão "Acessar", carrega o print abaixo, com novos erros:

![print-erro-no-console-2](/dj_notas/print-erro-no-console-2.png)

>.
> Esse erro é bem comum, diz que foi usado na html o nome `class` e no react, para evitar problemas com a palavra reservada "class", é usado `className` para referencias as classes do CSS
>
> Para corrigir esse erro é necessario ir nos arquivos:
>
> - [/src/components/PrazoVacinas/index.js](/src/components/PrazoVacinas/index.js)
> - [/src/components/Selection/index.js](/src/components/Selection/index.js)
>
> e substituir "`class`" por "`className`"
>
> ![print-erro-no-console-3](/dj_notas/print-erro-no-console-3.png)

- na pagina [http://localhost:3000/Aprazamento](http://localhost:3000/Aprazamento)

![print-erro-no-console-4](/dj_notas/print-erro-no-console-4.png)

> Encontramos 2 erros
> - o primeiro é bem comum, 
> `Warning: Each child in a list should have a unique "key" prop.
`
trazudindo fica:
`Aviso: Cada filho em uma lista deve ter uma propriedade "chave" exclusiva.
`
> Diz que o react necessita de um id key para os componentes criados em lote, facil de resolver,
>

**Para corrigir o primeiro erro:**
>
> primeiro vamos no arquivo onde o erro está acontecendo, para localizar esse componente com erro:
>
> 1. vamos nas rotatas, que no caso está localizado em [src/pages/Aprazamento/index.js](src/pages/Aprazamento/index.js)
> 2. Identificamos qual componente da rota "/Aprazamento"
>
> ```js
> <Route exact path= "/Aprazamento" component = {Aprazamento} />
> ```
>
> No caso é a de mesmo nome "Aprazamento"
> 3. vamos no inicio do codigo das rotas e identificamos de onde foi importado esse componetne
>
> ```js
>  import Aprazamento from './pages/Aprazamento';
>```
>
> Logo identificamos que a importação é da localizaçao: './pages/Aprazamento'
> 4. então vamos para o arquivo da lozalizção: [src/pages/Aprazamento/index.js](src/pages/Aprazamento/index.js)
>
> 5. Analizando o codigo:
>
> ```js
> import PrazoVacinas from '../../> components/PrazoVacinas';
> 
> function Aprazamento () {
>   return (
>     <div>
>       <PrazoVacinas />
>     </div>
>   );
> }
> 
> export default Aprazamento;
> ```
>
> Identificamos que o erro deve estar no componente `PrazoVacinas`, localizado em [src/components/PrazoVacinas/index.js](src/components/PrazoVacinas/index.js)
>
> Analizando o codigo por estruturas de repetição, encontramos o **.map** nas **linhas 52** e **61**
>
> ```js
> 52 dados.categorias.map((v,i)=> <option value={i}> {v.titulo} </option>
> ```
>
> ```js
> 61 dadosVAC.map((v,i)=> <option value={i}> {v.vacina} </option>
> ```
>
> **A correção:**
> é só colocar o atributo `key = chave-unica`, em cada componente gerado pelos map:
>
> ```js
> 52 dados.categorias.map((v,i)=> <option key={i} value={i}> {v.titulo} </option>
> ```
>
> ```js
> 61 dadosVAC.map((v,i)=> <option key={i} value={i}> {v.vacina} </option>
> ```
