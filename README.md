# Proyecto React - Sistema de Trazabilidad

## Pasos para ejecutar localmente
1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm start
```

3. Configurar variable de entorno:
Crear archivo `.env` con:
```env
REACT_APP_API_URL=https://<tu-api-gateway>/dev
```

## Pasos para subir a GitHub
```bash
git add .
git commit -m "Proyecto completo para Amplify"
git push origin main --force
```

## Despliegue en AWS Amplify
- Conectar repositorio GitHub en Amplify
- Seleccionar rama `main`
- Configurar build:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
