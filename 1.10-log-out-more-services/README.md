# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
# Delete the ingress's
$ kubectl delete ingress dwk-project-ingress pingpong-ingress 

# Create new for project 0.5
$ PROJECT_NAME="log-out" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:3.0.2" && 
 echo ${IMAGE_TAG} && 
 docker build -t ${IMAGE_TAG} . && 
 docker login && docker push ${IMAGE_TAG}

$ PROJECT_NAME="log-out-writer" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:3.0.2" && 
 echo ${IMAGE_TAG} && 
 docker build -f ./Dockerfile-writer -t ${IMAGE_TAG} . && 
 docker login && docker push ${IMAGE_TAG}


$ kubectl apply -f manifests/deployment.yaml &&
 kubectl apply -f manifests/service.yaml &&
 kubectl apply -f manifests/ingress.yaml

2.0.0: digest: sha256:4a28408d8ac25dd1167850a4d34c402f18c5ba547bc2cdfff46ac27ddb7a9530 size: 1985
deployment.apps/log-out created
service/log-out-svc created
ingress.networking.k8s.io/log-out-ingress created

$ kubectl logs -f deployments/${PROJECT_NAME}
Server running on port 3008

# Después de la siguiente instruccion comprobar con navegador http://localhost:8081
...
```