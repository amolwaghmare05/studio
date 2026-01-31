import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | Mujjar Mita Mandal',
  description: 'A collection of memories from the Mujjar Mita Mandal group.',
};

const galleryPhotos = [
  { id: 1, src: '/gallery/photo-1.jpeg', alt: 'Gallery Photo 1' },
  { id: 2, src: '/gallery/photo-2.jpeg', alt: 'Gallery Photo 2' },
  { id: 3, src: '/gallery/photo-3.jpeg', alt: 'Gallery Photo 3' },
  { id: 4, src: '/gallery/photo-4.jpeg', alt: 'Gallery Photo 4' },
  { id: 5, src: '/gallery/photo-5.jpeg', alt: 'Gallery Photo 5' },
  { id: 6, src: '/gallery/photo-6.jpeg', alt: 'Gallery Photo 6' },
  { id: 7, src: '/gallery/photo-7.jpeg', alt: 'Gallery Photo 7' },
  { id: 8, src: '/gallery/photo-8.jpeg', alt: 'Gallery Photo 8' },
  { id: 9, src: '/gallery/photo-9.jpeg', alt: 'Gallery Photo 9' },
  { id: 10, src: '/gallery/photo-10.jpeg', alt: 'Gallery Photo 10' },
  { id: 11, src: '/gallery/photo-11.jpeg', alt: 'Gallery Photo 11' },
  { id: 12, src: '/gallery/photo-12.jpeg', alt: 'Gallery Photo 12' },
  { id: 13, src: '/gallery/photo-13.jpeg', alt: 'Gallery Photo 13' },
  { id: 14, src: '/gallery/photo-14.jpeg', alt: 'Gallery Photo 14' },
  { id: 15, src: '/gallery/photo-15.jpeg', alt: 'Gallery Photo 15' },
  { id: 17, src: '/gallery/photo-17.jpeg', alt: 'Gallery Photo 17' },
  { id: 18, src: '/gallery/photo-18.jpeg', alt: 'Gallery Photo 18' },
  { id: 19, src: '/gallery/photo-19.jpeg', alt: 'Gallery Photo 19' },
  { id: 20, src: '/gallery/photo-20.jpeg', alt: 'Gallery Photo 20' },
  { id: 21, src: '/gallery/photo-21.jpeg', alt: 'Gallery Photo 21' },
  { id: 22, src: '/gallery/photo-22.jpeg', alt: 'Gallery Photo 22' },
  { id: 23, src: '/gallery/photo-23.jpeg', alt: 'Gallery Photo 23' },
  { id: 24, src: '/gallery/photo-24.jpeg', alt: 'Gallery Photo 24' },
  { id: 25, src: '/gallery/photo-25.jpeg', alt: 'Gallery Photo 25' },
  { id: 26, src: '/gallery/photo-26.jpeg', alt: 'Gallery Photo 26' },
  { id: 27, src: '/gallery/photo-27.jpeg', alt: 'Gallery Photo 27' },
  { id: 29, src: '/gallery/photo-29.jpeg', alt: 'Gallery Photo 29' },
];

export default function PhotoGalleryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            फोटो गॅलरी
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            आमच्या आठवणींचा संग्रह, जिथे प्रत्येक चित्र एक कथा सांगते.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPhotos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2">
                <VisuallyHidden>
                  <DialogTitle>{photo.alt}</DialogTitle>
                </VisuallyHidden>
                <div className="relative aspect-video w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    unoptimized
                    className="object-contain rounded-md"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
