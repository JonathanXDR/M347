
# dockerfile Datenbank Fortgeschrittene

[TOC]

Zeit: 30 Min<br>
Form: 2er Team

## Auftrag
Die Firma database-solution hat Sie angefragt, ob Sie eine Datenbank bereitstellen könnten. <br>
Zu Entwicklungszwecken, soll die Datenbank nur lokal erstellt und getestet werden.

Erstellen Sie ein dockerfile, welches folgende Anforderungen erfüllt:
- Das DBMS PostgreSQL soll verwendet werden
- Es darf nicht die aktuellste Version sein, da SW-Lösungen noch auf eine Vorgängerversion basiert
- Die Umgebungsvariablen (environment variables) sollen gesetzt werden:
  - POSTGRES_USER myUser
  - POSTGRES_Password <*password*>
  - POSTGRES_DB myDatabase
- Zugriff auf Datenbank erfolgt über Port: 3600
- Ein [Initial SQL](initialskript.sql) Skript muss im container enthalten sein

## DB-Test
Nachdem Sie nun den DB-Container erstellt haben, müssen Sie einen Test ausführen.<br>
Stellen Sie sicher, dass Ihre DB voll funktionsfähig ist.
Dazu müssen Sie *psql* installieren. Je nach Betriebssystem müssen Sie die entsprechende [psql-SW installieren](https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/).

Führen Sie anschliessend diesen Befehl aus:<br>
```
psql -h localhost -p 3600 -U myuser -d mydatabase
```
Die Passwort-Eingabe erscheint. Geben Sie das zuvor definierte Passwort ein.

Führen Sie nun dieses Statement aus:
```
INSERT INTO mytable (name, email) VALUES ('John Doe', 'johndoe@example.com');
```

Wenn Sie erfolgreich waren, erhalten Sie mit diesem Statement die Daten:
```
SELECT * FROM mytable;
```



---

