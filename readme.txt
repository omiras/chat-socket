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

improvements
------------
1. Broadcast a message to connected users when someone connects or disconnects.
1.1. Change message format to: ${idUser} ${message} ${Date()}
1.2. Ban bad words (check) https://www.npmjs.com/package/bad-words-es
2. Add support for nicknames.
  2.1 change nick color
3. Add “{user} is typing” functionality.
4. List Show who’s online.
   4.1 Block user
5. Add private messaging.
6. Encrypt messages between parties
7. Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
8. Any other improvements
