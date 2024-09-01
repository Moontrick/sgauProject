FROM node:20.17.0
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --force
COPY . /app
RUN npm run build
