# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
# Delete the logout ingress
$ kubectl delete ingress log-out-ingress

# Create images
$ PROJECT_NAME="dwk-project" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:0.5.0" && 
 echo ${IMAGE_TAG} && 
 docker build -t ${IMAGE_TAG} . && 
 docker login &&  docker push ${IMAGE_TAG} && 
 kubectl apply -f manifests/deployment.yaml &&
 kubectl apply -f manifests/service.yaml &&
 kubectl apply -f manifests/ingress.yaml

0.5.0: digest: sha256:a0bda015365f31384241a1ce0d42be353a5d9f7f6905e160ed7ab3ebb20837bf size: 2192
deployment.apps/dwk-project configured
service/dwk-project-svc configured
ingress.networking.k8s.io/dwk-project-ingress created

# After this, Check with browser http://localhost:8081
...
```