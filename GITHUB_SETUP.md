# 📘 Guia: Enviando para GitHub

## ⚡ Pré-requisitos

### 1️⃣ Instalar Git

**Windows:**
- Baixe em: https://git-scm.com/download/win
- Execute o instalador e siga os passos padrão
- Após instalar, reinicie o VS Code

**Verificar instalação:**
```powershell
git --version
```

### 2️⃣ Configurar Git Globalmente

```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## 🚀 Passo-a-Passo para GitHub

### PASSO 1: Criar Repositório no GitHub

1. Vá em https://github.com/new
2. **Repository name:** `EngenhariaAmbiental`
3. **Description:** `Consultoria e licenciamento ambiental - Site profissional`
4. Escolha **Public** (público) ou **Private** (privado)
5. ⚠️ **NÃO marque** "Initialize with README" (já temos!)
6. Clique em **"Create repository"**

---

### PASSO 2: Configurar Git Localmente

Abra PowerShell no VS Code e execute:

```powershell
cd "c:\Users\pqpja\OneDrive\Desktop\EngenhariaAmbiental"

# Inicializar repositório
git init

# Configurar nome e email (local)
git config user.name "Seu Nome"
git config user.email "seu@email.com"

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Marques Engenharia Ambiental website"
```

---

### PASSO 3: Conectar ao GitHub

Depois de criar o repositório no GitHub, copie os comandos mostrados na tela e execute:

```powershell
# Adicionar repositório remoto
git remote add origin https://github.com/[SEU_USUARIO]/EngenhariaAmbiental.git

# Renomear branch para 'main'
git branch -M main

# Fazer push para GitHub
git push -u origin main
```

> **Nota:** Se pedir autenticação, você pode usar:
> - **Token de acesso pessoal** (recomendado para segurança)
> - **SSH key** (mais seguro e fácil para futuros pushes)

---

## 🔐 Autenticação (GitHub)

### Opção A: Token de Acesso Pessoal

1. Vá em: https://github.com/settings/tokens
2. Clique em "Generate new token"
3. Selecione escopos: `repo`, `write:repo_hook`
4. Copie o token gerado
5. Quando pedir senha, use o **token como senha**

### Opção B: SSH (Recomendado)

```powershell
# Gerar chave SSH
ssh-keygen -t ed25519 -C "seu@email.com"

# Adicionar chave ao GitHub
# Copie o conteúdo de ~/.ssh/id_ed25519.pub
# Vá em: https://github.com/settings/keys
# Cole em "New SSH key"

# Usar SSH ao invés de HTTPS
git remote set-url origin git@github.com:[SEU_USUARIO]/EngenhariaAmbiental.git
```

---

## 📝 Comandos Úteis (após iniciar)

```powershell
# Ver status dos arquivos
git status

# Ver histórico de commits
git log

# Ver branches
git branch

# Fazer commit de mudanças
git add .
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push

# Receber mudanças do GitHub
git pull

# Criar nova branch para desenvolvimento
git checkout -b feature/nova-feature

# Trocar de branch
git checkout main

# Mergear branch
git merge feature/nova-feature
```

---

## ✅ Verificação Final

Após fazer o push, você deve ver:

```powershell
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/[seu-usuario]/EngenhariaAmbiental.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Então acesse: `https://github.com/[seu-usuario]/EngenhariaAmbiental`

---

## 🎉 Pronto!

Seu repositório está no GitHub! Agora você pode:
- ✅ Clonar em outros computadores
- ✅ Fazer modificações e commits
- ✅ Colaborar com outras pessoas
- ✅ Hospedar via GitHub Pages (FREE!)

**Para GitHub Pages (site estático gratuito):**
1. Vá em Settings > Pages
2. Em "Source", selecione "Deploy from a branch"
3. Escolha "main" branch
4. Site fica disponível em: `https://[seu-usuario].github.io/EngenhariaAmbiental/`

---

## 📞 Dúvidas?

Se der erro, compartilhe a mensagem e ajudarei! 🚀
