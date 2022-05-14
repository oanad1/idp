FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g create-react-app
RUN npm install -g react-scripts
RUN npm install --silent
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]
