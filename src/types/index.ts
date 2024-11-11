export interface Post {
    id: number
    title: string
    date: string
    category: string
    excerpt: string
    content: string
    mood: 'excited' | 'confused' | 'accomplished' | 'struggling'
  }