# Dependencias y builds
node_modules/
dist/
build/
.vite/

# Variables de entorno
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*

# Sistema operativo
.DS_Store
Thumbs.db

# Editores
.vscode/
.idea/
*.swp

# Git
.git/
.gitignore

# Tests y dev
coverage/
.nyc_output/
tests/
*.test.js
*.spec.js

# Docker (no necesita copiarse a sí mismo)
Dockerfile
.dockerignore
docker-compose.yml

# Documentación
README.md
*.md

# Uploads previos (vacío en build)
uploads/*
!uploads/.gitkeep

# Secretos
*.wallet.json
mnemonic*
private-key*
secrets/
*.key
