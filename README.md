# Nginx Gateway Project

Este projeto demonstra o uso do Nginx como um gateway reverso para aplicações Node.js utilizando Docker.

## Estrutura do Projeto

- `index.js`: Aplicação Node.js simples para teste.
- `nginx/nginx.conf`: Arquivo de configuração do Nginx.
- `Dockerfile`: Define a imagem customizada do Node.js.
- `docker-compose.yml`: Orquestra os containers do Node.js e do Nginx.
- `package.json`: Dependências e scripts do Node.js.

## Como executar

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd ngnix-geteway
   ```
2. **Suba os containers:**
   ```bash
   docker-compose up --build
   ```
3. **Acesse a aplicação:**
   Abra o navegador em [http://localhost:8080](http://localhost:8080)


## Como funciona
- O Nginx recebe as requisições na porta 8080 e as encaminha para o container Node.js.
- O Node.js responde e o Nginx retorna a resposta ao cliente.

## Balanceamento de carga (Load Balancing)
O Nginx está configurado para atuar como um balanceador de carga, distribuindo as requisições entre múltiplas instâncias da aplicação Node.js. Isso é feito através do bloco `upstream` no arquivo `nginx/nginx.conf`:

```nginx
upstream backend_servers {
   server app1:3000;
   server app2:3000;
}
```

Com essa configuração, o Nginx distribui automaticamente as requisições entre os servidores listados, melhorando a performance e a disponibilidade da aplicação. É possível adicionar ou remover servidores conforme a necessidade.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
