
# 🎧 Gerenciador de Podcasts - Node.js + TypeScript

**Bem-vindo ao Gerenciador de Podcasts!**
Esta aplicação foi desenvolvida para facilitar a organização e o gerenciamento de episódios de podcasts usando Node.js com TypeScript e HTTP puro (sem frameworks).

## 🚀 Como rodar o projeto

1. Clone o repositório ou baixe o ZIP.
2. No terminal, entre na pasta do projeto.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Para rodar em modo desenvolvimento (com recarregamento automático):
   ```bash
   npm run dev
   ```
5. Para rodar o projeto compilado:
   ```bash
   npm run start
   ```

O servidor rodará por padrão em: `http://localhost:3333`

---

## 🎯 Funcionalidades implementadas

- **POST /podcasts** → Criar um novo episódio
- **GET /podcasts** → Listar todos episódios
- **GET /podcasts/:id** → Buscar um episódio pelo ID
- **PUT /podcasts/:id** → Atualizar um episódio
- **DELETE /podcasts/:id** → Remover um episódio
- **POST /subscriptions** → Simular assinatura de podcasts
- **GET /audience** → Simular estatísticas de audiência dos episódios

---

## 🛠️ Tecnologias usadas

- Node.js (HTTP nativo)
- TypeScript
- ts-node-dev (modo desenvolvimento)

---

## ✨ Melhorias Futuras Sugeridas

- Implementar autenticação JWT para usuários.
- Permitir upload real de áudios de episódios.
- Paginação de resultados (para muitos episódios).
- Dashboard para estatísticas de audiência em tempo real.
- Integração com APIs de streaming (Spotify, Deezer).

---

## 📝 Inspiração

Projeto inspirado no desafio prático da DIO:
[https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager](https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager)
