# course-devopswithk8s: Exercise 1.01

I have chosen nodejs for my project.

## Commands to build and run the app
```console
$ docker build -t salvahappydev/log-output:1.1.7 .
$ docker login & docker push salvahappydev/log-output:1.1.7
$ kubectl delete -f manifests/deployment.yaml --ignore-not-found
$ kubectl apply -f manifests/deployment.yaml
deployment.apps/logout-dep created

$ kubectl logs -f deployments/logout-dep                        
Server running on port 3000
...
```

