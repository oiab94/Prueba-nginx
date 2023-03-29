# Pruebas echas en Nginx

## Configuración de nginx

Por defecto el nombre del archivo de configuración de NGINX es **`nginx.conf`** y se encuentra en el directorio **`/etc/nginx`** (el directorio **"/etc"** contiene casi todo los archivos de configuración)

- [Archivo de configuración](/nginx/etc/nginx.conf)

- [Contextos](/nginx/conf.d/) : Directivas que se puede aplicar a los diferentes tráficos 
  - `events` 	-> Conexiones generales procesadas
  - `http` 		-> Trafico HTTP
  - `mail` 		-> Trafico mail
  - `stream` 	-> Trafico TCP y UDP
  
Para recargar todas las configuraciones realizadas utilizar **`nginx -s reload`**