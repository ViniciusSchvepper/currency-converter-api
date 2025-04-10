# currency-converter-api-backend

## Descrição

Este é um teste técnico desenvolvido para o **Grupo Save**, cujo objetivo foi criar uma aplicação moderna e agradável que permite ao usuário **converter valores entre diferentes moedas**, utilizando uma **API pública de taxas de câmbio** (ExchangeRate API).

Além das funcionalidades solicitadas, foram implementadas **melhorias extras** como:

- Rate limit, timeout e autenticação por token
- Log de requisições persistido em banco de dados
- Deploy completo com banco em ambiente externo
- Integração com frontend React

---

## Tecnologias Utilizadas

- **Node.js** + **Express.js**
- **Sequelize ORM**
- **MySQL** (via Docker/Railway)
- **Axios**
- **Render** (deploy)
- **Docker Compose**

---

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/pt)
- [Docker + Docker Compose](https://docs.docker.com/get-started/get-docker/)
- `yarn` (opcional, mas recomendado)

---

## Instalação e execução local

Clone o repositório:

```bash
git clone https://github.com/seu-user/currency-converter-api.git
cd currency-converter-api
```

## Instale as dependências

```bash
yarn install
```

## Configure as variáveis de ambiente

```
API_KEY=
PORT=
RATE_LIMIT=
RATE_LIMIT_WINDOW=
TIMEOUT=

DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=

DATABASE_URL=
```

## Iniciaize o banco

```bash
docker compose up -d
```

## Rode as migrations

```bash
yarn sequelize db:migrate
```

## Rode a aplicação

```bash
# modo desenvolvimento com babel-node
yarn start:dev

# produção (buildado/transpilado)
yarn start:prod
```

## Rotas

Todas as rotas são protegidas por **API_KEY** via header.

```
GET /currency-converter/convert
```

Parâmetros:

- **from**: Moeda de origem.
- **to**: Moeda destino.
  **amount**: Valor a ser convertido.

## Deploy:

[Backend Render](https://currency-converter-api-ppzs.onrender.com)

### Frontend

[Repositório separado](https://github.com/ViniciusSchvepper/currency-converter-api-front)
[Deploy Vercel](https://currency-converter-api-front.vercel.app)
