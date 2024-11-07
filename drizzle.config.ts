import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/lib/server/database/schema.ts', // Actualizado path correcto
  out: './drizzle',
  dialect: 'sqlite', // Cambiado a sqlite según la configuración actual
});