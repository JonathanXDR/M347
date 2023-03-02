
# dockerfile (image erstellen) hello world

[TOC]

Zeit: 20 Min<br>
Form: 2er Team

## Anleitung mit dockerfile
Beispiel mit dockerfile, welches ein nginx webserver beinhaltet und ein html-file "helloworld" hinzugefügt wird.

Erstellt ein image auf Basis dockerfile im aktuellen folder (. Punkt am Ende zeigt auf den lokalen folder)
```bash
docker build -t myimage:latest .
```

Startet container des neu erstellten images
```bash
docker run -it --rm -d -p 8080:80 myimage
```
## Auftrag
1. Machen Sie den Test, ob ihr container richtig läuft. Welche Web-Adresse müssen Sie eingeben? 
2. Erklären Sie die obigen Schritte und Befehle sowie die einzelnen Parameter.
3. Wieviele images können aus einem dockerfile erstellt werden?

---

Quelle: https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/