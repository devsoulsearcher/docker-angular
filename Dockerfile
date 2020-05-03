# BUILD STAGE
FROM node:alpine

# create/specify working directory inside the container
WORKDIR /app

# install dependencies
COPY ./package.json .
RUN npm install

# copy the rest of the files (make sure to create .dockerignore file to exclude local sub folders such as node_modules)
COPY . .
RUN npm run build

# DEPLOYMENT STAGE
# Since upon deployment we are not going to change the code as in development so we don't need to copy over the whole build image
# Otherwise, we only need to deploy the build folder

# This image will host the project
FROM nginx
EXPOSE 80
# copy over the build folder from the build stage
COPY --from=0 /app/build /usr/share/nginx/html