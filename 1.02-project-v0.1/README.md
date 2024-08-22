# course-devopswithk8s: Exercise 1.02

I have chosen deno with hono for my project. It's faster and lighter (image sizes and memory usage) than other frameworks.
I have used ENV in Dockerfile to pass the port to the server executable (deno compiles to binary).

## Comands to build and run the app
```console
$ docker build -t salvahappydev/project-v01:latest .
$ docker login
$ docker push salvahappydev/project-v01:latest
$ kubectl create deployment project-v01 --image=salvahappydev/project-v01:latest
deployment.apps/log-output created

$ kubectl get pods
NAME                           READY   STATUS              RESTARTS   AGE
project-v01-79fb9d95cb-6ztwx   0/1     ContainerCreating   0          5s

$ kubectl logs -f project-v01-79fb9d95cb-6ztwx 
Server started in port 8888
Listening on http://0.0.0.0:8888/
...
```

