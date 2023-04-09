FROM eclipse-temurin:17-jdk-alpine as base
WORKDIR /app
COPY travel-planner/.mvn .mvn
COPY travel-planner/mvnw travel-planner/pom.xml ./
RUN ./mvnw dependency:resolve
COPY travel-planner/src src

FROM base as development
CMD [ "./mvnw", "spring-boot:run", "-Dspring-boot.run.jvmArguments='-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:8000'" ]

FROM base as build
RUN ./mvnw package

FROM eclipse-temurin:17-jdk-alpine as production
EXPOSE 8080
COPY --from=build /app/target/*.jar /spring-app.jar
CMD  ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/spring-app.jar"]