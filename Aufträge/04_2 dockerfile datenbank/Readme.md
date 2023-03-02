# dockerfile Datenbank

[TOC]

Zeit: 30 Min<br>
Form: 2er Team

## Auftrag
Erstellen Sie einfaches Dockerfile, das auf einem Ubuntu-Basisimage basiert und die Datenbank PostgreSQL installiert.

- Basisimage: Ubuntu:latest
- PostgreSQL
- Der Port des Containers ist auf 5432 exposed.

Um den Auftrag zu erfüllen, reicht es, wenn Sie den Zugriff auf den DB-Server lokal innerhalb des Containers testen.

## Challenge
Bei Zeit und Lust versuchen Sie nun auch den Zugriff von ausserhalb auf den DB-Server herzustellen. Dafür müssen Sie den PostgreSQL-Server so konfigurieren, dass er Zugriffe von ausserhalb akzeptiert. Ebenso sollten Sie die Zugangsdaten richtig setzen, damit eine Verbindung möglich wird.
