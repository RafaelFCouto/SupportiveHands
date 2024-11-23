#!/bin/bash

# Aguardar o serviço de banco de dados (db) ficar disponível
dockerize -wait tcp://db:3306 -timeout 60s

# Instalar pacotes node
npm install

# Executar as migrações
npm run supportive-hands-db:migrate:dev

# Iniciar o servidor
npm start