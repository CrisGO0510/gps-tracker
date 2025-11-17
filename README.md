```markdown
# GPS Tracker en Tiempo Real

Este proyecto es una **interfaz web para un GPS basado en ESP32** que envía coordenadas a **Firebase Realtime Database**, y las visualiza en **tiempo real** mediante un mapa interactivo.

La página web está disponible en:  
[https://crisgo0510.github.io/gps-tracker/](https://crisgo0510.github.io/gps-tracker/)

---

## Descripción

El proyecto permite:

- Leer las coordenadas GPS enviadas por un **ESP32**.  
- Almacenar los datos en **Firebase Realtime Database**.  
- Mostrar la ubicación actual en un **mapa interactivo** en tiempo real.  
- Centrar el mapa sobre el marcador mediante un **botón flotante**.  

El mapa se actualiza automáticamente cada vez que Firebase recibe nuevos datos del ESP32, sin necesidad de recargar la página ni hacer polling constante.

---

## Tecnologías utilizadas

- **Angular 20**: Framework frontend para la interfaz web.  
- **AngularFire / Firebase SDK**: Para conectarse a Firebase Realtime Database en tiempo real.  
- **Leaflet**: Librería de mapas para mostrar la ubicación GPS.  
- **ESP32**: Microcontrolador que envía coordenadas GPS a Firebase.

---

## Estructura del proyecto

```

src/
├─ app/
│  ├─ map/          # Componente del mapa en tiempo real
│  └─ services/     # Servicio para obtener datos GPS de Firebase
├─ assets/          # Iconos y recursos del mapa
├─ environments/    # Configuración de Firebase
└─ styles.scss      # Estilos globales

````

---

## Cómo usarlo

1. Configurar tu **ESP32** para enviar coordenadas a Firebase.  
2. Configurar Firebase Realtime Database y actualizar `environment.ts` con tus credenciales.  
3. Instalar dependencias:

```bash
npm install
````

4. Levantar la aplicación en desarrollo:

```bash
ng serve
```

5. Abrir la página en tu navegador:

```
http://localhost:4200
```

6. Verás el mapa con la ubicación en tiempo real del ESP32 y podrás centrar el marcador usando el botón flotante.

---

## Publicación

El proyecto está publicado en GitHub Pages:
[https://crisgo0510.github.io/gps-tracker/](https://crisgo0510.github.io/gps-tracker/)

---

## Licencia

Este proyecto está bajo la licencia MIT.
