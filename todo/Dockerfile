FROM gradle:jre11-slim

USER root

WORKDIR /app/java

COPY . .

RUN ./gradlew build

EXPOSE 8080

ENTRYPOINT ["java","-jar","./build/libs/todo.jar"]
