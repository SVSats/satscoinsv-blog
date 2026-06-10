🐧 Comandos básicos de Linux para principiantes
Guía completa — explora, copia y aprende

Practica en tu terminal — cada comando es una herramienta poderosa.

Índice
Permisos
Navegación
Gestión de archivos y directorios
Búsqueda y filtrado
Información del sistema y procesos
Red y conectividad
Gestión de paquetes
Compilar desde código fuente
Permisos
sudo
Ejecuta un comando con privilegios de superusuario (root).

Ejemplos:

sudo nano /etc/passwd

Navegación
ls
Lista el contenido de un directorio.

Ejemplos:
ls
ls -l
ls -a /etc

cd
Cambia el directorio actual.

Ejemplos:
cd /etc
cd ..
cd ~

pwd
Muestra la ruta del directorio actual.

Ejemplos:
pwd

tree
Muestra estructura de directorios en árbol.

Ejemplos:
tree
tree -d
tree -L 2

clear
Limpia la pantalla de la terminal.

Ejemplos:
clear

Gestión de archivos y directorios
cat
Muestra o concatena archivos.

Ejemplos:
cat ejemplo.txt
cat parte1.txt parte2.txt > completo.txt

cp
Copia archivos o directorios.

Ejemplos:
cp documento.txt /home/user/Documentos/
cp -r proyecto/ respaldo/
cp -p config.ini /etc/miapp/

mv
Mueve o renombra archivos.

Ejemplos:
mv informe.txt Documentos/
mv notas.txt notas_antiguas.txt

rm
Elimina archivos o directorios (¡cuidado!).

Ejemplos:
rm notas.txt
rm -r proyecto/
rm -i archivo.txt

mkdir
Crea nuevos directorios.

Ejemplos:
mkdir proyectos
mkdir -p proyectos/web/frontend/src

nano
Editor de texto simple en terminal.

Ejemplos:
nano notas.txt
sudo nano /etc/hosts

chown
Cambia propietario y grupo.

Ejemplos:
sudo chown usuario ejemplo.sh
sudo chown -R usuario:usuario /var/www

chmod
Cambia permisos de archivos.

Ejemplos:
chmod +x miscript.sh
chmod 644 documento.txt
chmod u+w ejemplo.txt

./
Ejecuta un script en el directorio actual.

Ejemplos:
./script.sh
sudo ./script.sh

tar
Empaqueta y comprime archivos.

Ejemplos:
tar -czvf backup.tar.gz documentos/
tar -xzvf backup.tar.gz

Búsqueda y filtrado
grep
Busca texto dentro de archivos o entrada.

Ejemplos:
grep 'error' servidor.log
grep -i 'usuario' datos.txt
ps aux | grep firefox

find
Busca archivos y directorios.

Ejemplos:
find ./ -name 'notas.txt'
find / -type f -name '*.pdf'
find . -type f -name '*.tmp' -delete

Información del sistema y procesos
top
Muestra procesos en tiempo real y uso de recursos.

Ejemplos:
top
top -u usuario

ps
Instantánea de procesos.

Ejemplos:
ps
ps aux
ps -ef

df
Espacio en disco de sistemas de archivos.

Ejemplos:
df -h
df -h /home

du
Uso de disco de archivos/directorios.

Ejemplos:
du -sh carpeta/
du -h -d 1 /var/log

Red y conectividad
curl
Transfiere datos desde/hacia servidores.

Ejemplos:
curl https://example.com
curl -o salida.js https://...
curl -C - -O https://.../archivo.iso

wget
Descarga archivos no interactiva.

Ejemplos:
wget https://wordpress.org/latest.zip
wget -c https://.../ubuntu.iso

Gestión de paquetes
apt (Debian/Ubuntu)
Gestor de paquetes para distribuciones basadas en Debian.

Ejemplos:
sudo apt install firefox
sudo apt update && sudo apt upgrade

dnf (Fedora/RHEL)
Gestor de paquetes para Fedora.

Ejemplos:
sudo dnf install chrome
sudo dnf update

zypper (openSUSE)
Gestor de paquetes openSUSE.

Ejemplos:
sudo zypper install ffmpeg
sudo zypper update

pacman (Arch/Manjaro)
Gestor de paquetes para Arch Linux.

Ejemplos:
sudo pacman -S gimp
sudo pacman -Syu

snap (Universal)
Paquetes universales de Canonical.

Ejemplos:
sudo snap install spotify
sudo snap list

Compilar desde código fuente
Compilador desde fuente
Compila software desde el código fuente.

Ejemplos:
tar -xf paquete.tar.gz
./configure
make && sudo make install


¡Listo! Puedes guardar este contenido en un archivo con extensión `.md` y abrirlo en cualquier editor de Markdown o visor compatible.
