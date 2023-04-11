FROM node:alpine as base
WORKDIR /app
RUN npm install -g @angular/cli
COPY travel-planner /app
RUN npm install
RUN ng build --configuration production

FROM nginx:stable-alpine as server
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist/travel-planner /app/travel-planner

