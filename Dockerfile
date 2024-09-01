FROM node:20.17.0
WORKDIR /src
COPY package.json .
RUN npm install --force
COPY . . 
EXPOSE 8083
RUN npm run build
ENTRYPOINT ["npm", "start", "build"]
