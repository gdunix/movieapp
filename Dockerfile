From node:19-alpine as build

WORKDIR /app

COPY package*.json ./
COPY webpack.common.js ./
COPY webpack.prod.js ./
COPY .babelrc ./
COPY public/ public/
COPY src/ src/
COPY nginx/nginx.conf ./nginx

RUN yarn
RUN yarn build

From nginx:alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf 

COPY --from=build /app/dist /usr/share/nginx/html 

# Expose port 80 for the Nginx server
EXPOSE 3100:80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]