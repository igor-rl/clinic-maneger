### Iniciar o projeto
```yml
docker compose up -d
cd nextjs
npm run dev -- -p 3001
```

## Fake API
### Instalação
```yml
npm install json-server --save-dev
```

### Configuração
```yml
{
  ... ,
  "scripts": {
    ... ,
    "fake-api": "json-server --port 8000 --watch fake-api.json"
  },
  ...
}
```

### Iniciar a API Fake
```yml
npm run fake-api
```

### Abrir a API fake no Simple Browser
Pressione `Ctrl+Shift+P` para abrir a palea de comando e digite "Simple Browser" e selecione "View: Show Simple Browser".

