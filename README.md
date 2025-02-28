🎲 Sorteo de Amigos
---

📝 Descripción
Una aplicación web interactiva que permite a los usuarios crear una lista de nombres y realizar sorteos aleatorios entre ellos. Perfecta para organizar juegos de amigo secreto, asignar tareas al azar, o simplemente tomar decisiones aleatorias entre un grupo de personas.
✨ Características Principales

👥 Agregar nombres a una lista mediante un campo de texto

✅ Validación de entrada para evitar campos vacíos

✅ Validación de nombres duplicados

📋 Visualización en tiempo real de la lista de nombres

🎯 Selección aleatoria de nombres con un solo clic

✨ Limpia la lista al terminar para que los usuarios puedan jugar nuevamente despues del sorteo

🚀 Cómo Usar
--

1. Ingresa el nombre de un amigo en el campo de texto (mínimo 3)
2. Haz clic en "Adicionar" para agregar el nombre a la lista
3. Repite el proceso para agregar más nombres
4. Cuando estés listo, haz clic en "Sortear Amigo" para seleccionar un nombre al azar

🛠️ Tecnologías Utilizadas
--

HTML5
CSS3
JavaScript

💻 Instalación

Clona este repositorio:

bashCopygit clone https://richarditanare.github.io/challengeamigosecreto/

Abre el archivo index.html en tu navegador favorito

🎯 Ejemplo de Uso
---

Ejemplo de cómo se realiza el sorteo
```
function sortearAmigo() {
    let posicion = Math.floor(Math.random() * listaAmigos.length);
    let ganador = amigos[posicion];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El ganador es: ${ganador}`;
}
```
📱 Capturas de Pantalla
--

<div align="center">
  <img src="/screenshots/pantalla-principal.png" alt="Pantalla Principal" width="400"/>
  <p><em>Pantalla principal de la aplicación</em></p>
  <img src="/screenshots/sorteo-ejemplo.png" alt="Ejemplo de Sorteo" width="400"/>
  <p><em>Resultado de un sorteo</em></p>
</div>
