# Projeto Todo List CoreLab

Este é o repositório do projeto Todo List CoreLab, que inclui tanto o front-end quanto o back-end.

## Resumo

Neste pull request, foram realizadas as seguintes ações no projeto:

## Front-end

- **Framework Escolhido**: Optei por utilizar o framework Next.js no front-end devido à sua eficiência, menor consumo de cache e rica gama de recursos incorporados. Next.js se mostrou a escolha ideal para um projeto full-stack, oferecendo eficiência e facilidade de uso.

- **Componentização para Maior Generalização**: No front-end, foi aplicada uma abordagem de componentização para criar componentes reutilizáveis que tornam o código mais limpo e organizado. Componentes como Input, Textarea e Botão foram desenvolvidos para promover a responsabilidade única e a reutilização de código.

- **Filtros de Pesquisa**: Implementei funcionalidades de pesquisa que permitem aos usuários filtrar os dados com base em critérios como nome, data e ordenação. Utilizei consultas ORM com Prisma para lidar com as operações de pesquisa de forma eficiente.

- **Dockerização**: A aplicação foi dockerizada para facilitar o desenvolvimento e a implantação em ambientes consistentes e controlados.

- **ContextAPI com Axios**: Utilizei o ContextAPI em conjunto com Axios para gerenciar o estado global do aplicativo e realizar solicitações à API de forma eficiente. Isso simplificou o compartilhamento de dados entre componentes e melhorou o desempenho, uma vez que o Axios lida com a comunicação com o back-end de forma eficiente.

## Back-end

- **Framework Utilizado**: No back-end, escolhi o Nest.js devido à sua eficiência e à capacidade de lidar com tarefas comuns de back-end, como roteamento, validação e manipulação de erros.

- **Banco de Dados com Prisma**: Utilizei o Prisma como ORM para interagir com o banco de dados. Isso simplificou a comunicação com o banco de dados e permitiu o uso de consultas SQL seguras para as operações de pesquisa.

- **Filtros de Pesquisa**: No back-end, adicionei lógica para filtrar os dados com base nos critérios fornecidos pelos usuários. Implementei consultas eficientes usando o Prisma para realizar pesquisas por nome, data e ordenação.

- **Tratamento de Erros**: O Nest.js facilitou o tratamento de erros, tornando o código mais limpo e organizado, e garantindo que os erros sejam tratados de forma adequada.

- **Arquitetura Sólida**: Segui os princípios SOLID para manter o código limpo, organizado e com funções autoexplicativas.

- **Roteamento com Next.js**: Utilizei o Next.js com o sistema de roteamento AppRouter, que fornece um roteamento otimizado e amplo, facilitando a navegação, manipulação de query parameters e construção de páginas dinâmicas.

Este conjunto de tecnologias e práticas proporciona um ambiente de desenvolvimento sólido, garantindo eficiência tanto no front-end quanto no back-end.

🚀
