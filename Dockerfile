FROM nginx:1.13-alpine
LABEL maintainer "Ryan Desfosses <ryan@desfo.org>"

RUN rm /usr/share/nginx/html/50x.html
Copy . /usr/share/nginx/html/
