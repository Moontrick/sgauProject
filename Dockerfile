 FROM node:20.17.0
 WORKDIR /app
 COPY package.json .
 COPY yarn.lock .
 RUN yarn install --force
 COPY . . 
 EXPOSE 4000

 # Создайте билд 
 RUN npm run build

 # Копируйте результат билда в корень
 COPY ./build /app/build 

 # Запустите сервер
 CMD ["npm", "start", "build"]
