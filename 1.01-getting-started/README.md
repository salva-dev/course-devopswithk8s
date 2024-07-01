# course-devopswithk8s: Excecise 1.01

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

$ kubectl logs -f log-output-6c75cd7f8-z2j42 
2024-06-17T18:14:08.531Z: e45fef8d7b68d4a028b6384787c60f57
2024-06-17T18:14:13.533Z: e45fef8d7b68d4a028b6384787c60f57
2024-06-17T18:14:18.539Z: e45fef8d7b68d4a028b6384787c60f57
2024-06-17T18:14:23.542Z: e45fef8d7b68d4a028b6384787c60f57
2024-06-17T18:14:28.546Z: e45fef8d7b68d4a028b6384787c60f57
```

