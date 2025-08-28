FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm installs
COPY . .
EXPOSE 3000
CMD ["npm", "start"]