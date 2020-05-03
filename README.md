# docker-angular

### Build Docker Dev Image
`docker build -t docker-angular -f docker/Dockerfile.dev .` 

### Create and Run Docker Dev Container (Powershell)
*Mounting of volumes does not work properly using bash commandline*  
*Mounting volumes shall enable the docker container to be updated on any changes made in the local directory*
`docker run --name docker-angular-container -v /app/node_modules -v ${pwd}:/app -p 4200:4200 docker-angular` 

### Create and Run Docker Dev Container (Bash)
`docker run --name docker-angular-container -v /app/node_modules -v pwd:/app -p 4200:4200 docker-angular` 

### Run test on the running Container
`docker exec -it docker-angular-container npm run test`

### Continuous Integration Setup