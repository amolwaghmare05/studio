import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { members } from '@/lib/members';
import { ArrowRight, Camera, Users } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
  const membersToShow = members.slice(0, 4);
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-photo-')).slice(0, 6);

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

      {/* Meet the Members Preview */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">आमचे सदस्य</h2>
            <p className="text-lg text-muted-foreground mt-2">मंडळाचे आधारस्तंभ</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {membersToShow.map((member) => {
              const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <Card key={member.id} className="overflow-hidden text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="p-0">
                    {memberImage && (
                      <div className="aspect-square relative w-full">
                         <Image
                          src={memberImage.imageUrl}
                          alt={`Profile of ${member.name}`}
                          fill
                          className="object-cover"
                          data-ai-hint={memberImage.imageHint}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                      <p className="text-accent font-medium">{member.title}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/members">
                सर्व सदस्य पहा <Users className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">आमची गॅलरी</h2>
            <p className="text-lg text-muted-foreground mt-2">आमचे अविस्मरणीय क्षण</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={image.id} className="relative aspect-video overflow-hidden rounded-lg group">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/gallery/photos">
                गॅलरी एक्सप्लोर करा <Camera className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
