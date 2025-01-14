# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
# Delete the ingress's
$ kubectl delete ingress dwk-project-ingress pingpong-ingress 

# Create images
$ PROJECT_NAME="log-out" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:4.0.0" && 
 echo ${IMAGE_TAG} && 
 docker build -f ./Dockerfile-log-out -t ${IMAGE_TAG} . && 
 docker login && docker push ${IMAGE_TAG}

$ PROJECT_NAME="ping-pong" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:4.0.0" && 
 echo ${IMAGE_TAG} && 
 docker build -f ./Dockerfile-pingpong -t ${IMAGE_TAG} . && 
 docker login && docker push ${IMAGE_TAG}

# Apply the manifests
$ kubectl apply -f manifests/deployment.yaml &&
 kubectl apply -f manifests/service.yaml &&
 kubectl apply -f manifests/ingress.yaml

deployment.apps/log-out changed
service/log-out-svc unchanged
ingress.networking.k8s.io/log-out-ingress unchanged

# After this, Check with browser http://localhost:8081
...
```