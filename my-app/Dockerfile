FROM node:18-alpine


WORKDIR /usr/src

#to cache each layer in Docker to be reused next time for a faster build
COPY package*.json ./

RUN npm install


# Copy the file from the container into the container
COPY . .

#this is for production and not dev
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]

#CMD ["npm", "start"]



