<p align="center">
   <img src="https://github.com/Jeffx234/ignews/blob/main/public/images/logo.svg" alt="IG News" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/jeferson-luis-055720210/">
      <img alt="Jeferson Luis" src="https://img.shields.io/badge/-Jeferson Luis-eba417?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-eba417">
</p>

> <b>ig.news</b> é o terceiro projeto criado no chapter 3 da trilha de React do Ignite da [Rocketseat](https://github.com/Rocketseat). O projeto consiste num blog onde para ler algum post você deverá ser assinante, e é usado a API do [Stripe](https://stripe.com/) para o controle de pagamento e salvando os dados dos inscritos no FaunaDB.

<div align="center">
  <sub>O <strong>ig.news</strong> foi desenvolvido com ❤︎ pelo
    <a href="https://github.com/Jeffx234">Jeferson Luis</a>
  </sub>
</div>

# :pushpin: Conteúdo

- [Tecnologias](#computer-tecnologias)
- [Executando](#construction_worker-executando)
- [Desafios](#atom_symbol-desafios)
- [Autores](#computer-autores)
- [Licença](#closed_book-licença)

### Fotos

<div>
   <img src="https://github.com/Jeffx234/ignews/blob/main/src/assets/images/ignews.png" width="450px" />
   <img src="https://github.com/Jeffx234/ignews/blob/main/src/assets/images/ignews1.png" width="450px" />
   <img src="https://github.com/Jeffx234/ignews/blob/main/src/assets/images/ignews2.png" width="450px" />
   <img src="https://github.com/Jeffx234/ignews/blob/main/src/assets/images/ignews3.png" width="450px" />
</div>

# :computer: Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [FaunaDB](https://fauna.com/)'
- [Axios](https://github.com/axios/axios)
- [Prismic](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# :construction_worker: Executando

```bash
# Clone o Repositório
$ https://github.com/Jeffx234/ignews.git
```

```bash
# Acesse a pasta do projeto
$ cd ignews
```

```bash
# Crie um arquivo .env.local e configure as váriaveis de ambiente

# Stripe
STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_API_PRICE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCESS_URL=
STRIPE_CANCEL_URL=

# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# FaunaDB
FAUNADB_KEY=

# Prismic CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```

```bash
# Baixe as dependendências
$ yarn
```

```bash
# Execute
$ yarn start
```

Acesse <http://localhost:3000> para ver o resultado

# :computer: Autores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/Jeffx234/">
        <img src="https://avatars.githubusercontent.com/u/86368923?s=400&u=3199e2a3a463e6535c9c93ee07005338070c411c&v=4" width="100px;" alt="Jeferson Luis"/>
        <br />
        <sub>
          <b>Jeferson Luis</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/jeferson-luis-055720210/" title="Linkedin">@jefersonluis91</a>
       <br />
    </td>
    <td align="center">
      <a href="http://github.com/Rocketseat">
        <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Jeferson Luis"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/Rocketseat" title="Linkedin">@Rocketseat</a>
       <br />
    </td>
  </tr>
</table>

# :closed_book: Licença

Este projeto está sob a licença [MIT](./LICENSE).


yarn add jest jest-dom @testing-library/jest-dom @testing-library/dom @testing-library/react babel-jest -D