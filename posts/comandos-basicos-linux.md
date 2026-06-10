```markdown
# 🐧 Comandos de Linux para principiantes (Guía Interactiva)  
**Explora, copia, practica y domina la terminal**

> Practica en tu terminal o en nuestro **Terminal Virtual Seguro**. Cada comando es una herramienta poderosa.  
> **Copia y pega** directamente desde los bloques de código.

---

## 📋 Índice

- [Permisos](#permisos)
- [Navegación](#navegación)
- [Gestión de archivos y directorios](#gestión-de-archivos-y-directorios)
- [Búsqueda y filtrado](#búsqueda-y-filtrado)
- [Pipes y Redirecciones (El superpoder de Linux)](#pipes-y-redirecciones)
- [Alias (Tus propios atajos)](#alias)
- [Información del sistema y procesos](#información-del-sistema-y-procesos)
- [Red, SSH y conectividad](#red-ssh-y-conectividad)
- [Gestión de paquetes](#gestión-de-paquetes)
- [Compilar desde código fuente](#compilar-desde-código-fuente)
- [🏆 Tabla de Progreso y Ejercicios Prácticos](#tabla-de-progreso-y-ejercicios-prácticos)

---

## 🔑 Permisos

### `sudo` — Ejecuta un comando con privilegios de superusuario
```bash
sudo nano /etc/passwd
sudo apt update
```

---

## 🧭 Navegación

### `ls` — Lista el contenido de un directorio
```bash
ls          # simple
ls -l       # formato largo (permisos, tamaño, fecha)
ls -la      # muestra archivos ocultos
ls -h       # tamaños legibles
```

### `cd` — Cambia de directorio
```bash
cd /etc
cd ..           # subir un nivel
cd ~            # ir al home
cd -            # volver al directorio anterior
```

### `pwd` — Muestra la ruta actual
```bash
pwd
```

### `tree` — Estructura de directorios en árbol
```bash
tree            # instalación: sudo apt install tree
tree -L 2       # solo 2 niveles
tree -d         # solo directorios
```

### `clear` — Limpia la pantalla
```bash
clear
# o presiona Ctrl + L
```

---

## 📁 Gestión de archivos y directorios

### `cat` — Muestra o concatena archivos
```bash
cat archivo.txt
cat parte1.txt parte2.txt > completo.txt
cat > nuevo.txt     # crea archivo (Ctrl+D para guardar)
```

### `cp` — Copia archivos o directorios
```bash
cp archivo.txt /ruta/destino/
cp -r carpeta/ respaldo/          # recursivo (carpetas)
cp -p origen destino              # preserva permisos y timestamps
```

### `mv` — Mueve o renombra
```bash
mv archivo.txt /nueva/carpeta/
mv viejo.txt nuevo.txt            # renombrar
```

### `rm` — Elimina (¡usa con cuidado!)
```bash
rm archivo.txt
rm -r carpeta/                    # recursivo
rm -i archivo.txt                 # confirma antes de borrar
rm -rf carpeta/                   # forzado (peligroso)
```

### `mkdir` — Crea directorios
```bash
mkdir proyectos
mkdir -p proyectos/web/frontend/src   # crea toda la ruta de una vez
```

### `nano` — Editor de texto simple
```bash
nano archivo.txt
sudo nano /etc/hosts
# Atajos: Ctrl+O (guardar), Enter (confirmar), Ctrl+X (salir)
```

### `chown` y `chmod` — Cambiar propietario y permisos
```bash
sudo chown usuario:grupo archivo.txt
sudo chown -R usuario:usuario /var/www

chmod 644 documento.txt           # lectura/escritura para dueño, solo lectura para otros
chmod +x script.sh                # dar permiso de ejecución
chmod 755 script.sh
```

### `./` — Ejecutar script
```bash
./mi_script.sh
sudo ./instalador.sh
```

### `tar` — Comprimir y descomprimir
```bash
tar -czvf backup.tar.gz carpeta/          # comprimir
tar -xzvf backup.tar.gz                   # descomprimir
tar -tvf archivo.tar.gz                   # ver contenido
```

---

## 🔗 Pipes y Redirecciones

### `|` (Pipe) — Conectar la salida de un comando con la entrada de otro
```bash
ps aux | grep firefox               # buscar procesos activos
cat servidor.log | grep "ERROR"     # filtrar solo los errores de un log
ls -l | less                        # ver listas largas página por página
```

### `>` y `>>` — Redireccionar salida a archivos
```bash
echo "Hola El Salvador" > saludo.txt   # crea o sobrescribe el archivo
echo "¡Pura vida!" >> saludo.txt       # añade una línea al final sin borrar
ls -l > archivos.txt                   # guarda la lista de archivos en un .txt
```

---

## ⚡ Alias

### Crea tus propios atajos personalizados
```bash
alias actualizar='sudo apt update && sudo apt upgrade'
alias misproyectos='cd ~/Documentos/proyectos && ls -la'
alias ip='curl ifconfig.me'

# Para que sea permanente, guárdalo en tu archivo de configuración
nano ~/.bashrc
# Añade tus alias al final del archivo, guarda y recarga con:
source ~/.bashrc
```

---

## 📊 Información del sistema y procesos

### `top` / `htop` — Procesos en tiempo real
```bash
top
# htop es más amigable y visual (instalar con: sudo apt install htop)
```

### `ps` — Instantánea de procesos
```bash
ps aux
ps -ef
```

### `df` y `du` — Uso de disco
```bash
df -h                     # espacio disponible en disco
du -sh carpeta/           # tamaño total de una carpeta
```

---

## 🌐 Red, SSH y conectividad

### `curl` y `wget` — Transferir datos y descargar
```bash
curl https://example.com
curl -I https://example.com          # solo cabeceras HTTP
wget https://wordpress.org/latest.zip
wget -c https://.../ubuntu.iso       # continuar descarga interrumpida
```

### `ssh` — Conéctate a servidores remotos (VPS)
```bash
ssh usuario@192.168.1.100            # conectarse por IP
ssh -p 2222 usuario@midominio.com    # conectarse por dominio y puerto personalizado

# Generar llaves SSH seguras para no usar contraseñas
ssh-keygen -t ed25519 -C "tu_correo@ejemplo.com"
```

---

## 📦 Gestión de paquetes

| Distribución     | Comando básico                          |
|------------------|-----------------------------------------|
| **Debian/Ubuntu** | `sudo apt update && sudo apt upgrade` |
| **Fedora/RHEL**   | `sudo dnf update`                      |
| **openSUSE**      | `sudo zypper update`                   |
| **Arch/Manjaro**  | `sudo pacman -Syu`                     |
| **Snap**          | `sudo snap install paquete`            |

---

## 🛠️ Compilar desde código fuente

```bash
tar -xf programa.tar.gz
cd programa
./configure
make
sudo make install
```

---

## 🏆 Tabla de Progreso y Ejercicios Prácticos

### 📝 Tabla de Progreso Interactiva
*(Si estás en la app, marca las casillas para guardar tu avance en la base de datos local)*

| Comando | Descripción | ¡Lo practiqué! |
|---------|-------------|:--------------:|
| `ls -la` | Ver archivos ocultos | ⬜ |
| `cd ~` | Ir al directorio home | ⬜ |
| `mkdir -p` | Crear rutas completas | ⬜ |
| `chmod +x` | Dar permisos de ejecución | ⬜ |
| `grep -i` | Buscar sin importar mayúsculas | ⬜ |
| `tar -xzvf`| Descomprimir archivos | ⬜ |
| `|` (Pipe) | Conectar dos comandos | ⬜ |
| `ssh` | Conectarse a un servidor | ⬜ |

---

### 🎯 Ejercicios Prácticos (Contexto Real y Laboral)

#### 🟢 Ejercicio 1: Monitorear el precio de Bitcoin
*Objetivo: Usar `curl` y `grep` para obtener datos reales del mercado cripto.*
```bash
# Obtener el precio actual de Bitcoin en USD desde una API pública
curl -s https://api.coindesk.com/v1/bpi/currentprice.json | grep -i "rate_float"

# 💡 Reto: Instala la herramienta `jq` (sudo apt install jq) y formatea la salida:
# curl -s https://api.coindesk.com/v1/bpi/currentprice.json | jq '.bpi.USD.rate'
```

#### 🟡 Ejercicio 2: Preparar un entorno de desarrollo web
*Objetivo: Crear la estructura de un proyecto usando `mkdir` y `touch`.*
```bash
# Crear la estructura de un proyecto web (HTML, CSS, JS)
mkdir -p ~/proyectos/mi-primera-web/{css,js,img}
cd ~/proyectos/mi-primera-web

# Crear los archivos base
touch index.html css/styles.css js/script.js

# Verifica que todo se creó correctamente
tree -L 2
```

#### 🔴 Ejercicio 3: Desplegar en un VPS (Simulación de trabajo real)
*Objetivo: Practicar conexión remota y actualización de servidores.*
```bash
# 1. Generar una llave SSH segura
ssh-keygen -t ed25519 -C "satoshi@elsalvador"

# 2. Conectarte a tu servidor (reemplaza con tu IP real de tu VPS gratuito)
ssh root@tu_ip_del_vps

# 3. Una vez dentro del servidor, actualizar paquetes del sistema
sudo apt update && sudo apt upgrade -y

# 4. Salir del servidor
exit 
```

---

**💡 Consejos finales**
- Usa `man comando` o `comando --help` para más información.
- `history` para ver comandos anteriores.
- `Ctrl + R` para buscar en el historial rápidamente.
- ¡Puedes encontrarme en Telegram! como **@marvincha01** para resolver dudas.
```

---

### 💡 Sugerencias para tu aplicación en Python/CustomTkinter:

1. **Terminal Virtual Seguro:** Puedes usar `subprocess` para ejecutar los comandos de los ejercicios en un entorno controlado (como un directorio temporal). La app puede validar si el usuario completó el ejercicio (por ejemplo, verificando si el archivo `index.html` existe en la carpeta `mi-primera-web`).
2. **Base de Datos SQLite:** La "Tabla de Progreso" puede estar vinculada a tu base de datos local. Cada vez que el usuario marque una casilla o complete un ejercicio, se actualiza su porcentaje de avance.
3. **Certificados:** Cuando el usuario complete los 3 ejercicios prácticos y marque toda la tabla, la app puede generar automáticamente un **Certificado de Finalización** en PDF usando librerías como `fpdf2` o `reportlab`.

¿Te gustaría que empecemos a estructurar el código en Python para el **terminal virtual seguro** o prefieres primero definir el diseño de la interfaz en **CustomTkinter**?
