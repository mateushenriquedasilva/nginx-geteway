# Nginx como Proxy Reverso e Load Balancer com Docker Compose

## 📄 Sobre o Projeto

Este projeto é um ambiente de demonstração prático que utiliza **Nginx** como **Proxy Reverso** e **Balanceador de Carga (Load Balancer)** para distribuir tráfego entre múltiplas instâncias de uma aplicação web simples. Toda a infraestrutura é orquestrada de forma declarativa e isolada usando **Docker Compose**.

O objetivo é ilustrar um cenário comum em arquiteturas de microsserviços e aplicações web escaláveis, onde um único ponto de entrada (Gateway) gerencia e distribui as requisições para os serviços backend.

-----

## 🏛️ Arquitetura

O fluxo de requisições segue o seguinte modelo:

1.  O usuário faz uma requisição para `localhost:8080`.
2.  O container do **Nginx** recebe essa requisição na sua porta `80`.
3.  O Nginx, configurado com o método de balanceamento de carga **Round-Robin**, encaminha a requisição para uma das instâncias da aplicação backend.
4.  A cada nova requisição, o Nginx alterna entre `app1` e `app2`, distribuindo a carga de forma equitativa.

-----

## 🛠️ Tecnologias Utilizadas

  * **Nginx:** Servidor web de alta performance, atuando como Proxy Reverso e Load Balancer.
  * **Docker & Docker Compose:** Para containerização da aplicação e orquestração do ambiente.
  * **Node.js & Express:** Para a criação da aplicação web backend de exemplo.

-----

## 📁 Estrutura de Arquivos

```
.
├── app/                  # Contém a aplicação backend Node.js
│   ├── Dockerfile        # Define como construir a imagem da aplicação
│   ├── index.js          # O código do servidor Express
│   └── package.json      # Dependências da aplicação
├── nginx/                # Contém a configuração do Nginx
│   └── nginx.conf        # Define o proxy reverso e o upstream para load balancing
└── docker-compose.yml    # Arquivo principal que orquestra todos os serviços
```

-----

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o ambiente em sua máquina local.

### Pré-requisitos

  * Você precisa ter o **[Docker](https://www.docker.com/products/docker-desktop/)** e o **Docker Compose** instalados. (O Docker Compose já vem incluído no Docker Desktop para Windows e Mac).

### Passo a Passo

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd seu-repositorio
    ```

3.  **Inicie o ambiente com Docker Compose:**

    ```bash
    docker-compose up --build -d
    ```

      * `--build`: Garante que as imagens Docker serão construídas a partir do Dockerfile.
      * `-d`: Executa os containers em modo "detached" (em segundo plano).

-----

## ✅ Verificação

Após executar o comando `docker-compose up`, o ambiente estará pronto\!

1.  **Acesse o navegador:**
    Abra seu navegador e visite [**http://localhost:8080**](https://www.google.com/search?q=http://localhost:8080).

2.  **Teste o Load Balancer:**
    Você verá uma mensagem como *"Esta requisição foi processada pelo container: [ID do Container]"*.

    **Recarregue a página (pressionando F5 ou Ctrl+R) várias vezes.** Você notará que o ID do container que responde à requisição irá alternar a cada recarga, provando que o Nginx está distribuindo o tráfego entre as duas instâncias da aplicação.

**Exemplo de Funcionamento:**

*(Sugestão: grave um GIF rápido da sua tela mostrando a atualização e coloque aqui\!)*

-----

## 👨‍💻 Autor

Feito por **Matheuss Henrique**.