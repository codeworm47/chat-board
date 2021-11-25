# Simple Chat App with React/Redux, Java (Spring boot) and SocketIO

# How to run :
1. Clone the repo
2. Go to docker directory -> `cd docker`
3. In terminal -> `docker-compose up` OR `docker-compose up -d`

# Useful Hints :

- All the environment variables resided in .env file in docker directory.
- I've used H2 file starage db as database (just to avoid extra configurations and for the interest of time). Database path (file path) and credentials are available in .env file.
- I've commited an empty database. When running Java container if got any error ragarding database or for any reason you want to have a fresh and empty database each time the Java container boots up, you need to modify the following environment variable in the .env file :

`JPA_GENERATE_DDL=true

 JPA_HIBERNATE_DDL_AUTO=create`
 
 - The java container takes some time at the first run (depend on your internet speed) cause it does lots of stuff actually. At first it downloads the `maven` into the container then build the app with `java -jar' ` command then tries to run the app with `mvc clean install` which automatically would download all the Spring/Spring boot and other required dependencies. you can refer to Dockerfile (docker->api directory).

*For any further questions/issues contact me at hesam.rasouli1@gmail.com*
