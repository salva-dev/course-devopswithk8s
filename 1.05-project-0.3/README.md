# course-devopswithk8s: Exercise 1.02



## Commands to build and run the app
```console
$ PROJECT_NAME="dwk-project" && IMAGE="salvahappydev/${PROJECT_NAME}" && IMAGE_TAG="${IMAGE}:0.3.1" && 
echo ${IMAGE_TAG} && 
docker build -t ${IMAGE_TAG} . && 
docker login &&  docker push ${IMAGE_TAG} && 
kubectl apply -f manifests/deployment.yaml

0.3.1: digest: sha256:a0bda015365f31384241a1ce0d42be353a5d9f7f6905e160ed7ab3ebb20837bf size: 2192
deployment.apps/dwk-project created

$ kubectl logs -f deployments/${PROJECT_NAME}
Server running on port 3008

# Después de la siguiente instruccion comprobar con navegador http://localhost:3008
$ kubectl port-forward dwk-project-5997db5c65-gr8sj 3008:3008
Forwarding from 127.0.0.1:3008 -> 3008
Forwarding from [::1]:3008 -> 3008
...
```