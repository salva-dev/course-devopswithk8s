# course-devopswithk8s: Excercise 1.01

I have chosen deno for my project.

## Comands to build and run the app
```console
$ docker build -t salvahappydev/log-output:1.1.1 .
$ docker login
$ docker push salvahappydev/log-output:1.1.1
$ kubectl create deployment log-output --image=salvahappydev/log-output:1.1.1
deployment.apps/log-output created

$ kubectl logs -f deployments/log-output
2024-08-29T10:34:41.965Z: 228ff10b-1f36-44f5-9ab8-2fb63ef03f33
2024-08-29T10:34:46.966Z: 228ff10b-1f36-44f5-9ab8-2fb63ef03f33
2024-08-29T10:34:51.969Z: 228ff10b-1f36-44f5-9ab8-2fb63ef03f33
...
```

