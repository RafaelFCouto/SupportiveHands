# Utiliza a imagem do Node.js na versão 20.12.2
FROM node:20.12.2

# Instalar o cliente MySQL e o Dockerize
RUN apt-get update && apt-get install -y default-mysql-client \
    && curl -sSL https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar -xzv && \
    mv /dockerize /usr/local/bin

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json, package-lock.json e yarn.lock para a imagem
COPY package*.json yarn.lock ./

# Instala as dependências do projeto usando npm
RUN npm install

# Realiza o fix das vulnerabilidades do npm
RUN npm audit fix

# Copia os arquivos restantes do projeto para o diretório de trabalho dentro do container
COPY . .

# Informa a porta que será exposta pelo container
EXPOSE 3001

# Dê permissão de execução ao script
RUN chmod +x src/scripts/start.sh

# Defina o script start.sh como o comando padrão
CMD ["bash", "src/scripts/start.sh"]

