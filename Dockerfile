FROM gliderlabs/alpine:3.1
RUN apk --update add bash nodejs
ADD . /tmp/mush
RUN cd /tmp/mush && npm install && npm run build
CMD rm -rf /www/mush && cp -R /tmp/mush /www/mush
