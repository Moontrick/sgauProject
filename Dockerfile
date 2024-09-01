FROM node:20.17.0
WORKDIR .
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
