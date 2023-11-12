# Proyecto Hello-Prisma

Este proyecto guía a través de los pasos básicos para configurar un proyecto utilizando Prisma con TypeScript y realizar operaciones comunes. Sigamos estos pasos para comenzar:

## Paso 1: Crear el Proyecto

1. Crear un nuevo directorio para tu proyecto:

   ```bash
   mkdir hello-prisma
   cd hello-prisma
   ```

2. Inicializar el proyecto con pnpm:

   ```bash
   pnpm init -y
   ```

## Paso 2: Configurar TypeScript

3. Instalar TypeScript y las definiciones de tipo para Node:

   ```bash
   pnpm install typescript ts-node @types/node --save-dev
   ```

4. Inicializar el archivo de configuración de TypeScript:

   ```bash
   npx tsc --init
   ```

## Paso 3: Configurar Prisma

5. Instalar la herramienta Prisma y las dependencias necesarias:

   ```bash
   pnpm install prisma --save-dev
   ```

6. Inicializar Prisma y seleccionar el proveedor de la base de datos:

   ```bash
   npx prisma init --datasource-provider <gestor-de-base-de-datos>
   ```

7. Crear y aplicar la primera migración:

   ```bash
   npx prisma migrate dev --name init
   ```

## Paso 4: Crear y Ejecutar Semilla (Seed)

8. Crear un archivo de semilla (seed) en TypeScript y ejecutarlo:

   ```bash
   npx ts-node <ruta/seed.ts>
   ```

   Asegúrate de configurar tu archivo `tsconfig.json` correctamente.

   También, puedes agregar un comando personalizado en el `package.json` para ejecutar la semilla:

   ```json
   "scripts": {
     "seed": "npx ts-node <ruta/seed.ts>"
   }
   ```

   Luego, puedes ejecutar la semilla usando:

   ```bash
   pnpm run seed
   ```

## Paso 5: Explorar la Base de Datos con Prisma Studio

9. Iniciar Prisma Studio para explorar y administrar la base de datos:

   ```bash
   npx prisma studio
   ```

## Paso 6: Actualizar la Base de Datos con Cambios

10. Para actualizar la base de datos con los cambios en el esquema, usa:

    ```bash
    npx prisma migrate dev
    ```

## Otros Comandos Útiles

- Para traer la información de la base de datos a través de los modelos de Prisma:

  ```bash
  pnpm prisma db pull
  ```

- Para restablecer la base de datos (¡Atención! Esto eliminará todos los datos) y reinsertara todas las semillas.

  ```bash
  npx prisma migrate reset
  ```
