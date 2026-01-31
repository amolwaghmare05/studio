import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { members } from '@/lib/members';
import { Users } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
  const membersToShow = members.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-lg">
            मुज्जर मित्र मंडळ
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90 drop-shadow-md">
            आमच्या अधिकृत वेबसाइटवर आपले स्वागत आहे!
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/members">मंडळ भेटा</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">आमच्याबद्दल</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              आम्ही फक्त मित्रांचा समूह नाही, आम्ही एक कुटुंब आहोत. मैत्री, मजा आणि अविस्मरणीय क्षणांच्या माध्यमातून एकत्र आलो आहोत. आमचा प्रवास, आमच्या कथा आणि आमच्या आठवणींचा भाग व्हा.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
