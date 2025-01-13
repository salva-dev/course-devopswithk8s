# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
# Execute the steps of course for new cluster:
$ k3d cluster delete
$ k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2

$ PROJECT_NAME="dwk-project" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:0.4.0" && 
 echo ${IMAGE_TAG} && 
 docker build -t ${IMAGE_TAG} . && 
 docker login &&  docker push ${IMAGE_TAG} && 
 kubectl apply -f manifests/deployment.yaml &&
 kubectl apply -f manifests/service.yaml

0.4.0: digest: sha256:a0bda015365f31384241a1ce0d42be353a5d9f7f6905e160ed7ab3ebb20837bf size: 2192
deployment.apps/dwk-project created
service/dwk-project-svc created

$ kubectl logs -f deployments/${PROJECT_NAME}
Server running on port 3008

# After this, check with browser http://localhost:8082
...
```