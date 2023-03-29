## Tarea 3

LINK: https://cpstuardo.github.io/t3_ti/
Nota: Para que aparezcan los vuelos es necesario presionar el botón "Solicitar información vuelos"

### Herramientas:

React (JavaScript)

### Objetivo:

Consumir un websocket, para mostrar datos en tiempo real. Websocket entregará datos de un centro de control de aviones. En su página web deberán mostrar la posición en tiempo real de aviones sobre un mapa, la información del avión y sus pasajeros y por último un chat global para los operadores del centro de control.
No se debe guardar información en bases de datos, solo se debe mostrar la información que se alcanzó a consumir desde que se inicia la conexión con el websocket.

### Conexión con Websocket:
- Protocolo: wss://
- Servidor: http://tarea-3-websocket.2021-1.tallerdeintegracion.cl
- Ruta: /flights

### Eventos emitidos por el Websocket
- POSITION: Envía posición actual de un vuelo
- FLIGHTS: Envía información sobre los vuelos
- CHAT: Envía mensajes de los operadores de otros centros de control.

### Eventos que recibe el Websocket
- FLIGHTS: gatilla el envío de la información de todo los vuelos.
- CHAT: recibe un mensaje y envía este mensaje a todos los clientes conectados al websocket.


