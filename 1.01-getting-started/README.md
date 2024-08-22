# course-devopswithk8s: Excercise 1.01

I have chosen deno for my project.

## Comands to build and run the app
```console
$ docker build -t salvahappydev/log-output .
$ docker login
$ docker push salvahappydev/log-output:latest
$ kubectl create deployment log-output --image=salvahappydev/log-output 
deployment.apps/log-output created

$ kubectl get pods
NAME                         READY   STATUS    RESTARTS   AGE
log-output-6c75cd7f8-z2j42   1/1     Running   0          3m23s

$ kubectl logs -f log-output-7475c6c756-zklrw
2024-08-21T12:55:34.085Z: bc0b4687-f1d3-448f-acec-ec6b0a049a8b
2024-08-21T12:55:39.086Z: bc0b4687-f1d3-448f-acec-ec6b0a049a8b
2024-08-21T12:55:44.087Z: bc0b4687-f1d3-448f-acec-ec6b0a049a8b
2024-08-21T12:55:49.088Z: bc0b4687-f1d3-448f-acec-ec6b0a049a8b
2024-08-21T12:55:54.090Z: bc0b4687-f1d3-448f-acec-ec6b0a049a8b
...
```

