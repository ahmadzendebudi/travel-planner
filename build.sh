#!/bin/bash

docker build -t zendebudi/travel-planner-backend ./backend/
docker build -t zendebudi/travel-planner-frontend ./frontend/

docker push zendebudi/travel-planner-backend
docker push zendebudi/travel-planner-frontend

kubectl apply -f kubernetes/backend.yaml -f kubernetes/frontend.yaml -f kubernetes/adminer.yaml

exit 0