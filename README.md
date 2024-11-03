**# Projeto Loonic Backend

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

### 8. Documentação da API com Swagger
A documentação da API está disponível através do Swagger, que fornece uma interface interativa para visualizar e testar os endpoints da API.

Acessando a Documentação
Certifique-se de que o servidor está em execução: Para visualizar a documentação, você precisa ter a aplicação rodando. Você pode fazer isso localmente ou via Docker. Para mais informações sobre como iniciar a aplicação, consulte a seção Rodando o Projeto.

Acesse a interface do Swagger: Após iniciar o servidor, abra seu navegador e acesse o seguinte endereço:
```bash
http://localhost:<porta>/api-docs
````
Substitua <porta> pela porta que você configurou na variável de ambiente PORT. O valor padrão da porta é 3000, portanto, a URL seria http://localhost:porta/api-docs.


### 8. Estrutura da Documentação
A documentação da API foi gerada com base nas anotações do Swagger em seus arquivos de código. A estrutura inclui informações como:

Título e descrição da API: API credenciamento de candidatos - Uma API focada no credenciamento de candidatos para empresas.
Versão: 1.0.0
Endpoints: Todos os endpoints disponíveis com suas respectivas descrições, métodos, parâmetros e exemplos de resposta.

Autenticação
A API utiliza autenticação via JWT (JSON Web Token). Para testar endpoints que requerem autenticação, você deve fornecer um token de autenticação válido no cabeçalho Authorization no formato:

```bash
Bearer <seu-token>
```


### 9. Acessando a Aplicação
A aplicação estará disponível em http://localhost:porta.


### Contato
Se você tiver alguma dúvida ou sugestão, entre em contato comigo:

- Nome: Lucas Capella
- Email: capellaaa7@gmail.com
- LinkedIn: [Lucas Capella](https://www.linkedin.com/in/lucas-capella-dev/)


**