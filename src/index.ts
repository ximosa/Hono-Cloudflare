import { Hono } from 'hono'
import { createSupabaseClient, Bindings } from './db'
import { HomePage } from './pages/home'
import { BlogPage } from './pages/blog'
import { BlogPostPage } from './pages/blogPost'
import { ContactPage } from './pages/contact'
import { AboutPage } from './pages/about'
import { ServicesPage } from './pages/services'
import { PricingPage } from './pages/pricing'
import { Post, Comment } from './types'

const app = new Hono<{ Bindings: Bindings }>()

// Página de inicio
app.get('/', (c) => {
    return c.html(HomePage())
})

// Listado de posts del blog
app.get('/blog', async (c) => {
    const supabase = createSupabaseClient(c.env)

    try {
        // Primero intentamos sin filtro de published para ver si hay datos
        const { data: posts, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching posts:', error)
            return c.html(BlogPage([]))
        }

        console.log('Posts encontrados:', posts?.length || 0)
        return c.html(BlogPage(posts as Post[] || []))
    } catch (error) {
        console.error('Error:', error)
        return c.html(BlogPage([]))
    }
})

// Post individual del blog
app.get('/blog/:slug', async (c) => {
    const slug = c.req.param('slug')
    const supabase = createSupabaseClient(c.env)

    try {
        // Obtener el post
        const { data: post, error: postError } = await supabase
            .from('posts')
            .select('*')
            .eq('slug', slug)
            .single()

        if (postError || !post) {
            return c.html('<h1>Post no encontrado</h1>', 404)
        }

        // Obtener los comentarios del post
        const { data: comments, error: commentsError } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', post.id)
            .order('created_at', { ascending: true })

        if (commentsError) {
            console.error('Error fetching comments:', commentsError)
        }

        return c.html(BlogPostPage(post as Post, (comments as Comment[]) || []))
    } catch (error) {
        console.error('Error:', error)
        return c.html('<h1>Error al cargar el post</h1>', 500)
    }
})

// Página de contacto (GET)
app.get('/contacto', (c) => {
    return c.html(ContactPage())
})

// Página de contacto (POST)
app.post('/contacto', async (c) => {
    const body = await c.req.parseBody()
    const { name, email, subject, message } = body

    console.log('Mensaje recibido:', { name, email, subject, message })

    return c.html(ContactPage(true))
})

// Página sobre mí
app.get('/sobre-mi', (c) => {
    return c.html(AboutPage())
})

// Página de servicios
app.get('/servicios', (c) => {
    return c.html(ServicesPage())
})

// Página de precios
app.get('/precios', (c) => {
    return c.html(PricingPage())
})

// API endpoint para obtener posts (JSON)
app.get('/api/posts', async (c) => {
    const supabase = createSupabaseClient(c.env)

    try {
        const { data: posts, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Supabase error:', error)
            return c.json({
                success: false,
                error: error.message || JSON.stringify(error),
                details: error
            }, 500)
        }

        return c.json({
            success: true,
            posts: posts || [],
            count: posts?.length || 0
        })
    } catch (error: any) {
        console.error('Catch error:', error)
        return c.json({
            success: false,
            error: error?.message || String(error),
            stack: error?.stack
        }, 500)
    }
})

// API endpoint para verificar conexión DB
app.get('/api/db-check', async (c) => {
    const supabase = createSupabaseClient(c.env)

    const configured = !!c.env.SUPABASE_URL && c.env.SUPABASE_URL !== "INSERT_SUPABASE_URL_HERE"

    if (!configured) {
        return c.json({
            estado: 'Conectado al Edge',
            supabase_configurado: false,
            mensaje: 'Falta configurar SUPABASE_URL y SUPABASE_KEY en wrangler.toml o .dev.vars',
            timestamp: new Date().toISOString()
        })
    }

    // Intentar una consulta real para verificar la conexión
    try {
        const { count, error } = await supabase
            .from('posts')
            .select('*', { count: 'exact', head: true })

        if (error) throw error

        return c.json({
            estado: 'Conectado al Edge',
            supabase_configurado: true,
            mensaje: 'Cliente Supabase inicializado correctamente. ¡Listo para consultar!',
            posts_count: count,
            timestamp: new Date().toISOString()
        })
    } catch (error) {
        return c.json({
            estado: 'Conectado al Edge',
            supabase_configurado: true,
            mensaje: 'Conexión establecida pero error al consultar: ' + String(error),
            timestamp: new Date().toISOString()
        }, 500)
    }
})

export default app
