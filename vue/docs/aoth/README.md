---
sidebar: auto
---

# Nodo End Device

Página GitHub [Biblioteca](https://github.com/things4u/ESP-1ch-Gateway)

Abre el archivo **ESP-sc-gway** se creará una carpeta nueva, tendrás que guardar todos los restantes archivos en la nueva carpeta.

## Editanto el archivo **configGway.h**

En general, establecer un **#define** en **1** habilitará la función y establecerlo en **0** la deshabilitará.
Se recomienda al usuario que desactive las funciones que no se utilizan para ahorrar en el uso de la memoria.

### Forzar al inicio formato SPIFFS

#define _SPIFFS_FORMAT 0

Permite al sistema forzar el formateo del sistema de archivos SPIFFS

### Conéctese al WiFi con WiFiManager

#define _WIFIMANAGER 0

La forma más sencilla de configurar el Gateway al WiFi es mediante la función WiFimanager.
WiFiManager pondrá el gateway en modo de punto de acceso para que pueda conectarse a él como un punto de acceso WiFi.

### Configurando el USB

#define _DUSB 1

El usuario puede determinar si se utiliza o no la consola USB para los mensajes de salida.
Cuando se establece _DUSB en 0, todas las salidas de Serial están deshabilitadas.

### Configura el monitor

#define _MONITOR 1

Define el monitor/pantalla

### Configura las estadisticas del estado del WiFi

#define _STATISTICS 3

0 = Sin estadísticas
1 = Realizar un seguimiento de las estadísticas de los mensajes, número determinado por _MAXSTAT
2 = Opción 1 + Realizar un seguimiento de los mensajes recibidos POR cada SF (predeterminado)
3 = Ver la opción 2, pero con información de canal adicional (no se usa cuando no se selecciona Salto)

### Define la banda

#define EU863_870 1

Banda de España (Europa)

### Selecciona el modo de la Clase de operación

#define _CLASS "A"

A: Baseline Class, sensores de baterías
B: Baliza / ahorro de batería, sincronización de los mensajes.
C: Escucha continua

### Define el tipo de Router

#define _UDPROUTER 1

Defina usar la antigua API de puerta de enlace Semtech que es más ligero que el nuevo protocolo basado en TTN tcp.

### Define el Canal

#define _CHANNEL 0

Canal 0.

### Configurando el Factor de Propagación

Establezca el factor _SPREADING en el valor SF7, SF8 - SF12 deseado. Tenga en cuenta que este valor está estrechamente relacionado con el valor utilizado para _CAD. Si _CAD está habilitado, la puerta de enlace no usa el valor de _SPREADING ya que tiene todos los factores de ensanchamiento habilitados.

### Define CAD

#define _CAD 1

Channel Activity Detection, escanea y determina el mejor factor de propagación.

### Define Validar mensajes

#define _CRCCHECK 1

### Definiciones para administrar el servidor web

#define _SERVER 1
#define _REFRESH 1
#define _SERVERPORT 80
#define _MAXBUFSIZE 192

### Define OTA Actualizaciones Por Aire

#define _OTA 1

### Configura los pines de tu placa de desarrollo

#define _PIN_OUT 4

1: HALLARD
2: COMRESULT
3: ESP32 Wemos
4: ESP32 Heltec and TTGO
5: Otras, definelas en loraModem.h

### Define Strict LoRa etiqueta

#define _STRICT_1CH 1

### Espera extra de milisegundos

#define _RXDELAY1 0
#define _RX2_SF 9

### Define el gateway como repetidor

#define _REPEATER 0

### Define si tu placa de desarrollo tiene pantalla OLED

#define _OLED 1

### Define si quieres administrar el gateway sobre UDP

#define _GATEWAYMGT 0

### Define si quieres archivos de registros

#define _STAT_LOG 0

### Configura puerto UDP 

#define _LOCUDPPORT 1700

### Define el servidor local

#define _LOCALSERVER 1

0: Sin _LOCALSERVER
1: _LOCALSERVER se usa para recibir mensajes
2: También transmite mensajes y los codifica

### Configura la hora

#define NTP_TIMESERVER "es.pool.ntp.org"
#define NTP_TIMEZONES	2
#define SECS_IN_HOUR	3600
#define _NTP_INTR 0

Servidor hora (servidor España) y zona horaria GTM +2

### Define el Gateway como Nodo

#define _GATEWAYNODE 0

### Configurar Nodo

#define _TRUSTED_NODES 1

0: No utilice nombres para nodos de confianza
1: Use los nodos como una tabla de traducción de códigos hexadecimales a nombres (en TLN)
2: Igual que 1, pero los nodos NO están en la lista de nodos por eso NO se muestran

### Nombre del archivo de configuracion del gateway

#define _CONFIGFILE "/gwayConfig.txt"

### Define el máximo de Nodos

#define _MAXSEEN 20

### Define la máxima cantidad de elementos en el monitor


### Difine los tiempos

// Timing
#define _PULL_INTERVAL 16					
#define _STAT_INTERVAL 120				
#define _NTP_INTERVAL 3600				
#define _WWW_INTERVAL 60					
#define _FILE_INTERVAL 30					
#define _MSG_INTERVAL 31					
#define _RST_INTERVAL 125					

PULL_DATA mensajes al servidor en segundos
Envar un mensaje 'stat' al servidor
Con qué frecuencia realizamos la sincronización de tiempo NTP
Número de segundos antes de refrescar la página web
Temporizador (en segundos) antes de escribir archivos
Temporizador de mensajes en espera en segundos
Intervalo de reinicio en segundos, reinicio completo del chip

### Difine el tipo de radio

#define CFG_sx1276_radio

TTGO LoRa V.1

### Otras configuraciones

#define _BAUDRATE 115200
#define _MUTEX 0
#define _GWAYSCAN 0
#define _EXPERT 0
#define _TTNSERVER "eu1.cloud.thethings.network"	
#define _TTNPORT 1700							

Standard port for TTN

## Editando el archivo **configNode.h**