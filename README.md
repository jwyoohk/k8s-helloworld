# K8s Hello World Sample app

## Assumption
1. Docker and Git is pre-installed
2. Kubernaties cluster and worker nodes are pre-configured.

## Creation Process
#### Clone the public repository
```shell 
git clone https://github.com/nitinp91/k8s-helloworld.git
cd k8s-helloworld
````

#### Build Docker image. (Change the name if you want to push image in your Docker Hub account)
```shell
docker build -t nitinpatil7/hello-app .
```

#### Login to the Docker Hub account and Push image.
```shell
docker login
docker push nitinpatil7/hello-app:latest
```

#### Create K8s Deployment and Service. (Change the container image name from hello-app.yaml file if you have pushed image into your Docker Hub account)
```shell
kubectl apply -f hello-app.yaml
```

## Deletion Process
#### Delete K8s Deployment and Service.
```shell
kubectl delete -f hello-app.yaml
```
#### Delete local Docker images
```shell
docker rmi <image_name>
```
