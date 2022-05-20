# Proiect

Pentru development intrati in terminal in root-ul proiectului unde e fisierul docker-compose.yml si porniti containerele cu comanda:
```
docker-compose up --build
```

Ca sa le opriti:
```
docker-compose down
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)   \\ !! Sterge volumele deci si datele din baza de date
```

Pentru un rebuild al proiectului trebuie oprite si repornite containerele. <br>
Dupa ce pornesc o sa fie vizibile asa: <br>
- **Frontend**: http://localhost:4000 <br>
- **Backend**: http://localhost:8080 <br>
- **Mongo Express** pentru gestiunea bazei de date: http://localhost:8081 <br><br>

## Baza de date
Conexiunea la baza de date e deja facuta in Node (in api\src\connection.js). Am facut o baza de date care se numeste **app_db**. Credentialele sunt:
- Pentru **useri**: user=client, password=client
- Pentru **admin**: user=admin, password=admin

Daca vreti sa vedeti baza de date se poate din Mongo Express sau din terminal daca va conectati la container. <br>
Trebuie intai sa dati comanda:
```
docker container ls
```
Luati Container ID de la imaginea de Mongo si dupa dati comanda:
```
docker exec -it <container-id> bash
```
Se deschide un bash si trebuie sa scrieti:
```
mongo
```
Dupa ar trebui sa mearga sa vedeti chestii pe acolo.


## Kong
Pentru Kong API-ul merge accesat la http://localhost/api/users

## Portainer
Parola Portainer: adminidp

## Loki

```
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
docker plugin ls
```
**Credentiale Grafana**: admin/admin <br>
Pentru a vedea log-urile in Grafana: Configuration -> Data Sources -> Loki -> Se completeaza http://loki:3100 la URL -> Save & Test
