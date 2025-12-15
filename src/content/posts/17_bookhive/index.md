---
title: BookHive
published: 2025-04-28
description: "BookHive es una plataforma moderna de catálogo de libros para compra, búsqueda y reseña de títulos, con micro-servicios escalables."
image: "./cover.png"
tags: [SpringBoot, Microservices, NextJS, JasperReports, DataFaker, PayPal, ZipKin, Docker, Eureka, ReSend]
category: "Proyecto"
draft: false
---

![Web](./homepage.png)

# BookHive | Tienda Virtual de Libros

BookHive es una plataforma e-commerce de librería online construida con arquitectura de microservicios. Permite a usuarios descubrir libros, comprar y dejar reseñas. Incluye pagos reales simulados (PayPal), notificaciones por correo, y trazabilidad distribuida para monitoreo y diagnóstico. BookHive está diseñado como sistema web distribuido donde cada función importante está separada en un microservicio independiente. Está pensado para demostrar una arquitectura escalable, resiliente y observable en un entorno de contenedores.

La arquitectura incluye:
- Servicios backend desacoplados que se comunican mediante APIs REST.
- Descubrimiento dinámico de servicios y configuración centralizada con Spring Cloud.
- Entrada unificada mediante API Gateway para filtrar, enrutar y balancear.
- Frontend moderno con Next.js y React para UI responsiva e interactiva.
- Observabilidad completa con trazabilidad distribuida (Zipkin).

El proyecto está preparado para despliegue en contenedores Docker con múltiples réplicas y configuraciones de red, facilitando escalado y despliegue completo con Docker Compose.

### Listado de funcionalidades para usuarios

- Buscar y navegar libros por título, autor y género.
- Ver detalles de libros, incluyendo reseñas y valoraciones publicadas por otros usuarios.
- Agregar y eliminar ítems en el carrito de compras.
- Realizar compras utilizando la integración con PayPal.
- Gestionar órdenes (ver estado, historial).
- Dejar reseñas y valoraciones de libros comprados.
- Recibir correos automáticos (confirmación de registro, recibos de compra y factura PDF).
- Autenticación segura con JWT (inicio de sesión / registro).

### Listado de funcionalidades para usuarios administradores

- Panel administrativo para gestionar el catálogo de libros, órdenes y usuarios.
- CRUD completo del catálogo de libros (crear, editar, eliminar).
- Visualizar y gestionar órdenes de usuarios, cambiar estados.
- Gestión de usuarios y roles, asignar permisos.
- Acceso a métricas y trazabilidad distribuida para análisis de performance y depuración.
- Monitorear servicios a través de observabilidad Zipkin.

#### Demostración en video

<iframe width='100%' height="500" src="https://www.youtube.com/embed/LznAX3MZkr0?si=hPa6_T0TQ_H8Sbbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Alcance y limitaciones
- Cubre un flujo completo básico de comercio electrónico de libros con microservicios.
- Incluye mecanismos de seguridad, pagos, notificaciones, y trazabilidad.
- Preparado para despliegue en contenedores con Docker Compose.
- Proyecto demostrativo, no una solución comercial completa.
- Configuración y despliegue requieren experiencia técnica en microservicios, Docker y redes distribuidas.
- No incluye integración con Kubernetes por defecto (usa Docker Compose).
- Dependencias externas (PayPal, ReSend) requieren credenciales y configuración real para funcionar.

## Tecnologías utilizadas

### Backend

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Eureka](https://spring.io/projects/spring-cloud-netflix)
- [Spring Cloud Config](https://spring.io/projects/spring-cloud-config)
- [Spring Cloud Gateway](https://spring.io/projects/spring-cloud-gateway)
- [Spring Security](https://spring.io/projects/spring-security)
- [JWT (JSON Web Tokens)](https://jwt.io/)
- [Spring Cloud](https://spring.io/projects/spring-cloud)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [JasperReports](https://community.jaspersoft.com/project/jasperreports-library)
- [PayPal SDK](https://developer.paypal.com/docs/api/overview/)
- [Zipkin](https://zipkin.io/)

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Autores

- [Vladimir Curiel](https://vladimircuriel.com/) - Co-desarrollador
- [Steven Mateo](https://www.linkedin.com/in/steven-manuel-mateo-ramos-6626152b2/) - Co-desarrollador

### Repositorio de GitHub

::github{repo="vladimircuriel/bookhive"}
