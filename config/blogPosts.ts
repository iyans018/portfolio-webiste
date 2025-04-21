export type BlogPost = {
    id: number
    title: string
    description: string
    date: string
    slug: string
    thumbnail: string
    category: string
    tags: string[]
    views: number
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Filosofi Belajar Konsisten",
        description: "Refleksi tentang perjuangan mempertahankan konsistensi dalam belajar teknologi.",
        date: "2025-04-10",
        slug: "filosofi-belajar-konsisten",
        thumbnail: "https://mojokertokab.go.id/storage/pemkab/gambar/artikel/Blockchain1.jpg",
        category: "philosophy",
        tags: ["mindset", "self-improvement"],
        views: 42,
    },
    {
        id: 2,
        title: "Kenapa Golang Cocok untuk Backend",
        description: "Alasan teknis dan praktis mengapa Golang jadi pilihan populer di kalangan backend developer.",
        date: "2025-03-30",
        slug: "golang-cocok-backend",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        category: "tech",
        tags: ["golang", "backend"],
        views: 85,
    },
    {
        id: 3,
        title: "Filosofi Belajar Konsisten",
        description: "Refleksi tentang perjuangan mempertahankan konsistensi dalam belajar teknologi.",
        date: "2025-04-10",
        slug: "filosofi-belajar-konsisten",
        thumbnail: "https://mojokertokab.go.id/storage/pemkab/gambar/artikel/Blockchain1.jpg",
        category: "philosophy",
        tags: ["mindset", "self-improvement"],
        views: 34,
    },
    {
        id: 5,
        title: "Kenapa Golang Cocok untuk Backend",
        description: "Alasan teknis dan praktis mengapa Golang jadi pilihan populer di kalangan backend developer.",
        date: "2025-03-30",
        slug: "golang-cocok-backend",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        category: "tech",
        tags: ["golang", "backend"],
        views: 212,
    },
    {
        id: 6,
        title: "Filosofi Belajar Konsisten",
        description: "Refleksi tentang perjuangan mempertahankan konsistensi dalam belajar teknologi.",
        date: "2025-04-10",
        slug: "filosofi-belajar-konsisten",
        thumbnail: "https://mojokertokab.go.id/storage/pemkab/gambar/artikel/Blockchain1.jpg",
        category: "philosophy",
        tags: ["mindset", "self-improvement"],
        views: 992,
    },
    {
        id: 7,
        title: "Kenapa Golang Cocok untuk Backend",
        description: "Alasan teknis dan praktis mengapa Golang jadi pilihan populer di kalangan backend developer.",
        date: "2025-03-30",
        slug: "golang-cocok-backend",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        category: "tech",
        tags: ["golang", "backend"],
        views: 532,
    }
]
  