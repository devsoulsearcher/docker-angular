# docker-angular

### Build Docker Dev Image
`docker build -t docker-angular -f docker/Dockerfile.dev .` 

### Create and Run Docker Dev Container
`docker run --name docker-angular-container -v /../node_modules/ -v ./:/app -p 4200:4200 docker-angular` 
