# Full Stack Journey mit Docker Compose

Arbeiten Sie dieses File selbstständig durch. Nehmen Sie sich Zeit und lesen Sie die verlinkten Informationsquellen.

Ziele:
- Sie wissen was eine Microservice Architektur ist
- Sie wissen was eine RESTful API ist.
- Sie können docker-compose zur Erstellung von mehreren Services verwenden.
- Sie haben ein Grundgerüst für eine dockerized fullstack application.

Zeit: 3-4 Lektionen

## Microservice Architekturmuster

Microservices sind ein Ansatz in der Softwareentwicklung, bei dem Software aus kleinen unabhängigen Services besteht, die über sorgfältig definierte Schnittstellen (APIs) kommunizieren. 

```plantuml
skinparam monochrome true
skinparam packageStyle rectangle
hide circle
hide members
    
Kundendienst -- Webshop : API
Einkauf -- Lager : API
Kundenmanagement -- Kundendienst : API
Lager -- Webshop : API
Kundenmanagement -- Webshop : API
Versand -- Lager : API

```

### Eigenschaften von Microservices
- *Eigenständig*: Jeder Service in einer Microservice Architektur kann entwickelt, bereitgestellt betrieben und skaliert werden, ohne die anderen Services zu beeinträchtigen.
- *Spezialisierung*: Jeder Service konzentriert sich auf die Lösung eines bestimmten Problems. Entsprechend kann ein dediziertes Team von Fachspezialisten einen Service kontinuierlich weiterentwickeln.

Quellen: [AWS](https://aws.amazon.com/de/microservices/)

### REST Schnittstellen (API)

REST steht für "Representational State Transfer". Diese Art von Schnittstelle zwischen Services bietet sich besonders bei Microservice Architekturen an. Sie ermöglicht es einzelne Services während dem Betrieb auszutauschen.

Folgende Kriterien zeichnen RESTful APIs aus:
- Eine aus Clients, Servern und Resourcen bestehende Client/Server-Architektur, die Anfragen über HTTP verwaltet.
- Zustandlose Client/Server-Kommunikation, d.h. zwischen GET-Anforderungen werden keine Client-Informationen gespeichert, und die einzelnen Anforderungen sind separat und nicht verbunden. 

Quellen: [RedHat](https://www.redhat.com/de/topics/api/what-is-a-rest-api)

## Server
### Aufgabe: RESTful Flask Server
erstellen Sie ein Verzeichnis *studentmgr*

Laden Sie [dieses ZIP-Archiv](./server.zip) herunter und entpacken sie es im vorher erstellen Verzeichnis. Es handelt sich um einen Python-Flask-Server, der eine RESTful API zur Verfügung stellt.

Wechseln sie in das Verzeichnis mit dem Dockerfile
```bash
cd server
```
Nutzen sie die bekannten Docker Befehle, um das Image zu bauen
```bash
docker build -t flask_server .
```
Erzeugen und starten sie nun den entsprechenden Container:
```bash
docker run -d -p 5000:5000 -e FLASK_HOST='0.0.0.0' -e FLASK_PORT='5000' -e FLASK_APP='app.py' -e FLASK_DEBUG='1' flask_server
```
>Achtung: wenn Sie eine andere Shell als eine Bash-Shell verwenden, kann es bei der Übergabe der Environment Variablen zu Problemen kommen.

Wie sie sehen, müssen dem run-Befehl sehr viele Parameter übergeben werden.

Wenn alles funktioniert hat, sollten sie nun über ihren Web-Browser auf 
```
localhost:5000
```
Zugriff auf den Flask-Server erhalten. Er meldet sich mit "hi".

Experimentieren sie nun mit der Browser-URL, damit sie das Resourcen-basierte Konzept von RESTful APIs kennenlernen. Der Server verwaltet im Moment eine Resource "student".

Geben Sie Im Browser die URL 
```
localhost:5000/api/student
```
ein. Der Server gibt uns nun alle gespeicherten Studenten im [JSON](https://de.wikipedia.org/wiki/JavaScript_Object_Notation) Format zurück. Dies ist die häufigste Art des Datenaustauschs zwischen Microservices.

Sie können auch auf einzelne Studenten zugreifen, indem sie die ID des Studenten in die URL einbauen: 
```
localhost:5000/api/student/2
```
Wir haben nun einen Microservice mit einer RESTful API. Für eine richtige Anwendung benötigen wir noch weitere Services. Damit wir nicht jeden Container einzeln starten und konfigurieren müssen, kommt nun Docker Compose in's Spiel.

### Docker Compose File
Eine kurze Einführung zu docker-compose finden Sie [hier](https://gitlab.com/ch-tbz-it/Stud/m347/-/tree/main/1%20Container/05%20docker/docker-compose). 

Bitte beachten Sie, dass docker-compose V1 ab Juni 2023 nicht mehr unterstützt wird.
Sie können den Unterschied erkennen:
```bash
docker-compose up (V1 = alt)
docker compose up (V2 = neu)
```

Löschen Sie den Flask_server container und das Image im Docker Desktop.
Wechseln Sie in der Shell vom "server"-Verzeichnis in das übergeordnete Verzeichnis "studentmgr". Erstellen Sie eine Datei
```
docker-compose.yml
```
Nun können wir alle Parameter, die wir vorher dem docker-run Befehl übergeben haben, im compose file festlegen.

Mit den folgenden Zeilen

```yaml
version: '3.4'

services:

  student-server:
    build: ./server

```
legen Sie die docker-compose *version* fest, definieren einen *service* namens "student-server" und legen den *build*-Kontext auf das Unterverzeichnis "./server" fest.

mit

```yaml
    ports:
      - 5000:5000
```
definieren wir den *port*, der aus dem Container geöffnet wird.

Mit
```yaml
    volumes:
      - ./server:/app
```
erstellen wir ein [Docker *volume*](https://docs.docker.com/storage/volumes/) "/app" und verknüpfen es mit unserem lokalen File-System.

Schliesslich konfigurieren wir mit dem Setzen der entsprechenden Environment-Variablen unseren Flask-Server:
```yaml
   environment:
    # flask vars
     - FLASK_HOST=0.0.0.0
     - FLASK_PORT=5000
     - FLASK_APP=app.py
     - FLASK_DEBUG=1
```
Speichern Sie den docker-compose.yml file und wechseln Sie in der Shell in das Verzeichnis, *studentmgr*. 

>ACHTUNG: bei YAML-Dateien ist es extrem wichtig, dass die Einrückungen korrekt sind.
Sonst erhalten sie die Fehlermeldung "did not find expected key".

Die Verzeichnisstruktur sollte nun so aussehen. 

```bash
├── studentmgr
│   ├── server
│   │   ├── app.py
│   │   ├── db.sqlite
│   │   ├── Dockerfile
│   │   └── requirements.txt
│   └── docker-compose.yml
```
Nun können Sie den Container für den Flask-Server einfach mit 
```bash
docker compose up
```
erstellen und ausführen. 
Glückwunsch, Sie haben ihren ersten Microservice mit docker-compose erstellt.

## Web Frontend
Damit wir mit dem Flask-Server interagieren können, benötigen wir ein entsprechendes Frontend. Laden Sie das [Zip-Archiv client](./client.zip) runter und entpacken Sie es im Verzeichnis *studentmgr*.

Das Archiv enthält eine [Vue3](https://vuejs.org/) Web-Applikation auf Basis von [Vite](https://vitejs.dev/). Das ist ein aktueller Technologie-Stack, der im Frontend-Bereich momentan (2023) häufig Verwendung findet.

Die Web-Applikation ist bereits für die "Containerisierung" vorbereitet und enthält ein Dockerfile.

### Docker Compose File für Client erweitern
Wir wollen später unseren Server und unser Web-Frontend gemeinsam starten. Deshalb müssen wir unser docker-compose.yml File erweitern.

dafür definieren wir einen neuen Service
```yaml
  student-client:
```
im docker-compose.yml-File auf der gleichen Ebene, wie der server-service.

Konfigurieren Sie nun den student-client service folgendermasen: 
- der *build-context* soll "./client" sein.
- Port "3000:3000" soll offen sein.
- Das Verzeichnis "./client" soll im Container auf das Verzeichnis "/app" gemapped werden (Stichwort "volume").
- im Container soll ein Verzeichnis "/app/node_modules" gemounted sein. Damit stellen wir sicher, dass im Container das Verzeichnis node_modules leer ist, auch wenn es auf dem Host nicht leer ist ([siehe](https://stackoverflow.com/questions/29181032/add-a-volume-to-docker-but-exclude-a-sub-folder)) 
- der Port "3000" soll im Netzwerk *exposed* werden.

Wenn Sie sich sicher sind, dass der docker-compose file das Web-Frontend entsprechend konfiguriert hat, können sie das setup mit 
```bash
docker compose up
```
testen.
Ob alles funktioniert, sehen Sie, wenn Sie im Web-Browser auf
```bash
localhost:3000
```
navigieren. Dort sollten Sie dann in einer Vue-SPA neue Studenten zum Backend hinzufügen und ändern können.

>*Hinweis*: Am sichersten ist es, wenn sie jeweils die alten Container und Images im Docker-Desktop löschen. Sonst werden manche Änderungen nicht wirksam, weil docker auf ein bestehendes Image zugreift. 

## Hot Reload
Während der Entwicklung ist es sehr mühsam, wenn man bei jeder Änderung den Container neu erstellen und starten muss. Deshalb haben die meisten Frameworks eine Möglichkeit zum Hot Reload eingeführt.

Da wir in unserem docker-compose File unsere lokalen Verzeichnisse in den Container gemounted haben, können wir diese Möglichkeit hier auch nutzen.

Dafür müssen Sie lediglich folgende Änderungen vornehmen:
- bei jedem Service im docker-compose file (also "student-client" und "student-server") fügen Sie die Environment Variable
```yaml
    environment:
      - CHOKIDAR_USEPOLLING=true
```
hinzu.
Ausserdem müssen Sie den Dockerfile im ./client Verzeichnis noch abändern, und den Befehl "COPY . ." auskommentieren.

```bash
#COPY . .
```

Testen Sie diese, indem Sie in der Datei /client/src/App.vue den navbar-brand von TBZ in etwas anderes ändern. Nach dem Speichern der Datei sollten sie die Änderung sofort und ohne Refresh im Browser sehen.

## Fazit
Sie haben nun eine sehr gute Basis für eine **state-of-the-art dockerized full-stack microservice** Applikation.

```plantuml
skinparam monochrome true
skinparam packageStyle rectangle
hide circle
hide functions

package docker-compose{
    class client {
        Vue3 & Vite
        axios
        bootstrap
        Vue router
    }

    class server {
        Python
        Flask
        SQL Alchemy - sqlite
        Marshmallow
    }
}
client - server : RESTful

```
**Machen Sie etwas daraus ;-)**

## Next steps
1. Ersetzen Sie sqlite durch einen MySQL Server und passen sie das docker-compose file sowie den Flask-Server entsprechend an.

1. Version Pinning - legen Sie in den Dockerfiles, im package.json und im requirements.txt alle Version fest.

1. Reduzieren Sie die Grösse der Images indem Sie in den Dockerfiles andere Base-Images verwenden.

1. Erweitern Sie die Konfiguration um eine Test- und Production-Environment. Im Production-Fall sollte der Client und der Server einen NGINX-Server nutzen.

1. Erweitern Sie den Flask-Server um weitere Ressourcen (z.B.: Kursmodul)

