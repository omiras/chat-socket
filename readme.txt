1. Crear un chat
2. Un usuario se conectará a http://localhost:3000; y le enviaremos un HTML que va a ser el "cliente" (aplicación Web para poder enviar mensajes)
3. Cada vez que el usuario envie un mensaje, este será retransmitido a los demás usuarios

MVC
---
- 1. estar escuchando cambios continuamente del servidor a ver si alguien ha escrito
   - Hacer un GET cada X segundos a ver si hay mensajes nuevos
- 2. hacer manualmente un POST cada vez que queramos enviar un nuevo mensaje

Socket
------
Crear una comunicación para nosotros transperente entre cliente y servidor, y va a ser el socket mediante eventos que nos va a "avisar" si 
- Se ha producido un evento de tipo 'nuevo mensaje'
- Se ha producido un evento de tipo 'usuario conectado'
- Se ha producido un evento de tipo 'usuario desconectado'
