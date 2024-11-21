
# Utiliza a imagem do Node.js na versão 20.12.2
FROM node:20.12.2

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para a imagem
COPY package*.json yarn.lock ./

RUN npm install

# Instala as dependências do projeto
RUN yarn install --frozen-lockfile

# Copia os arquivos restantes do projeto para o diretório de trabalho
COPY . .

# Informa a porta que será exposta pelo container
EXPOSE 3001

# Comando para iniciar a aplicação
CMD npm start


