# Kubernetes-Starter
A simple node based calculator app to demo the use of kubernetes for orchestration and load balancing.

### Run Localy:
On your terminal: node server.js

### Kubernetes set-up
1. Start minikube: minikube start
2. Apply deployment: kubectl apply -f calculator_deployment.yaml
3. Apply services: kubectl apply -f calculator_service.yaml
4. Check the running services: kubectl get svc
5. Check the deployments: kubectl get deployments
6. Launch service: minikube service calculator-service

Application should open on port 3000
