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

## Alte chestii
Proiectul e doar ceva basic ca sa testam ca merge. Puteti modifica orice in api/ si ui/ doar nu stergeti nimic legat de conexiune sau url-uri :))



## IDP

Am facut stack-ul de Docker Swarm separat si am scris 2 scripturi de Windows care il pornesc si opresc ca mi-era lene sa dau mereu comenzile alea.
Am pus imaginile de la api/ si ui/ pe contul meu de Docker Hub. PM me pentru acces ;)) <br>

Pentru Kong API-ul merge accesat la http://localhost/api/users si frontendul ar trebui sa mearga la http://localhost/home dar nu merg CSS-ul si alte chestii statice. <br>

Parola Portainer: adminidp

### Loki

```
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
docker plugin ls
```
Credentiale Grafana: admin/admin