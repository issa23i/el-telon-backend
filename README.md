# 🛡️ Backend Telón — reCAPTCHA v2 Invisible

Este proyecto es el backend para la validación de formularios mediante **Google reCAPTCHA v2 Invisible**, desarrollado en Node.js con Express.

---

## 🚀 Características

- Validación de reCAPTCHA invisible en el servidor
- Protección contra bots y spam
- Configuración segura mediante variables de entorno
- Preparado para despliegue en producción

---

## 📦 Requisitos

- Node.js >= 18
- npm
- Clave secreta de reCAPTCHA v2 Invisible (desde [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin))

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/backend-telon.git
cd backend-telon
```markdown
2. Instala las dependencias
```bash
npm install

```markdown
3. Crea tu archivo .env

```bash
PORT=3000
RECAPTCHA_SECRET=tu_clave_secreta
```markdown

---

## 🧪 Uso
 
 1. Inicia el servidor
```bash
 npm start
```markdown

 2. Envía una solicitud POST al endpoint /verify con el token del cliente
```bash
 {
  "token": "token_recaptcha_del_cliente"
}


```markdown
---


## 📁 Estructura del proyecto
```bash
backend-telon/
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md


---

## 🧠 Notas
Este backend está pensado para integrarse con un frontend que use reCAPTCHA v2 Invisible


---

## 📜 Licencia
Este proyecto está bajo licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente.


---
s
## ✨ Autora
Desarrollado por Isabel 