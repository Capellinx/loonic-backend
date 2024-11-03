# Projeto Loonic Backend

Este repositório contém a implementação do backend do projeto Loonic. A aplicação é construída com Node.js, TypeScript e Prisma, utilizando PostgreSQL como banco de dados.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker](https://www.docker.com/) (opcional, para uso com Docker)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres)

## Configuração do Ambiente

### 1. Clonando o Repositório

Clone este repositório em sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/Capellinx/loonic-backend
cd seu-repositorio
```

### 2. Configuração do Banco de Dados
Certifique-se de que o PostgreSQL ou suba um ambiente docker está instalado e em execução. Crie um banco de dados chamado loonic e configure as credenciais de acesso:

Caso você opte por usar o PostegreSQL local siga o exemplo:
```bash
psql -U postgres
CREATE DATABASE loonic;
```
###  3. Configuração das Variáveis de Ambiente
Crie um arquivo .env na raiz do seu projeto com as seguintes variáveis de ambiente:
```dotenv
DATABASE_URL="postgresql://usuario:password@localhost:5432/db_name?schema=public"

PORT=<porta que a aplicacão vai rodar>

JWT_SECRET=<secret do token>
JWT_REFRESH_<secret do refresh token>
```
### 4. Instalando Dependências
Instale as dependências do projeto usando npm:

### 5. Rodando Migrations do Prisma
Para configurar o banco de dados com as migrations do Prisma, execute os seguintes comandos:

```bash
npx prisma migrate deploy
```
Se você achar necessário criar uma nova migration rode esse comando após criar uma model no schema.prisma

```bash
npx prisma migrate dev --name <nome-da-migration>
```
### 6. Rodando o Projeto
Usando Docker
Se você deseja rodar a aplicação com Docker, você pode utilizar o seguinte comando:

```bash
docker-compose up --build
````

Rodando Localmente
Se você preferir rodar a aplicação localmente, execute:
```bash
npm run dev
```
### 7. Acessando a Aplicação
A aplicação estará disponível em http://localhost:porta.


### Contato
Se você tiver alguma dúvida ou sugestão, entre em contato comigo:

- Nome: Lucas Capella
- Email: capellaaa7@gmail.com
- LinkedIn: [Lucas Capella](https://www.linkedin.com/in/lucas-capella-dev/)


