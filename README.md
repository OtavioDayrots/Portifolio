# Portfólio

Bem-vindo ao meu portfólio! Aqui você encontra uma coleção de projetos, estudos e experimentos front-end. O objetivo é apresentar habilidades em HTML, CSS (incluindo utilitários no estilo Tailwind) e JavaScript, além de boas práticas de estruturação, acessibilidade e performance.

## 🔗 Demo
- Publicação (GitHub Pages ou similar): https://otaviodayrots-portifolio.pages.dev
- Visualização local: abra o arquivo `index.html` diretamente no navegador ou use uma extensão como Live Server.

## 🖼️ Prévia
Algumas capturas dos projetos destacados (as imagens estão em `public/Image`):

<img src="public/Image/find_github.png" alt="Find GitHub" width="320">
<img src="public/Image/filmesDB.png" alt="Filmes DB" width="320">
<img src="public/Image/galeria_voucher.png" alt="Galeria Voucher" width="320">
<img src="public/Image/image_share.png" alt="Image Share" width="320">
<img src="public/Image/energy.png" alt="Energy" width="320">

## 🧰 Tecnologias e Recursos
- HTML5 semântico
- CSS3
- **Tailwind CSS v3.4** (configuração local otimizada)
- JavaScript (client-side)
- Node.js & npm (para build do Tailwind)
- PostCSS & Autoprefixer

## 📁 Estrutura do Projeto
```text
D:\GitHub\Portifolio\
  ├─ index.html
  ├─ package.json
  ├─ tailwind.config.js
  ├─ postcss.config.js
  ├─ public\
  │  ├─ styles.css (gerado automaticamente)
  │  └─ Image\
  │     ├─ energy.png
  │     ├─ filmesDB.png
  │     ├─ find_github.png
  │     ├─ galeria_voucher.png
  │     └─ image_share.png
  └─ Src\
     ├─ styles\
     │  └─ global.css (CSS de entrada com @tailwind)
     └─ views\
        └─ contato.html
```

- `index.html`: página principal do portfólio
- `package.json`: dependências e scripts do projeto
- `tailwind.config.js`: configuração do Tailwind CSS
- `postcss.config.js`: configuração do PostCSS
- `Src/styles/global.css`: CSS de entrada com diretivas Tailwind e estilos customizados
- `Src/views/contato.html`: página de contato
- `public/styles.css`: CSS final otimizado (gerado automaticamente)
- `public/Image`: assets estáticos (imagens de prévia dos projetos)

## ▶️ Como rodar localmente

### Pré-requisitos
- Node.js instalado
- npm (vem com o Node.js)

### Instalação e execução
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/OtavioDayrots/Portifolio.git
   cd Portifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Gere o CSS para produção:**
   ```bash
   npm run build-css
   ```

4. **Para desenvolvimento (monitora mudanças):**
   ```bash
   npm run watch-css
   ```

5. **Abra no navegador:**
   - Opção 1: Clique duas vezes em `index.html`
   - Opção 2: Use Live Server no VS Code (recomendado)

### Scripts disponíveis
- `npm run build-css`: Gera CSS otimizado para produção
- `npm run watch-css`: Monitora mudanças e atualiza CSS automaticamente

## 🧭 Navegação e Conteúdo
- Seções do `index.html` apresentam projetos com imagens, descrições e links.
- A página `Src/views/contato.html` contém informações e formulário de contato (se aplicável).

## ♿ Acessibilidade e SEO (recomendações adotadas/planejadas)
- Elementos semânticos (`<header>`, `<main>`, `<section>`, etc.)
- Texto alternativo (`alt`) em imagens e contraste adequado
- Metadados básicos (título, descrição) e uso criterioso de headings

## 🚀 Deploy (GitHub Pages)
1. **Gere o CSS para produção:**
   ```bash
   npm run build-css
   ```

2. **Faça commit e push:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

3. **Configure o GitHub Pages:**
   - No GitHub, acesse Settings → Pages
   - Em "Build and deployment", selecione "Deploy from a branch"
   - Branch: `main`, pasta `/root` e salve

4. **Aguarde a publicação** e atualize o link na seção "Demo"

> **Importante:** Sempre rode `npm run build-css` antes de fazer deploy para garantir que o CSS esteja atualizado!

## 🤝 Contribuição
- Sugestões e melhorias são bem-vindas via Issues e Pull Requests
- Para alterações maiores, descreva sua proposta antes de abrir o PR

## 📫 Contato
- **Email:** joseotavioalves321@gmail.com
- **WhatsApp:** (67) 98115-5987
- **LinkedIn:** [linkedin.com/in/joseotaviodayrots](https://www.linkedin.com/in/joseotaviodayrots)
- **GitHub:** [github.com/OtavioDayrots](https://github.com/OtavioDayrots)
- **Instagram:** [@tavio_vieira](https://www.instagram.com/tavio_vieira)

---
Se este portfólio foi útil ou inspirador, considere deixar uma estrela no repositório!
