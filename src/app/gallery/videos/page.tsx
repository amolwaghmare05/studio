import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Gallery | Mujjar Mita Mandal',
  description: 'Watch the adventures of the Mujjar Mita Mandal group.',
};

export default function VideoGalleryPage() {
  const videoImages = PlaceHolderImages.filter((image) =>
    image.id.startsWith('gallery-video-')
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            व्हिडिओ गॅलरी
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            आमचे क्षण, आमचे साहस, आमच्या आठवणी चलचित्र स्वरूपात.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl group">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/70 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2">
                 <div className="relative aspect-video w-full mt-4">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-contain"
                    data-ai-hint={image.imageHint}
                  />
                </div>
                <DialogHeader className="p-4">
                  <DialogTitle className='font-headline'>{image.description}</DialogTitle>
                  <p className="text-muted-foreground">Video playback is coming soon!</p>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
