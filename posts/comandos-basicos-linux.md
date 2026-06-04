---
title: Comandos básicos de Linux para principiantes.
date: 2026-06-04
description: Guía completa con los comandos esenciales de Linux explicados paso a paso — desde navegar directorios hasta gestionar paquetes y redes.
---

Si estás empezando en Linux, la terminal puede parecer intimidante. Pero una vez que dominas los comandos básicos, te das cuenta de que es una de las herramientas más poderosas que existen. Esta guía cubre todo lo que necesitas para moverte con confianza en cualquier sistema Linux.

---

## Permisos

### `sudo`

`sudo` significa *superuser do* y permite ejecutar un comando con privilegios de administrador (root) de forma temporal. Es fundamental para poder ejecutar comandos que requieren permisos elevados. Solo hay que anteponerlo al comando:

```bash
sudo nano /etc/passwd
```

Al ejecutarlo, te pedirá tu contraseña de usuario.

---

## Navegación

### `ls`

Lista el contenido de un directorio. Es la forma más básica de ver qué archivos y carpetas existen en tu ubicación actual.

```bash
# Listar el directorio actual
ls

# Listar el directorio /etc
ls /etc

# Listar con detalles (permisos, propietario, tamaño, fecha)
ls -l

# Listar también archivos ocultos
ls -a
```

### `cd`

*Change directory* — sirve para moverte entre directorios.

```bash
# Ir a /etc
cd /etc

# Volver al directorio superior
cd ..

# Ir al directorio home del usuario
cd ~
```

### `pwd`

*Print working directory* — muestra la ruta completa del directorio donde estás actualmente.

```bash
pwd
```

### `tree`

Muestra la estructura de directorios y archivos en forma de árbol, de manera jerárquica y visual.

```bash
# Mostrar estructura del directorio actual
tree

# Mostrar solo directorios
tree -d

# Limitar profundidad a dos niveles
tree -L 2
```

### `clear`

Limpia la pantalla del terminal. No afecta los resultados de comandos anteriores, solo despeja la vista.

```bash
clear
```

---

## Gestión de archivos y directorios

### `cat`

*Concatenate* — muestra el contenido de archivos, los concatena y puede redirigirlos hacia otros archivos o comandos.

```bash
# Mostrar el contenido de un archivo
cat ejemplo.txt

# Concatenar varios archivos en uno solo
cat parte1.txt parte2.txt > completo.txt
```

### `cp`

*Copy* — copia archivos y directorios manteniendo el original.

```bash
# Copiar un archivo a otro directorio
cp documento.txt /home/user/Documentos/

# Copiar un directorio completo de forma recursiva
cp -r proyecto/ respaldo_proyecto/

# Copiar manteniendo permisos y atributos
cp -p config.ini /etc/miapp/
```

### `mv`

*Move* — mueve o renombra archivos y directorios. A diferencia de `cp`, no mantiene el original.

```bash
# Mover un archivo a otro directorio
mv informe.txt /home/user/Documentos/

# Renombrar un archivo
mv notas.txt notas_antiguas.txt

# Mover un directorio completo
mv proyecto/ /home/user/Desarrollo/
```

### `rm`

*Remove* — elimina archivos y directorios. **Úsalo con cuidado, no hay papelera de reciclaje.**

```bash
# Eliminar un archivo
rm notas.txt

# Eliminar un directorio completo de forma recursiva
rm -r proyecto/

# Eliminar con confirmación interactiva
rm -i archivo.txt
```

### `mkdir`

*Make directory* — crea nuevos directorios.

```bash
# Crear un directorio simple
mkdir proyectos

# Crear varios directorios a la vez
mkdir fotos videos documentos

# Crear una estructura completa de directorios
mkdir -p proyectos/web/frontend/src
```

### `nano`

Editor de texto en la terminal, simple e intuitivo. Si el archivo no existe, lo crea.

```bash
# Editar un archivo de texto
nano notas.txt

# Editar un archivo del sistema con permisos elevados
sudo nano /etc/hosts

# Crear y editar un script
nano backup.sh
```

> **Atajos útiles en nano:** `Ctrl+O` para guardar · `Ctrl+X` para salir · `Ctrl+W` para buscar

### `chown`

*Change owner* — cambia el propietario y/o el grupo de archivos o directorios.

```bash
# Cambiar el propietario de un archivo
sudo chown usuario ejemplo.sh

# Cambiar propietario y grupo a la vez
sudo chown usuario:grupo proyecto/

# Cambiar propiedad de forma recursiva
sudo chown -R usuario:usuario /var/www/misitio
```

### `chmod`

*Change mode* — cambia los permisos de archivos y directorios.

Los permisos son: **r** (leer), **w** (escribir), **x** (ejecutar)
Los grupos son: **u** (usuario), **g** (grupo), **o** (otros), **a** (todos)

```bash
# Dar permisos de ejecución a un script
chmod +x miscript.sh

# Quitar permisos de ejecución
chmod -x miscript.sh

# Asignar permisos numéricos (modo octal)
chmod 644 documento.txt

# Permisos específicos por grupo
chmod u+w ejemplo.txt
chmod ug-x script.sh
```

### `./`

No es un comando, pero es esencial para ejecutar scripts con permisos de ejecución.

```bash
./script.sh
sudo ./script.sh
```

### `tar`

*Tape archive* — empaqueta y comprime varios archivos o directorios en un solo archivo.

```bash
# Crear un archivo comprimido .tar.gz
tar -czvf backup.tar.gz documentos/

# Extraer un archivo .tar.gz
tar -xzvf backup.tar.gz

# Crear un .tar sin compresión
tar -cvf proyecto.tar proyecto/
```

> Para archivos `.zip` usa los comandos `zip` y `unzip`.

---

## Búsqueda y filtrado

### `grep`

*Global regular expression print* — busca texto dentro de archivos o dentro de la salida de otros comandos.

```bash
# Buscar una palabra dentro de un archivo
grep "error" servidor.log

# Buscar ignorando mayúsculas/minúsculas
grep -i "usuario" datos.txt

# Filtrar la salida de otro comando
ps aux | grep firefox
```

### `find`

Busca archivos y directorios según nombre, tipo, tamaño, fecha, permisos, propietario, y más.

```bash
# Buscar un archivo por nombre
find ./ -name "notas.txt"

# Buscar todos los archivos PDF en un directorio
find /home/biblioteca -type f -name "*.pdf"

# Buscar solo directorios
find / -type d -name "config"

# Buscar y eliminar archivos temporales
find . -type f -name "*.tmp" -delete
```

---

## Información del sistema y procesos

### `top`

Muestra en tiempo real el estado del sistema: uso de CPU, memoria y procesos activos.

```bash
# Ver el estado del sistema en tiempo real
top

# Mostrar solo los procesos de un usuario
top -u usuario
```

### `ps`

*Process status* — muestra una instantánea de los procesos en ejecución.

```bash
# Mostrar procesos del terminal actual
ps

# Listar todos los procesos del sistema
ps aux

# Mostrar todos los procesos en formato completo
ps -ef
```

### `df`

*Disk free* — muestra el espacio usado y disponible en los sistemas de archivos montados.

```bash
# Mostrar uso de todos los sistemas de archivos
df

# Mostrar en formato legible (MB, GB)
df -h

# Mostrar información de un sistema de archivos concreto
df -h /home
```

### `du`

*Disk usage* — muestra cuánto espacio ocupan archivos y directorios.

```bash
# Mostrar el tamaño de un directorio en formato legible
du -h /home/

# Mostrar solo el total de un directorio
du -sh carpeta/

# Limitar la profundidad del análisis
du -h -d 1 /var/log
```

---

## Red y conectividad

### `curl`

Transfiere datos desde o hacia un servidor usando HTTP, HTTPS, FTP y muchos otros protocolos.

```bash
# Descargar el contenido de una página web
curl https://example.com

# Guardar un archivo con nombre personalizado
curl -o salida.js https://cdn.jsdelivr.net/npm/vue/dist/vue.js

# Reanudar una descarga interrumpida
curl -C - -O https://servidor.com/archivo.iso
```

### `wget`

Descarga archivos desde la web de forma no interactiva.

```bash
# Descargar un archivo directamente
wget https://wordpress.org/latest.zip

# Guardar con un nombre específico
wget -O archivo.zip https://github.com/proyecto/archivo.zip

# Reanudar una descarga interrumpida
wget -c https://releases.ubuntu.com/noble/ubuntu-24.04.4-live-server-amd64.iso
```

---

## Gestión de paquetes

Cada distribución usa su propio gestor de paquetes. Aquí los más comunes:

### `apt` — Debian, Ubuntu, Linux Mint

```bash
sudo apt install firefox       # Instalar
sudo apt remove htop           # Desinstalar
sudo apt update                # Actualizar base de datos
sudo apt upgrade               # Actualizar todos los paquetes
```

### `dnf` — Fedora, RHEL

```bash
sudo dnf install chrome        # Instalar
sudo dnf remove htop           # Desinstalar
sudo dnf upgrade               # Actualizar el sistema
```

### `zypper` — openSUSE

```bash
sudo zypper install ffmpeg     # Instalar
sudo zypper remove ffmpeg      # Desinstalar
sudo zypper update             # Actualizar el sistema
```

### `pacman` — Arch Linux, Manjaro

```bash
sudo pacman -S gimp            # Instalar
sudo pacman -R gimp            # Desinstalar
sudo pacman -Syu               # Actualizar el sistema
```

### `snap` — Universal (Canonical)

```bash
sudo snap install spotify      # Instalar
sudo snap remove spotify       # Desinstalar
sudo snap refresh              # Actualizar todos los paquetes
```

---

## Compilar desde código fuente

En ocasiones necesitarás compilar un paquete que no está disponible como binario. El proceso genérico es:

```bash
tar -xf paquete.tar.gz
cd paquete/
./configure
make
sudo make install
```

---

La terminal de Linux no es un obstáculo — es una ventaja. Con estos comandos tienes las bases para administrar tu sistema, automatizar tareas y entender cómo funciona Linux por dentro. El siguiente paso es practicar: abre una terminal y prueba cada uno. ⚡️
