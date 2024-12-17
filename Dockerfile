FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:20 AS runtime

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
