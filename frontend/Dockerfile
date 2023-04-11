FROM node:alpine as base
WORKDIR /app
RUN npm install -g @angular/cli
COPY travel-planner /app
RUN npm install
RUN ng build --configuration production

FROM nginx:stable-alpine as server
COPY nginx.conf /tmp/nginx.conf
ARG BACKEND_HOST="travel-planner-backend-service.default.svc.cluster.local"
RUN sed "s/\${BACKEND_HOST}/${BACKEND_HOST}/g" </tmp/nginx.conf >/etc/nginx/nginx.conf 
COPY --from=base /app/dist/travel-planner /app/travel-planner

