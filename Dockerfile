# Build frontend
FROM node:latest AS build-fe

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./
COPY frontend/ .

RUN npm install && npm run build

# Build backend
FROM node:latest AS build-be

WORKDIR /app/backend

COPY backend/package.json backend/package-lock.json ./
COPY backend/ .

RUN npm install

COPY --from=build-fe /app/frontend/build /app/frontend/build

WORKDIR /app/backend

EXPOSE 3000

CMD ["npm", "start"]
