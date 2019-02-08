FROM openjdk

WORKDIR /java/app

VOLUME /tmp

#COPY build/libs/todo-0.0.1-SNAPSHOT.jar .

COPY build/libs/todo-0.0.1-SNAPSHOT.jar .

#RUN sh -c 'touch build/libs/todo-0.0.1-SNAPSHOT.jar'

ENTRYPOINT ["java","-jar","todo-0.0.1-SNAPSHOT.jar","--server.port=8181"]

