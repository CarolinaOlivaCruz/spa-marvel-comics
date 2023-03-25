<div align="center">
<img alt="homepage the project" src="https://github.com/CarolinaOlivaCruz/spa-mavel-comics/blob/main/src/assets/img/marvel.png" />
</div>

<div align="center">
<h3>
  SPA - Marvel Comics
</h3>
<p>Uma aplicação web E-commerce onde é possível ver todos os quadrinhos, ver seus detalhes e adicioná-los ou removê-los do carrinho</p>
</div>

<p align="center">
    <img alt="Badge indicando que o projeto foi criado em março de 2023" src="https://img.shields.io/badge/Data%20de%20cria%C3%A7%C3%A3o-Março%2F2023-blue">
    <img alt="Badge indicando que o status do projeto está 'Em andamento'" src="https://img.shields.io/badge/Status-Em andamento-blue">
</p>

• <a href="#descricao">Descrição</a>
<br>
• <a href="#Start">Start da aplicação</a>
<br>
• <a href="#funcionalidades">Funcionalidades</a>
<br>
• <a href="#Bugs">Report bugs</a>
<br>
• <a href="#doc">Documentação da API da Marvel</a>
<br>
• <a href="#Bibliotecas">Bibliotecas</a>
<br>
• <a href="#Ferramentas">Ferramentas</a>
<br>
• <a href="#Desenvolvedora">Desenvolvedora</a>
<br>

<h2 id="descricao">:pencil2: Descrição</h2>
A aplicação é uma espécie de catálogo de quadrinhos, que deve conter uma lista de quadrinhos e uma tela de detalhes para cada quadrinho. Além disso, a aplicação deve permitir o envio dos quadrinhos para um endereço selecionado no mapa, utilizando o Google Maps.

<h2 id="Start">:computer: Start da aplicação</h2>
Para inicialização das depêndecias projeto, após fazer o clone SSH, abrir o terminal, e usar comando yarn, e após isso usar o comando yarn start

Link Vercel: 
<a href="https://spa-mavel-comics-carolinaolivacruz.vercel.app/">Clique aqui</a> para acessar o projeto.

<h2 id="Bibliotecas">:books: Bibliotecas utilizadas</h2>

- [x] ReactJs
- [x] Styled components
- [x] Context API
- [x] React-hook-form
- [x] React toastfy
- [x] React Router DOM
- [x] Axios

<h2 id="Ferramentas">:wrench: Ferramentas utilizadas</h2>

- [x] VS Code
- [x] Github
- [x] Typescript
- [x] Node 16.18.0 

<h2 id="funcionalidades">:hammer: Funcionalidades</h2>

<div align="center">
<img alt="feature modal" src="https://github.com/CarolinaOlivaCruz/spa-mavel-comics/blob/main/src/assets/img/modal-marvel.png" />
</div>

### Gerais
- Consumo da Api da Marvel
- Consumo da Api do Google Maps
- Lista de quadrinhos
- Modal que renderiza os detalhes do quadrinho selecionado
- Filtragem por títulos e descrição dos quadrinhos
- Adicionar e remover o quadrinho selecionado ao carrinho
- Busca pelo endereço através da Api do Google Maps

<div align="center">
<img alt="search address in API Google Maps" src="https://github.com/CarolinaOlivaCruz/spa-mavel-comics/blob/main/src/assets/img/search-google-maps.png" />
</div>

<h2 id="Bugs">:clipboard:  Report bugs</h2>
To Do:

- [ ] Padronizar as fonts
- [ ] Padronizar a paleta de cores no globalStyles
- [ ] Adicionar funcionalidade e estilo de button disable
- [ ] Corrigir bugs da funcionalidade de filtro, quando o filtro for clicado mas não receber 
nenhum valor deve listar todos os cards, caso o quadrinho não foi encontrado, retorna mensagem 
Nenhum quadrinho foi encontrado
- [ ] Adicionar funcionalidade de see caso um qudrinho for adicionado mais de uma vez,
que renderize apenas um no carrinho e atualize o preço e o total
- [ ] Adicionar funcionalidade que é possível utilizar as APIs do Google Maps para exibir
um mapa na tela e permitir que o usuário selecione um endereço, visto que até o momento se
faz a busca no Google Maps, todavia não é possível selecionar o endereço
- [ ] Ajustar o Header para que no seu style, ele possa receber propriedades para se adaptar as páginas
- [ ] Ajustar o deploy da Vercel, visto que não renderiza os quadrinhos
- [ ] Implementar segurança de Keys privadas

<h2 id="doc">:page_facing_up: Documentação da API da Marvel </h2>
 <a href="https://developer.marvel.com/docs">Clique aqui</a> para acessar a Api da Marvel.
 <br/>
 <a href="https://developers.google.com/maps/documentation/javascript/overview">Clique aqui</a> para acessar a Api do Google Maps.
 
 <h2>Requisitos detalhados para funcionalidades desenvolvidas e que serão desenvolvidas:</h2>

Com base no requisito fornecido, podemos entender que a aplicação é uma espécie de catálogo de quadrinhos, que deve conter uma lista de quadrinhos e uma tela de detalhes para cada quadrinho. Além disso, a aplicação deve permitir o envio dos quadrinhos para um endereço selecionado no mapa, utilizando o Google Maps.

Para implementar essa solução, é possível seguir os seguintes passos:

Definição a arquitetura da aplicação: Flux Architecture, compatível com ReactJs.

Implementar a tela de lista de quadrinhos: A primeira tela da aplicação deve exibir uma lista de quadrinhos, com informações como título, descrição, entre outros.

Implementar o modal de detalhe do quadrinho: Ao clicar em um quadrinho na lista, o usuário deve ser levado para uma tela de detalhes, que exibe informações mais detalhadas sobre o quadrinho.

Integrar o Google Maps: Para permitir o envio dos quadrinhos para um endereço selecionado no mapa, é necessário integrar o Google Maps à aplicação. Para isso, é necessário criar uma conta no Google Maps Platform e obter uma chave de API. Com essa chave, é possível utilizar as APIs do Google Maps para exibir um mapa na tela e permitir que o usuário selecione um endereço. 

Implementar a funcionalidade de envio dos quadrinhos: Depois que o usuário selecionar o endereço no mapa, é necessário implementar a funcionalidade de envio dos quadrinhos. Isso pode ser feito por meio de um formulário que permite ao usuário inserir suas informações de contato e outras informações relevantes, como a quantidade de quadrinhos que deseja enviar e o horário preferido para a entrega.

Adicionar funcionalidades extras: Para agregar valor à solução, é possível adicionar outras funcionalidades, como uma barra de pesquisa para encontrar quadrinhos específicos, uma lista de desejos para que o usuário possa salvar seus quadrinhos favoritos, uma seção de avaliações e comentários para cada quadrinho, entre outras.

<h2 id="Desenvolvedora">:construction_worker: Desenvolvedora</h2>
 
<a href="https://github.com/CarolinaOlivaCruz">
  <img width="120px" src="https://avatars.githubusercontent.com/u/78989471?v=4">
</a>
