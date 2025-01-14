# course-devopswithk8s: Exercise 1.10

## Commands to build and run the app
```console
# Delete the ingress's
$ kubectl delete ingress --all

# Create the neccesary directory for persisten volme
$ docker exec k3d-k3s-default-agent-0 sh -c "mkdir -p /tmp/kube && chown 1000:1000 /tmp/kube"

# Create images
$ PROJECT_NAME="log-out" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:4.0.2" && 
 echo ${IMAGE_TAG} && 
 docker build -f ./Dockerfile-log-out -t ${IMAGE_TAG} . && 
 docker login && docker push ${IMAGE_TAG}

$ PROJECT_NAME="pingpong" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:4.0.2" && 
 echo ${IMAGE_TAG} && 
 docker build -f ./Dockerfile-pingpong -t ${IMAGE_TAG} . && 
 docker login && docker push ${IMAGE_TAG}

# Apply the manifests
$ kubectl apply -f manifests/persistentvolume.yaml && kubectl apply -f manifests/persistentvolumeclaim.yaml &&
 kubectl apply -f manifests/deployment.yaml &&
 kubectl apply -f manifests/service.yaml &&
 kubectl apply -f manifests/ingress.yaml

persistentvolume/example-pv created
persistentvolumeclaim/my-example-pv-claim created
deployment.apps/log-out created
deployment.apps/pingpong created
service/log-out-svc created
service/pingpong-svc created
ingress.networking.k8s.io/ingress created

# After this, Check with browser http://localhost:8081/pingpong for increase counter
pong 1
# After this, Check with browser http://localhost:8081/ for view log-out
2025-01-14T20:35:55.631Z: 4a3bb49d4f6070f0bdb392c3b89f247e Ping / Pongs: 1

...
```