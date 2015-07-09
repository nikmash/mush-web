FROM gliderlabs/alpine:3.1
RUN apk --update add bash nodejs
WORKDIR /tmp/mush-web
ADD . .
RUN npm install && npm run build && rm -rf node_modules
CMD rm -rf /www/mush-web && cp -R /tmp/mush-web /www/mush-web
