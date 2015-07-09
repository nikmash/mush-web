FROM gliderlabs/alpine:3.1
RUN apk --update add bash nodejs
WORKDIR /tmp/mush
ADD . .
RUN npm install && npm run build && rm -rf node_modules
CMD rm -rf /www/mush && cp -R /tmp/mush /www/mush
