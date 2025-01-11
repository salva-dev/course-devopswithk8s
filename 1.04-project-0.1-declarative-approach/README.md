# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
$ PROJECT_NAME="dwk-project" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:0.2.0" && 
echo ${IMAGE_TAG} && 
docker build -t ${IMAGE_TAG} . && 
docker login &&  docker push ${IMAGE_TAG} && 
kubectl apply -f manifests/deployment.yaml

deployment.apps/dwk-project created

$ kubectl logs -f deployments/${PROJECT_NAME}
Server running on port 3005
...
```