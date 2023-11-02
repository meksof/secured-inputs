# syntax=docker/dockerfile:1

FROM node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# install and app dependencies
RUN npm install -g @angular/cli
COPY package.json /app/package.json
RUN npm install
# add app
COPY . /app
# start app
CMD ng serve --host 0.0.0.0 --disable-host-check