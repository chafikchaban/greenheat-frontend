# This is the newer version

FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Set the correct environment file
ARG ENVIRONMENT=docker
COPY .env.${ENVIRONMENT} ./.env


EXPOSE 4200

CMD ["npm", "run", "dev"]