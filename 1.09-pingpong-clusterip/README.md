# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
# Delete the logout ingress
$ 

# Create images
$ PROJECT_NAME="pingpong" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:1.0.1" && 
 echo ${IMAGE_TAG} && 
 docker build -t ${IMAGE_TAG} . && 
 docker login &&  docker push ${IMAGE_TAG} && 
 kubectl apply -f manifests/deployment.yaml &&
 kubectl apply -f manifests/service.yaml &&
 kubectl apply -f manifests/ingress.yaml


# After this, Check with browser http://localhost:8081/pingpong
...
```