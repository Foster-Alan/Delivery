# **TrybeDelivery**


Este projeto foi desenvolvido pelo grupo 1 da turma 24A da escola Trybe. Neste projeto tinhamos como objetivo desenvolver um app de delivery de bebidas. Nele existem 3 fluxos diferentes , Cliente , Vendedor e Administrador.

## Fluxo Cliente:

**Página de Login:**

![App Screenshot](https://iili.io/HvUvOBe.md.png)

Onde o utilizador pode logar na sua conta ou visualizar caso queira a sua password.

**Página de Registro:**

![App Screenshot](https://iili.io/HvU8WFa.md.png)

Onde o utilizador pode registar a sua conta

**Página de Produtos:** 

![App Screenshot](https://iili.io/HvU88MX.md.png)

Onde o utilizador pode ver todos os produtos do app , carrousel sobre os produtos mais vendidos , modal de informação , filtros de pesquisa e adicionar itens ao carrinho.

**Página de de realizar Pedido:**

![App Screenshot](https://iili.io/HvUUKml.md.png)

Onde o cliente pode realizar um pedido.


**Página de Pedidos:**

![App Screenshot](https://iili.io/HvUSNUb.png)

Onde o cliente pode visualizar todos os seus pedidos e o status deles.

**Página de Detalhes do pedido:**

![App Screenshot](https://iili.io/HvUU9qX.md.png)

Onde o cliente pode visualizar os Detalhes de cada pedido.

**Página de Perfil:**

![App Screenshot](https://iili.io/HvUUCL7.md.png)

Onde o cliente resetar a sua password e guardar o seu endereço.

## Fluxo Vendedor:

**Página de Login Página de Registro Página de Perfil** 

**Página de Pedidos:**

![App Screenshot](https://iili.io/HvUURmQ.md.png)

Onde o vendedor pode visualizar todos os seus pedidos e o status deles.

**Página de Detalhes do pedido:**

![App Screenshot](https://iili.io/HvUUVkv.md.png)

Onde o vendedor pode visualizar os Detalhes de cada pedido e atualizar eles.

## Fluxo Administrador:

**Página de Login Página de Registro Página de Perfil** 

**Adicinar usuários:**

![App Screenshot](https://iili.io/HvUUbvj.png)

Onde o Administrador pode adicionar usuários pelo role.

**Adicinar produtos:**

![App Screenshot](https://iili.io/HvUg9jV.png)

Onde o Administrador pode adicionar produtos ao App.

**Painel de Administrador:**

![App Screenshot](https://iili.io/HvUgu6X.png)

Onde o Administrador pode visualizar total de usuários , vendedores , produtos e vendas do sistema. Gráficos sobre os pordutos mais vendidos e os melhores vendedores




# O que foi desevolvido
- Forms para registrar e fazer o login de usuários.
- Uma rota login e tokens de autenticação.
- Uma API CRUD para obter os dados que serão usados pela aplicação.
- Uma API CRUD e validações que possam ser necessárias.
- Conexão da aplicação express em um banco de dados para o armazenamento dos dados da aplicação.
- Manipulação de objetos e arrays do javascript.
## Stack utilizada

**Front-end:** React, Redux, SASS, React Router , Chart.js

**Back-end:** Node, Express, Mysql , Squelize , Docker

## Screenshots



## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:FranciscoCosta/TrybeDelivery.git
```

Instale as dependências

```bash
  npm install
```

Entre na pasta back-end adicione o ficheiro **.env** com os seus dados.

```bash
  cd back-end
  .env ->>
                NODE_ENV=development
                API_PORT=3001
                MYSQL_HOST="oseulocalhoost"
                MYSQL_PORT="asuaporta"
                MYSQL_USER="oseuusuario"
                MYSQL_PASSWORD="asuasenha"
                MYSQL_DB_NAME=delivery-app
                EVAL_ALWAYS_RESTORE_DEV_DB=true
  npm install
```

Entre na pasta front-end

```bash
  cd front-end
  npm install
```

Inicie o servidor back-end

```bash
  npm run dev
```

Inicie o servidor front-end

```bash
  npm start
```

# Desenvolvedores
## Alan Foster
  - [Linkdin](https://www.linkedin.com/in/foster-/)
  - [Github](https://github.com/Foster-Alan)
## Francisco Costa
  - [Linkdin](https://www.linkedin.com/in/francisco-costa-dev/)
  - [Github](https://github.com/FranciscoCosta)
## Renan Casarin
  - [Linkdin](https://www.linkedin.com/in/renancasarinmunhoes/)
  - [Github](https://github.com/munhoesrc)
## Gustavo Vasconcelos
  - [Linkdin](https://www.linkedin.com/in/vasconcelos-gu/)
  - [Github](https://github.com/vasconcelosguu)
## Rafael Silva
  - [Linkdin](https://www.linkedin.com/in/rafael-soares-dev/)
  - [Github](https://github.com/rafaelsisoares)
