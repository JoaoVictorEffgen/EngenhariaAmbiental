# 🚀 Guia de Testes e Modificações - EngenhariaAmbiental

## ✅ Status Atual

✅ Repositório no GitHub: https://github.com/JoaoVictorEffgen/EngenhariaAmbiental  
✅ Código sincronizado  
✅ Workflow GitHub Pages criado  
⏳ **Pendente:** Ativar GitHub Pages (5 minutos)

---

## 🔧 PASSO 1: Ativar GitHub Pages (Manualmente)

### Via Web (Mais Fácil):

1. Vá em: https://github.com/JoaoVictorEffgen/EngenhariaAmbiental/settings/pages
2. Em **"Source"**, clique no dropdown
3. Selecione **"Deploy from a branch"** (se não estiver já selecionado)
4. Escolha **"main"** branch
5. Clique em **"Save"**
6. **Aguarde 2-3 minutos** para o site ser publicado

### Após ativar, seu site estará em:
```
https://joaoviktoreffgen.github.io/EngenhariaAmbiental/
```

---

## 📝 PASSO 2: Fazer Modificações

### Opção A: Via Terminal (Recomendado)

**1. Faça mudanças nos arquivos:**
```powershell
# Edite os arquivos que quiser
# Exemplos:
# - index.html (conteúdo)
# - css/styles.css (estilos)
# - js/main.js (funcionalidades)
# - assets/logo.svg (logo)
```

**2. Verifique o que mudou:**
```powershell
cd "c:\Users\pqpja\OneDrive\Desktop\EngenhariaAmbiental"
& 'C:\Program Files\Git\bin\git.exe' status
```

**3. Adicione e faça commit:**
```powershell
# Adicionar arquivos alterados
& 'C:\Program Files\Git\bin\git.exe' add .

# Fazer commit com mensagem descritiva
& 'C:\Program Files\Git\bin\git.exe' commit -m "Descrição das mudanças aqui"
```

**4. Envie para GitHub:**
```powershell
& 'C:\Program Files\Git\bin\git.exe' push origin main
```

**5. Site atualiza automaticamente em 1-2 minutos!**

---

### Opção B: Diretamente no GitHub (Sem terminal)

1. Vá em: https://github.com/JoaoVictorEffgen/EngenhariaAmbiental
2. Clique no arquivo que quer editar (ex: `index.html`)
3. Clique no lápis (✏️) para editar
4. Faça suas mudanças
5. Clique em **"Commit changes"**
6. Escreva uma mensagem (ex: "Atualizei a descrição")
7. Clique em **"Commit to main"**
8. Site atualiza automaticamente!

---

## 📋 Exemplos de Modificações Comuns

### 1️⃣ Mudar Texto da Homepage
**Arquivo:** `index.html` (procure por `<h1>`, `<p>`, etc)

### 2️⃣ Mudar Cores e Estilos
**Arquivo:** `css/styles.css` (procure por `--taiga-gold`, cores, etc)

### 3️⃣ Adicionar Funcionalidades
**Arquivo:** `js/main.js` (JavaScript)

### 4️⃣ Mudar Logo
**Arquivo:** `assets/logo.svg` (editar ou substituir)

---

## 🔄 Fluxo de Trabalho Rápido

```
1. Editar arquivos locais no VS Code
   ↓
2. Terminal: git add .
   ↓
3. Terminal: git commit -m "Descrição"
   ↓
4. Terminal: git push origin main
   ↓
5. Aguardar 1-2 minutos
   ↓
6. Site atualizado em: joaoviktoreffgen.github.io/EngenhariaAmbiental/
```

---

## 📊 Verificar Deploy Status

1. Vá em: https://github.com/JoaoVictorEffgen/EngenhariaAmbiental/actions
2. Você verá o workflow `Deploy to GitHub Pages` rodando
3. Quando terminar (✅), o site está atualizado!

---

## 🆘 Troubleshooting

**Q: Fiz um push mas o site não atualizou?**  
A: Aguarde 2-3 minutos. Vá em Actions para ver se o workflow completou.

**Q: Não lembro de qual arquivo é qual?**  
A: Abra o arquivo - o próprio VS Code e GitHub mostram claramente o tipo.

**Q: Quero reverter uma mudança?**  
A: Use `git revert` ou desfaça manualmente e faça novo commit.

**Q: Posso trabalhar em uma branch separada?**  
A: Sim! Use `git checkout -b feature/nome` e faça PR quando pronto.

---

## 💡 Comandos Git Úteis

```powershell
# Ver histórico de mudanças
& 'C:\Program Files\Git\bin\git.exe' log --oneline

# Ver mudanças não commitadas
& 'C:\Program Files\Git\bin\git.exe' diff

# Desfazer última mudança
& 'C:\Program Files\Git\bin\git.exe' reset --hard HEAD~1

# Ver branches
& 'C:\Program Files\Git\bin\git.exe' branch -a

# Criar nova branch
& 'C:\Program Files\Git\bin\git.exe' checkout -b feature/sua-feature
```

---

## 🎯 Próximos Passos

1. **HOJE:** Ativar GitHub Pages
2. **AMANHÃ:** Fazer 1ª modificação de teste
3. **SEMANA:** Adicionar novas features
4. **MÊS:** Integrar com analytics, formulários, etc

---

## 📞 Resumo

| Ação | Comando |
|------|---------|
| Ver status | `git status` |
| Adicionar arquivos | `git add .` |
| Fazer commit | `git commit -m "Mensagem"` |
| Enviar para GitHub | `git push origin main` |
| Puxar mudanças | `git pull origin main` |

---

**Tudo pronto! Bora começar a testar e modificar! 🚀**
