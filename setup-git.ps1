#!/usr/bin/env powershell

# Script automatizado para enviar projeto ao GitHub
# Uso: .\setup-git.ps1

Write-Host "🚀 Marques Engenharia Ambiental - Setup Git" -ForegroundColor Cyan
Write-Host "=========================================`n" -ForegroundColor Cyan

# Verificar se Git está instalado
$gitInstalled = git --version 2>$null
if (-not $gitInstalled) {
    Write-Host "❌ Git não está instalado!" -ForegroundColor Red
    Write-Host "Baixe em: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Git detectado: $gitInstalled`n" -ForegroundColor Green

# Perguntar informações
$gitName = Read-Host "📝 Seu nome (para commits)"
$gitEmail = Read-Host "📧 Seu email (para commits)"
$gitUser = Read-Host "👤 Seu usuário GitHub"
$repoUrl = "https://github.com/$gitUser/EngenhariaAmbiental.git"

Write-Host "`n📋 Configuração resumida:" -ForegroundColor Cyan
Write-Host "  Nome: $gitName"
Write-Host "  Email: $gitEmail"
Write-Host "  Usuário GitHub: $gitUser"
Write-Host "  Repositório: $repoUrl`n" -ForegroundColor Yellow

$confirm = Read-Host "Deseja continuar? (S/N)"
if ($confirm -ne "S" -and $confirm -ne "s") {
    Write-Host "Cancelado." -ForegroundColor Yellow
    exit 0
}

# Inicializar Git
Write-Host "`n⚙️  Inicializando repositório..." -ForegroundColor Cyan
git init
git config user.name "$gitName"
git config user.email "$gitEmail"

# Adicionar arquivos
Write-Host "📁 Adicionando arquivos..." -ForegroundColor Cyan
git add .

# Commit inicial
Write-Host "💾 Fazendo commit inicial..." -ForegroundColor Cyan
git commit -m "Initial commit: Marques Engenharia Ambiental website"

# Adicionar remote
Write-Host "🔗 Conectando ao GitHub..." -ForegroundColor Cyan
git remote add origin $repoUrl
git branch -M main

# Push
Write-Host "🚀 Enviando para GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "`n✅ Pronto! Seu repositório está no GitHub!" -ForegroundColor Green
Write-Host "Acesse: https://github.com/$gitUser/EngenhariaAmbiental" -ForegroundColor Cyan

# Opcional: GitHub Pages
$enablePages = Read-Host "`nDeseja habilitar GitHub Pages? (S/N)"
if ($enablePages -eq "S" -or $enablePages -eq "s") {
    Write-Host "`n📝 GitHub Pages habilitado!" -ForegroundColor Green
    Write-Host "Site estará em: https://$gitUser.github.io/EngenhariaAmbiental/" -ForegroundColor Cyan
    Write-Host "`nVá em Settings > Pages no seu repositório para configurar!" -ForegroundColor Yellow
}

Write-Host "`n🎉 Concluído com sucesso!`n" -ForegroundColor Green
