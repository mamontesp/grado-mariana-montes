# 🌸 Invitación de Grado - Mariana Montes

Una hermosa página de invitación para la ceremonia de grado de Mariana Montes, Ingeniería Topográfica.

## 🎨 Características

- Diseño moderno y responsivo con temática floral
- Formulario de confirmación de asistencia (RSVP)
- Optimizado para móviles y escritorio
- Animaciones suaves y elegantes
- Completamente en español

## 📋 Información del Evento

- **Evento:** Grado de Mariana Montes - Ingeniería Topográfica
- **Fecha:** Sábado, 22 de Noviembre de 2025
- **Lugar:** Calle 22 a sur # 2-39

## 🚀 Cómo Publicar en GitHub Pages

### Paso 1: Subir el Código a GitHub

1. Abre tu terminal en esta carpeta
2. Ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Agregar página de invitación de grado"
git push origin main
```

### Paso 2: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub: https://github.com/tu-usuario/grado-mariana-montes
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source** (Fuente), selecciona **main** como rama
5. Haz clic en **Save** (Guardar)
6. ¡Espera unos minutos y tu página estará disponible en: `https://tu-usuario.github.io/grado-mariana-montes/`

## 📧 Configurar las Confirmaciones de Asistencia (RSVP)

El formulario está listo para funcionar, pero necesitas conectarlo a un servicio para recibir las respuestas. Aquí tienes 3 opciones:

### Opción 1: Formspree (Recomendado - Gratis y Fácil)

1. Ve a [Formspree.io](https://formspree.io) y crea una cuenta gratuita
2. Crea un nuevo formulario
3. Copia tu Form ID
4. Abre `script.js` y busca la sección comentada de Formspree
5. Descomenta el código y reemplaza `YOUR_FORM_ID` con tu ID real
6. Guarda y sube los cambios a GitHub

```javascript
fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
```

### Opción 2: Google Forms

1. Crea un Google Form con los campos correspondientes
2. Cambia el botón del formulario para que abra el Google Form en una nueva pestaña
3. Es la opción más simple pero menos integrada

### Opción 3: EmailJS

1. Ve a [EmailJS.com](https://www.emailjs.com/) y crea una cuenta
2. Configura tu servicio de email
3. Crea una plantilla de email
4. Descomenta el código de EmailJS en `script.js` y agrega tus credenciales

## 🎨 Personalización

### Cambiar Colores

Edita las variables en `styles.css`:

```css
:root {
    --primary-color: #d4a5a5;      /* Color principal */
    --secondary-color: #f5e6e8;    /* Color secundario */
    --accent-color: #9b6b6b;       /* Color de acento */
}
```

### Modificar Contenido

- **Texto de invitación:** Edita la sección `.invitation-message` en `index.html`
- **Información del evento:** Modifica la sección `.event-details` en `index.html`

## 📱 Vista Previa Local

Para ver la página en tu computadora antes de publicarla:

1. Simplemente abre el archivo `index.html` en tu navegador
2. O usa un servidor local:
   ```bash
   python -m http.server 8000
   ```
   Luego visita: `http://localhost:8000`

## 📸 Compartir la Invitación

Una vez publicada en GitHub Pages, puedes:

1. Compartir el enlace directo
2. Crear un código QR con el enlace (usando [QR Code Generator](https://www.qr-code-generator.com/))
3. Enviar el enlace por WhatsApp, email, etc.

## 💐 Créditos

Desarrollado con amor para la celebración de Mariana Montes.

---

¡Felicidades Mariana! 🎓✨
