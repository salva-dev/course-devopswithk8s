# course-devopswithk8s: Excercise 1.03

## Comands to build and run the app
```console
$ docker build -t salvahappydev/log-output:1.1.1 .
$ docker login
$ docker push salvahappydev/log-output:1.1.1

$ kubectl apply -f manifests/deployment.yaml 
deployment.apps/log-output created

$ kubectl logs -f deployments/log-output 
2024-08-29T10:53:09.034Z: 2a4e196e-de75-462a-a429-9ae12b39fafd
2024-08-29T10:53:14.035Z: 2a4e196e-de75-462a-a429-9ae12b39fafd
2024-08-29T10:53:19.037Z: 2a4e196e-de75-462a-a429-9ae12b39fafd

