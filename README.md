# 🛍️ Store React

### Desafio Prático:

#### Sistema de Produtos com React Router

- **Objetivo:** Criar uma mini aplicação React chamada “StoreReact”, que utiliza React Router para navegação entre páginas, com rotas básicas, dinâmicas e aninhadas.

- **Descrição Geral** - Você deverá criar um pequeno sistema com as seguintes páginas:

  - Home — página inicial com uma mensagem de boas-vindas.
  - Produtos — lista de produtos disponíveis.
  - Detalhes do Produto — exibe informações individuais de cada produto.
  - Dashboard (Rota Aninhada) — painel administrativo com subpáginas:
    - Perfil
    - Configurações

- **Resultado Esperado**

  - ✅ Navegação fluida entre Home, Produtos e Dashboard.
  - ✅ Clicar em um produto leva à página de detalhes (/produtos/:id).
  - ✅ Dentro de /dashboard, é possível navegar entre Perfil e Config sem sair do painel.

- **Desafios Extras (para alunos avançados)**

  - Adicionar uma página 404 para rotas inexistentes.
  - Estilizar o menu com CSS ou Tailwind.
  - Adicionar um botão “Voltar” nos detalhes do produto com useNavigate().

- **Entrega (opcional, mas vai valer ponto extra)**
  - Gerar um PDF com prints do funcionamento, incluindo:
    - Tela inicial,
    - Lista de produtos,
    - Página de detalhes,
    - Dashboard com subrotas.

---

### Estrutura do Projeto:

```
src/
 ┣ 📁 assets/              # Imagens e ícones
 ┃ ┣ 📁 home/
 ┃ ┣ 📁 perfil/
 ┃ ┗ 📁 produtos/
 ┃    ┣ 📁 roupas/
 ┃    ┣ 📁 cosmeticos/
 ┃    ┗ 📁 ferramentas/
 ┣ 📁 components/          # Componentes reutilizáveis
 ┃ ┣ Navbar.jsx
 ┃ ┣ PerfilCard.jsx
 ┃ ┗ ProdutoCard.jsx
 ┣ 📁 pages/               # Páginas principais
 ┃ ┣ Home.jsx
 ┃ ┣ Produtos.jsx
 ┃ ┣ ProdutoDetalhe.jsx
 ┃ ┣ Dashboard.jsx
 ┃ ┣ Perfil.jsx
 ┃ ┣ Config.jsx
 ┃ ┗ NotFound.jsx
 ┣ 📁 routes/            # Gerenciamento das rotas
 ┃ ┗ Router.jsx
 ┣ 📁 styles/            # Estilos
 ┃ ┗ App.css
 ┃ ┗ index.css
 ┣ 📁 utils/
 ┃ ┗ Clientes.js           # Mock de dados (clientes)
 ┃ ┗ Produtos.js           # Mock de dados (produtos)
 ┣ App.jsx
 ┗ index.js

```

### Como Rodar o Projeto:

- `npm install`

- `npm start`

- [http://localhost:3000](http://localhost:3000)
