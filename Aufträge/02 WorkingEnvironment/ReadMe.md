# Arbeitsumgebung für M347 - Dienste mit Containern entwickeln

## Linux Shell unter Windows 11
Das Windows Subsystem für Linux ([WSL](https://de.wikipedia.org/wiki/Windows-Subsystem_f%C3%BCr_Linux)) ist eine gute Möglichkeit, um an eine echte Linux-Shell unter Windows zu kommen.

Wir werden nun WSL 2 einrichten, damit alle die gleich Ausgangsbasis für zukünftige Übungen haben.
Unter MacOS und Linux brauchen sie diese Schritte natürlich nicht ausführen.

>**Voraussetzungen**<br>
>Stellen Sie sicher, dass Ihr [System alle Voraussetzungen erfüllt](https://learn.microsoft.com/de-de/windows/wsl/install#prerequisites)!


Starten sie eine PowerShell und geben Sie folgenden Befehl ein.

```PowerShell
wsl --status
```
Sie erhalten dann Auskunft über die aktuelle Version von WSL. Die Standardversion sollte auf 2 stehen.<br>
Falls bei Ihnen jedoch die *Version 1* steht, müssen sie ein [WSL-Upgrade](https://learn.microsoft.com/de-de/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2) vornehmen.

Aktualisieren Sie ihre WSL-Installation mit


```PowerShell
wsl --update
```
Installieren Sie die aktuelle Ubuntu Distribution mit

```PowerShell
wsl --install ubuntu
```

Bei der Installation werden Sie gebeten, einen Nutzernamen für die Distribution einzugeben. Nutzen Sie am besten den gleichen Nutzernamen, wie sie ihn auch für Windows nutzen.
Ausserdem müssen Sie ein Passwort für Ihren Linux User vergeben.

Danach sollten Sie eine Linux Shell sehen.
Lassen Sie sich die ID der aktuellen Distribution anzeigen. 

```Bash
uname -r 
```
Herzlichen Glückwunsch. Damit haben Sie eine vollständige Linux Distribution auf ihrem Windows-Rechner am Laufen. Schauen Sie sich ein wenig um und probieren sie ein paar Sachen aus.

## Docker Desktop

Wir benötigen noch eine Docker-Umgebung auf unserem PC, um Container entwickeln und ausführen zu können. Eine gängige Variante dafür ist [Docker Desktop](https://docs.docker.com/desktop/).

Installieren Sie Docker Desktop nach dieser [Anleitung](https://docs.docker.com/desktop/install/windows-install/). Halten Sie sich dabei an die Anweisungen für "WSL 2 Backend" und nicht für Hyper-V.

Sie können Docker Desktop leider nicht ohne Weiteres ausführen, falls Sie nicht als Adminitrator auf Ihrem PC eingelogt sind.
Um Docker auch als Non-Root ausführen zu können, müssen Sie ihren aktuellen user der Gruppe docker-users hinzufügen.

>**Wichtig:**
>
>Damit Sie auf den docker-Befehl in ihrer Ubuntu-Shell zugreifen können, müssen Sie noch dafür sorgen, dass in Docker-Desktop unter *Einstellungen -> Resources -> WSL Integration* das Häckchen bei "Enable integraton with my default WSL distro" ausgewählt ist.

---
>**Optional**:
>
>Die erforderlichen Berechtigungen zum Arbeiten mit Docker-Containern haben Sie nur, wenn Sie Mitglied der Gruppe „docker-users“ sind. Führen Sie die folgenden Schritte aus, um sich selbst unter Windows 10 oder höher der Gruppe hinzuzufügen:
>
>1. Öffnen Sie über das Startmenü die Computerverwaltung.
>2. Erweitern Sie Lokale Benutzer und Gruppen, und klicken Sie auf Gruppen.
>3. Suchen Sie die Gruppe docker-users, klicken Sie mit der rechten Maustaste darauf, und klicken Sie auf Zur Gruppe hinzufügen.
>4. Fügen Sie Ihr Benutzerkonto oder Ihre Benutzerkonten hinzu.
>5. Melden Sie sich zuerst ab und dann wieder an, damit die Änderungen wirksam werden.
---

## Unser erster Docker Container

Öffnen Sie eine Ubuntu-Shell (über Windows Start) und führen Sie folgenden Befehl aus:

```Bash
docker run -d -p 80:80 docker/getting-started   
```

Öffnen Sie danach im Web-Browser (z.B.: Firefox) "localhost".

Wenn Sie die "Getting Started" Seite von Docker sehen, dann haben Sie bisher alles richtig gemacht.
**Glückwunsch!!**

Sie haben einen Docker Container erstellt, in dem ein Webserver läuft. 

Lesen Sie sich die erste Seite des Tutorials ("Getting Started") durch.

## Visual Studio Code

[VSCode](https://de.wikipedia.org/wiki/Visual_Studio_Code) ist eine häufig genutzte Integrated Development Environment (IDE). Sie wird unter anderem von der Schweizer IT-Legende Erich Gamma entwickelt.

Installieren Sie als nächstes [VSCode](https://code.visualstudio.com/download).

VSCode bietet zahlreiche nützliche Erweiterungen (Extensions) im Zusammenhanng mit Docker. 
Bitte installieren Sie die Docker Extension nach dieser [Anleitung](https://code.visualstudio.com/docs/containers/overview#_installation).

**Nun sind Sie bereit für die weiteren Aufträge und Experimente in diesem Modul**

---

>## Bonus - erste WebApp im Container
>
>**Auftrag**:
>Erstellen Sie eine einfache TODO Web-Applikation in einem Docker Container. Folgen Sie dabei diesen [Anweisungen](http://localhost/tutorial/our-application/). *Achtung:* Die Anweisungen werden von einem Webserver gehostet, den Sie vorher (bei *Unser erster Docker Container*) erstellt haben. Stellen Sie sicher, das dieser Container läuft.
>
>**Erwartungen**:
>Die Benutzeroberfläche der TODO App sollte in Ihrem Browser unter ```http://localhost:3000``` aufrufbar sein.
