# Mi Blog - Hono + Cloudflare Workers + Supabase

Blog completo desarrollado con Hono, desplegado en Cloudflare Workers y conectado a Supabase.

## Estructura de Tablas en Supabase

### Tabla: `posts`
```sql
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  slug TEXT UNIQUE NOT NULL,
  author TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Tabla: `comments`
```sql
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Tabla: `contact_messages` (opcional)
```sql
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Estructura del Proyecto

```
mi-app-hono/
├── src/
│   ├── components/
│   │   ├── layout.ts      # Layout base con estilos
│   │   ├── header.ts      # Componente de navegación
│   │   └── footer.ts      # Componente de pie de página
│   ├── pages/
│   │   ├── home.ts        # Página de inicio
│   │   ├── blog.ts        # Listado de posts
│   │   ├── blogPost.ts    # Post individual
│   │   └── contact.ts     # Formulario de contacto
│   ├── db.ts              # Cliente de Supabase
│   ├── types.ts           # Tipos TypeScript
│   └── index.ts           # Rutas principales
├── wrangler.toml          # Configuración de Cloudflare Workers
├── package.json
└── tsconfig.json
```

## Rutas Disponibles

- `/` - Página de inicio
- `/blog` - Listado de todos los posts
- `/blog/:slug` - Post individual
- `/contacto` - Formulario de contacto
- `/api/posts` - API JSON con todos los posts
- `/api/db-check` - Verificar conexión con Supabase

## Desarrollo Local

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:8787`

## Despliegue a Producción

```bash
npm run deploy
```

## Notas

- Asegúrate de que tus credenciales de Supabase estén configuradas en `wrangler.toml`
- Los posts deben tener `published = true` para aparecer en el blog
- El campo `slug` debe ser único para cada post
