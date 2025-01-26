# Juego del Número Secreto

Este proyecto es un juego interactivo desarrollado con **HTML**, **CSS** y **JavaScript**. La idea principal es que el jugador intente adivinar un número secreto generado aleatoriamente por el sistema dentro de un rango definido. Es una implementación digital del clásico juego que muchos hemos jugado en la vida real. Para el desarrollo se puede observar el uso de funciones, manipulación del DOM, uso de listas y lógica de programación

## 📋 Características

- **Interfaz interactiva:** Diseño sencillo y fácil de usar.
- **Feedback inmediato:** El sistema indica si el número ingresado es mayor o menor que el número secreto.
- **Control del juego:** Posibilidad de reiniciar el juego una vez haz adivinado el número correctamente.
- **Niveles personalizables:** ¡PRÓXIMAMENTE! Configuración del rango de números y máxima cantidad de intentos para ajustar la dificultad.

## 🛠️ Tecnologías utilizadas

- **HTML5:** Estructura del juego.
- **CSS3:** Estilo y diseño de la interfaz.
- **JavaScript:** Lógica del juego y manejo de eventos.

## 🏆 Cómo jugar

1. Ingresa un número en la caja de texto dentro del rango especificado.
2. Presiona el botón `Intentar` para comprobar si acertaste.
3. El sistema te dará pistas:
   - "El número secreto es mayor."
   - "El número secreto es menor."
4. Continúa intentando hasta adivinar el número secreto. Tendrás un máximo de 3 intentos.
5. Una vez que aciertes, podrás reiniciar el juego para volver a jugar. Sólo debes presionar el botón `Nuevo Juego`
6. En cada Nuevo Juego los números secretos que haz adivinado no volverán a salir. Tú meta será adivinar todos los números secretos nuevos en cada partida y recordar los que ya salieron para avanzar rápidamente.

## ⚙️ Instalación y ejecución

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/pablins/game-secret-number.git
   ```
2. Abre el archivo `index.html` en tu navegador web.

## ✍ Personalización

Puedes ajustar el rango del número secreto modificando las siguientes líneas en el archivo JavaScript:
```javascript
const NUMERO_SECRETO_MAXIMO_POSIBLE = 10; // Número máximo del rango
const NUMERO_MAXIMO_INTENTOS = 3; // Número máximo de intentos para adivinar el número secreto
```

## 🤝 Contribuciones

¡Son bienvenidas! Si tienes ideas para mejorar este proyecto, por favor crea un "pull request" o abre un "issue".

## 😀 Autor

Este proyecto fue desarrollado como parte del curso de lógica de programación en **Alura Latam**.

## 🖨 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
