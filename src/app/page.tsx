import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { members } from '@/lib/members';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
  const membersToShow = members.slice(0, 4);
  const galleryImages = PlaceHolderImages.filter((image) =>
    image.id.startsWith('gallery-photo-')
  ).slice(0, 4);

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
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">आमच्याबद्दल</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              आम्ही फक्त मित्रांचा समूह नाही, आम्ही एक कुटुंब आहोत. मैत्री, मजा आणि अविस्मरणीय क्षणांच्या माध्यमातून एकत्र आलो आहोत. आमचा प्रवास, आमच्या कथा आणि आमच्या आठवणींचा भाग व्हा.
            </p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">आमचे सदस्य</h2>
            <p className="mt-4 text-lg text-muted-foreground">आमच्या मंडळाचे काही प्रमुख सदस्य भेटा.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {membersToShow.map((member) => {
              const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <Card
                  key={member.id}
                  className="overflow-hidden group text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    {memberImage && (
                      <div className="relative w-full aspect-square">
                        <Image
                          src={memberImage.imageUrl}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          data-ai-hint={memberImage.imageHint}
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-headline text-xl font-semibold text-primary">{member.name}</h3>
                      <p className="text-md text-accent">{member.title}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/members">सर्व सदस्य बघा</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">गॅलरी झलक</h2>
                <p className="mt-4 text-lg text-muted-foreground">आमच्या काही अविस्मरणीय क्षणांची एक झलक.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image) => (
                    <Link href="/gallery/photos" key={image.id} className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md group">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            data-ai-hint={image.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/gallery/photos">पूर्ण गॅलरी बघा</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
