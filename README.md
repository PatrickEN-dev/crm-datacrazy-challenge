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

Este README também conta com um botão "Run insomnia", que da acesso à todas as rotas da API no aplicativo insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=CRM-DATACRAZY_CHALLENGE-API&uri=%7B%22_type%22%3A%22export%22%2C%22__export_format%22%3A4%2C%22__export_date%22%3A%222023-11-06T02%3A43%3A27.094Z%22%2C%22__export_source%22%3A%22insomnia.desktop.app%3Av2023.5.8%22%2C%22resources%22%3A%5B%7B%22_id%22%3A%22req_8194c166a6eb4f019ca320f40b8bfdd6%22%2C%22parentId%22%3A%22fld_5b2ace083ef44cdfa3e65fe59da58914%22%2C%22modified%22%3A1699143828904%2C%22created%22%3A1699143737506%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%2Fdate%22%2C%22name%22%3A%22find_users_by_date%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%7B%22id%22%3A%22pair_69662eaca4874056b3d00c7a4728c346%22%2C%22name%22%3A%22createdAt-gte%22%2C%22value%22%3A%222023-11-03T17%3A40%3A00.000Z%22%2C%22description%22%3A%22%22%7D%2C%7B%22id%22%3A%22pair_a7edaca0266b4ae194f8acbe0ac0580f%22%2C%22name%22%3A%22createdAt-lte%22%2C%22value%22%3A%222023-11-04T23%3A00%3A00.000Z%22%2C%22description%22%3A%22%22%7D%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22User-Agent%22%2C%22value%22%3A%22insomnia%2F2023.5.8%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699059405536%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_5b2ace083ef44cdfa3e65fe59da58914%22%2C%22parentId%22%3A%22fld_da5b3bef62244def8d73a19df71840a3%22%2C%22modified%22%3A1699238353921%2C%22created%22%3A1699059389855%2C%22name%22%3A%22GET's%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1699238351659%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22fld_da5b3bef62244def8d73a19df71840a3%22%2C%22parentId%22%3A%22wrk_0bbe124db473438684f585640ba19d12%22%2C%22modified%22%3A1699238340834%2C%22created%22%3A1699238340834%2C%22name%22%3A%22users%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1699238340834%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22wrk_0bbe124db473438684f585640ba19d12%22%2C%22parentId%22%3Anull%2C%22modified%22%3A1699238525667%2C%22created%22%3A1697643533054%2C%22name%22%3A%22CRM-DATACRAZY-API%22%2C%22description%22%3A%22API%20de%20CRUD%20e%20filtro%20de%20usu%C3%A1rios%20feita%20para%20o%20teste%20t%C3%A9cnico%20na%20empresa%20CRM-DATACRAZY%22%2C%22scope%22%3A%22collection%22%2C%22_type%22%3A%22workspace%22%7D%2C%7B%22_id%22%3A%22req_210fa66e022a4901bc0c9bec6e771ba9%22%2C%22parentId%22%3A%22fld_5b2ace083ef44cdfa3e65fe59da58914%22%2C%22modified%22%3A1699059407494%2C%22created%22%3A1699031099523%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%2F1%22%2C%22name%22%3A%22get_user_by_id%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22%22%2C%22id%22%3A%22pair_b4547db9daf8493c8525c8585e587bfe%22%2C%22disabled%22%3Atrue%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699059405436%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_3ed09b06dd8e410e94e2aa7f9329e1a4%22%2C%22parentId%22%3A%22fld_5b2ace083ef44cdfa3e65fe59da58914%22%2C%22modified%22%3A1699191679437%2C%22created%22%3A1699058218209%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%22%2C%22name%22%3A%22get_most_recent_users%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%7B%22id%22%3A%22pair_acdd875067834761b457c15e926b5ea3%22%2C%22name%22%3A%22orderBy%22%2C%22value%22%3A%22desc%22%2C%22description%22%3A%22%22%7D%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22User-Agent%22%2C%22value%22%3A%22insomnia%2F2023.5.8%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699059405411%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_70951ce26ce44ef3aec879d3f6f8a808%22%2C%22parentId%22%3A%22fld_5b2ace083ef44cdfa3e65fe59da58914%22%2C%22modified%22%3A1699194322457%2C%22created%22%3A1699059366079%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%2Fsearch%22%2C%22name%22%3A%22find_user_name_by_query%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%7B%22id%22%3A%22pair_b53588cfdcb545339849d43531e795e3%22%2C%22name%22%3A%22query%22%2C%22value%22%3A%22pa%22%2C%22description%22%3A%22%22%7D%5D%2C%22headers%22%3A%5B%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699059405386%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_1fd7215c4a1f49748a01b21b951908ee%22%2C%22parentId%22%3A%22fld_5b2ace083ef44cdfa3e65fe59da58914%22%2C%22modified%22%3A1699143734829%2C%22created%22%3A1697643557499%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%2Fall%22%2C%22name%22%3A%22get_all_users%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22User-Agent%22%2C%22value%22%3A%22insomnia%2F2023.5.8%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699059405336%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_7d91889db8d7452eb81f53c88a1fcf90%22%2C%22parentId%22%3A%22fld_5b2ace083ef44cdfa3e65fe59da58914%22%2C%22modified%22%3A1699191665330%2C%22created%22%3A1699058234442%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%22%2C%22name%22%3A%22get_most_older_users%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%7B%22id%22%3A%22pair_e52e7ff904544649a47e125e1ba0f80a%22%2C%22name%22%3A%22orderBy%22%2C%22value%22%3A%22asc%22%2C%22description%22%3A%22%22%7D%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22User-Agent%22%2C%22value%22%3A%22insomnia%2F2023.5.8%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699059405236%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_4d48bb146a544922888b6b47ec88e5fb%22%2C%22parentId%22%3A%22fld_da5b3bef62244def8d73a19df71840a3%22%2C%22modified%22%3A1699238352421%2C%22created%22%3A1697643536474%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%2F%22%2C%22name%22%3A%22create_user%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22name%5C%22%3A%20%5C%22Andreone%20Ribeiro%5C%22%2C%5Cn%5Ct%5C%22email%5C%22%3A%20%5C%22andreribeiro%40mail.com%5C%22%2C%5Cn%5Ct%5C%22phone%5C%22%3A%20%5C%2214992389328%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%7D%2C%7B%22name%22%3A%22User-Agent%22%2C%22value%22%3A%22insomnia%2F2023.5.8%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699238351559%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_78daf13750ba4ccb9cf8c3ee421c9a1c%22%2C%22parentId%22%3A%22fld_da5b3bef62244def8d73a19df71840a3%22%2C%22modified%22%3A1699238353169%2C%22created%22%3A1699033084963%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%2F1%22%2C%22name%22%3A%22delete_user_by_id%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22DELETE%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22User-Agent%22%2C%22value%22%3A%22insomnia%2F2023.5.8%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699238351509%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_abe0135545834d109d451ca03cd44790%22%2C%22parentId%22%3A%22fld_da5b3bef62244def8d73a19df71840a3%22%2C%22modified%22%3A1699238351483%2C%22created%22%3A1699033166853%2C%22url%22%3A%22%7B%7B%20_.BASE_URL%20%7D%7D%2Fusers%2Ff38b5711-6870-4965-ab89-9a41ce55ebcb%22%2C%22name%22%3A%22update_user_by_id%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22PATCH%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22name%5C%22%3A%20%5C%22Andreone%20Ribeiro%20editado%5C%22%2C%5Cn%5Ct%5C%22email%5C%22%3A%20%5C%22andreribeiroEditado%40mail.com%5C%22%2C%5Cn%5Ct%5C%22phone%5C%22%3A%20%5C%2214992389328%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%7D%2C%7B%22name%22%3A%22User-Agent%22%2C%22value%22%3A%22insomnia%2F2023.5.8%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1699238351459%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22env_4f0609a625eb113b642648ddc86e835184148fa0%22%2C%22parentId%22%3A%22wrk_0bbe124db473438684f585640ba19d12%22%2C%22modified%22%3A1699238457597%2C%22created%22%3A1697643533058%2C%22name%22%3A%22Base%20Environment%22%2C%22data%22%3A%7B%22BASE_URL%22%3A%22http%3A%2F%2Flocalhost%3A3001%22%7D%2C%22dataPropertyOrder%22%3A%7B%22%26%22%3A%5B%22BASE_URL%22%5D%7D%2C%22color%22%3Anull%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A1697643533058%2C%22_type%22%3A%22environment%22%7D%2C%7B%22_id%22%3A%22jar_4f0609a625eb113b642648ddc86e835184148fa0%22%2C%22parentId%22%3A%22wrk_0bbe124db473438684f585640ba19d12%22%2C%22modified%22%3A1697643533059%2C%22created%22%3A1697643533059%2C%22name%22%3A%22Default%20Jar%22%2C%22cookies%22%3A%5B%5D%2C%22_type%22%3A%22cookie_jar%22%7D%5D%7D)

## Contato

Se você tiver alguma dúvida, sugestão ou problema relacionado ao projeto, sinta-se à vontade para entrar em contato comigo:

Nome: Patrick
Linkedin: https://www.linkedin.com/in/patrick-almeida-64b897237/
Email: patrickandreia2505@gmail.com
