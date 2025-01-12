# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
$ PROJECT_NAME="log-output" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:1.1.11" && 
echo ${IMAGE_TAG} && 
docker build -t ${IMAGE_TAG} . && 
docker login && 
docker push ${IMAGE_TAG} && 
kubectl apply -f manifests/deployment.yaml && 
kubectl apply -f manifests/deployment.yaml 

1.1.11: digest: sha256:55b0655f2a844cfe96e56ffaee5cf05e91f9d7afe466b197a34b7d42c2481719 size: 1985
deployment.apps/log-output created
deployment.apps/log-output unchanged

$ kubectl logs -f deployments/${PROJECT_NAME}
2025-01-11T12:54:31.567Z: 553f9f87a0fd02b03a8510e73c250f47
2025-01-11T12:54:36.571Z: 553f9f87a0fd02b03a8510e73c250f47
2025-01-11T12:54:41.576Z: 553f9f87a0fd02b03a8510e73c250f47
2025-01-11T12:54:46.581Z: 553f9f87a0fd02b03a8510e73c250f47
2025-01-11T12:54:51.586Z: 553f9f87a0fd02b03a8510e73c250f47
2025-01-11T12:54:56.588Z: 553f9f87a0fd02b03a8510e73c250f47
...
```