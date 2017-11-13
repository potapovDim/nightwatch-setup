docker run --restart=always -p 127.0.0.1:27050:27017 --hostname mongo-test --name mongo-test -d -v /home:/data/db -v /var/log:/var/log mongo --setParameter failIndexKeyTooLong=false
docker run --restart=always -p 127.0.0.1:6370:6379   --hostname redis --name redis -d redis


# I have a helper function to nuke everything so that our Continuous blah, cycle can be tested, erm... continuously. Basically it boils down to the following:

# To clear containers:

# docker rm -f $(docker ps -a -q)
# To clear images:

# docker rmi -f $(docker images -a -q)
# To clear volumes:

# docker volume rm $(docker volume ls -q)
# To clear networks:

# docker network rm $(docker network ls | tail -n+2 | awk '{if($2 !~ /bridge|none|host/){ print $1 }}')