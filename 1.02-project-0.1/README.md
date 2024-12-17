# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
$ PROJECT_NAME="k8s-project" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:0.1.0" && echo ${IMAGE_TAG} && docker build -t ${IMAGE_TAG} .
$ docker login && docker push ${IMAGE_TAG}
$ kubectl create deployment ${PROJECT_NAME} --image=${IMAGE_TAG}
deployment.apps/k8s-project created

$ kubectl logs -f deployments/${IMAGE}
2024-08-29T10:34:41.965Z: 228ff10b-1f36-44f5-9ab8-2fb63ef03f33
2024-08-29T10:34:46.966Z: 228ff10b-1f36-44f5-9ab8-2fb63ef03f33
2024-08-29T10:34:51.969Z: 228ff10b-1f36-44f5-9ab8-2fb63ef03f33
...
```

$ kubectl delete deployment ${PROJECT_NAME}

