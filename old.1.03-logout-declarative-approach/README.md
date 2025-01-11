# course-devopswithk8s: Exercise 1.01

I have chosen nodejs for my project.

## Commands to build and run the app
```console
$ docker build -t salvahappydev/log-output:1.1.8 .
$ docker login & docker push salvahappydev/log-output:1.1.8
$ kubectl delete -f manifests/deployment.yaml --ignore-not-found
$ kubectl apply -f manifests/deployment.yaml
deployment.apps/logout-dep created

$ kubectl logs -f deployments/logout-dep          
2024-12-17T19:07:36.749Z: 08b223eeb5221ee19bf5c543fdbc458a
2024-12-17T19:07:41.754Z: 08b223eeb5221ee19bf5c543fdbc458a
...
```

