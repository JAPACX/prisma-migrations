mkdir hello-prisma

cd hello-prisma

pnpm init -y

pnpm install typescript ts-node @types/node --save-dev

npx tsc --init

pnpm install prisma --save-dev

npx prisma init --datasource-provider <database gestor>

npx prisma migrate dev --name init

npx ts-node <ruta/seed.ts> --> para ejecutar semilla directamente

pnpm prisma db seed --> ejecuta las semilla y en el package json configuras la ruta y el comando

npx prisma studio

pnpm prisma db pull --> para traer la info de la db
