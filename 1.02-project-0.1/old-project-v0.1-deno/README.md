# course-devopswithk8s: Exercise 1.02

I have chosen deno with hono for my project. It's faster and lighter (image sizes and memory usage) than other frameworks.
I have used ENV in Dockerfile to pass the port to the server executable (deno compiles to binary).

## Comands to build and run the app
```console
$ docker build -t salvahappydev/project:0.1.1 . 
$ docker login
$ docker push salvahappydev/project:0.1.1
$ kubectl create deployment project --image=salvahappydev/project:0.1.1
deployment.apps/log-output created

$ kubectl get pods
NAME                           READY   STATUS              RESTARTS   AGE
project-b4c4876c-tpnm5   0/1     ContainerCreating   0          8s

$ kubectl logs deployments/project
Server started in port 8888
Listening on http://0.0.0.0:8888/
...
```

