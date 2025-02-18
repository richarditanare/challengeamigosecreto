🎲 Sorteo de Amigos
📝 Descripción
Una aplicación web interactiva que permite a los usuarios crear una lista de nombres y realizar sorteos aleatorios entre ellos. Perfecta para organizar juegos de amigo secreto, asignar tareas al azar, o simplemente tomar decisiones aleatorias entre un grupo de personas.
✨ Características Principales

👥 Agregar nombres a una lista mediante un campo de texto
✅ Validación de entrada para evitar campos vacíos
📋 Visualización en tiempo real de la lista de nombres
🎯 Selección aleatoria de nombres con un solo clic

🚀 Cómo Usar

Ingresa el nombre de un amigo en el campo de texto
Haz clic en "Adicionar" para agregar el nombre a la lista
Repite el proceso para agregar más nombres
Cuando estés listo, haz clic en "Sortear Amigo" para seleccionar un nombre al azar

🛠️ Tecnologías Utilizadas

HTML5
CSS3
JavaScript

💻 Instalación

Clona este repositorio:

bashCopygit clone https://github.com/tuusuario/sorteo-amigos.git

Abre el archivo index.html en tu navegador favorito

🎯 Ejemplo de Uso
javascriptCopy// Ejemplo de cómo se realiza el sorteo
function sortearAmigo() {
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    return listaAmigos[indiceAleatorio];
}
📱 Capturas de Pantalla
<div align="center">
  <img src="/screenshots/pantalla-principal.png" alt="Pantalla Principal" width="400"/>
  <p><em>Pantalla principal de la aplicación</em></p>
  <img src="/screenshots/sorteo-ejemplo.png" alt="Ejemplo de Sorteo" width="400"/>
  <p><em>Resultado de un sorteo</em></p>
</div>
