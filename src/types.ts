export interface Post {
    id: number
    title: string
    content: string
    excerpt?: string
    slug: string
    created_at: string
    updated_at?: string
    author?: string
    published?: boolean
    image_url?: string
}

export interface Comment {
    id: number
    post_id: number
    author: string
    content: string
    created_at: string
}
