'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';

const videos = [
  { id: 1, src: '/videos/video-1.mp4', title: 'Video 1' },
  { id: 2, src: '/videos/video-2.mp4', title: 'Video 2' },
  { id: 3, src: '/videos/video-3.mp4', title: 'Video 3' },
  { id: 4, src: '/videos/video-4.mp4', title: 'Video 4' },
  { id: 5, src: '/videos/video-5.mp4', title: 'Video 5' },
  { id: 6, src: '/videos/video-6.mp4', title: 'Video 6' },
  { id: 7, src: '/videos/video-7.mp4', title: 'Video 7' },
  { id: 8, src: '/videos/video-8.mp4', title: 'Video 8' },
];

export default function VideoGalleryPage() {
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
          {videos.map((video) => (
            <Dialog key={video.id}>
              <DialogTrigger asChild>
                <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl group bg-muted">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/70 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-2">
                <VisuallyHidden>
                  <DialogTitle>{video.title}</DialogTitle>
                </VisuallyHidden>
                <div className="relative aspect-video w-full">
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full rounded-md"
                    autoPlay
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
