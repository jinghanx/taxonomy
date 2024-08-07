import Image from "next/image"
import Link from "next/link"

export default function BooksPage() {
  const books = [
    { id: 1, title: "The Curious Caterpillar", cover: "/book1.jpg" },
    { id: 2, title: "A New Friend", cover: "/book2.jpg" },
    { id: 3, title: "A Transformation", cover: "/book3.jpg" },
    { id: 4, title: "A Colorful Adventure", cover: "/book4.jpg" },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">Books</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <Link href={`/books/${book.id}`} key={book.id} className="block">
            <div className="overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
              <Image
                src={book.cover}
                alt={book.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{book.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
