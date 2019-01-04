FROM node:8-alpine
WORKDIR  /cyf-react
COPY . .
RUN yarn 
EXPOSE 3000
CMD ["yarn", "start"]