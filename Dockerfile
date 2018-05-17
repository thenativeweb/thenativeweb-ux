FROM thenativeweb/wolkenkit-box-node:1.2.0
LABEL maintainer="the native web <hello@thenativeweb.io>"

ADD . /styleguide/

WORKDIR /styleguide

RUN npm install --silent && \
    npx styleguidist build && \
    npm install -g http-server@0.11.1

CMD [ "dumb-init", "http-server", "/styleguide/styleguide" ]
