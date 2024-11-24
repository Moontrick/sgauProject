FROM node:20.17.0
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 8083
CMD ["npm", "start"]
