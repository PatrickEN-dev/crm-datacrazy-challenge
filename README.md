# 💼 CRM-Datacrazy-Challenge

**Descrição** 📝:
O CRM-Datacrazy-Challenge é um projeto de gerenciamento de contatos de clientes que foi desenvolvido utilizando Node.js 18 e as frameworks Next.js (para o frontend) e Nest.js (para o backend). Este sistema permite que os usuários cadastrem, visualizem, atualizem e excluam informações de contatos de clientes.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js 18
- Yarn (ou NPM)
- Docker (opcional, caso deseje usar Docker para executar o projeto)

## Instalação

1. Clone este repositório em sua máquina local:
2. git clone https://github.com/PatrickEN-dev/client-contacts-management.gitcd client-contacts-management

### Frontend

2. Navegue para a pasta do frontend:

cd frontend

3. Instale as dependências do frontend:
   yarn install
   ou, se estiver usando NPM
   npm install

### Backend

4. Navegue para a pasta do backend:
   cd backend

5. Instale as dependências do backend:
   yarn install
   ou, se estiver usando NPM
   npm install

## Executando o Projeto com Docker

🐳 _(Opcional) Caso você deseje executar o projeto usando Docker, siga os passos abaixo:_

1. Certifique-se de que o Docker esteja instalado e em execução em sua máquina.

2. Navegue para a pasta raiz do projeto.

3. Execute o seguinte comando para criar e iniciar os serviços do Docker:
   docker-compose up -d

O frontend estará disponível em: [http://localhost:3000](http://localhost:3000).
O backend estará disponível em: [http://localhost:3001](http://localhost:3001).

## Executando o Projeto sem Docker

### Frontend

6. Para executar o frontend, utilize o seguinte comando:
   yarn dev
   ou, se estiver usando NPM
   npm run dev

O frontend estará disponível em: [http://localhost:3000](http://localhost:3000).

### Backend

7. Para executar o backend em modo de desenvolvimento, utilize o seguinte comando:
   yarn start:dev
   ou, se estiver usando NPM
   npm run start:dev

8. Para executar as migrações do prisma para que as tabelas do banco de dados sejam criadas:
   yarn prisma migrate dev
   ou, se estiver usando NPM
   npm run prisma migrate dev

O backend estará disponível em: [http://localhost:3001](http://localhost:3001).

## Contato

Se você tiver alguma dúvida, sugestão ou problema relacionado ao projeto, sinta-se à vontade para entrar em contato comigo:

Nome: Patrick
Linkedin: https://www.linkedin.com/in/patrick-almeida-64b897237/
Email: patrickandreia2505@gmail.com
