 FROM node:20.17.0
 WORKDIR .
 COPY package.json .
 RUN npm install --force
 COPY . . 
 EXPOSE 8083

 # Создайте билд 
 RUN npm run build
 # Запустите сервер
 CMD ["npm", "start", "build"]
