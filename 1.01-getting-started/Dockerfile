# docker image ls | grep log-out                                                                                                                                     130 ↵
# salvahappydev/log-output   0.1-nomulti      a034fa7cdc3f   5 minutes ago    255MB
# salvahappydev/log-output   0.1-multi-jdk    fb2a8e7b2136   About a minute ago   154MB

#
# docker stats
    # CONTAINER ID   NAME                       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O          BLOCK I/O         PIDS
    # b1bd2463f06a   nomulti                    0.15%     158MiB / 7.414GiB     2.08%     4.44kB / 0B      0B / 61.4kB       43    
    # bfc3627ee42f   nomulti                    0.15%     181MiB / 7.414GiB     2.38%     3.09kB / 0B       164kB / 73.7kB    43
    
FROM bellsoft/liberica-runtime-container:jdk-21-glibc AS build-stage
#
# Following the convention
WORKDIR /usr/src/app 

# Copy the repo files into image
COPY ./project .

# Build the project
RUN ./mvnw clean package && cp target/*jar target/app.jar

# CMD ["java", "-jar", "target/app.jar"]

FROM bellsoft/liberica-runtime-container:jdk-21-glibc
# EXPOSE 8080
WORKDIR /usr/local/bin

COPY --from=build-stage /usr/src/app/target/app.jar .

CMD ["java", "-jar", "app.jar"]

# # Create a non-root user 
# RUN adduser -D -u 1000 appuser
# # Switch to non-root user
# # Be sure host has user with UID 1000
# USER appuser

# # Set variables needed
# ENV PORT=8080
# ENV REQUEST_ORIGIN=http://localhost:5000

# # Run
# CMD ["./server", "."]