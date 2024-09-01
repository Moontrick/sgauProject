FROM node:20.17.0
WORKDIR .
COPY ./package.json .
RUN npm install --force
COPY . . 
EXPOSE 8083
ENTRYPOINT ["npm", "start", "build"]
