import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | Mujjar Mita Mandal',
  description: 'Support the activities and events of the Mujjar Mita Mandal group.',
};

export default function DonatePage() {
  const qrCodeImage = PlaceHolderImages.find((img) => img.id === 'donate-qr');

  return (
    <div className="bg-background">
      <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-16 md:py-24">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                <Heart className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline text-3xl">मंडळाला सपोर्ट करा</CardTitle>
            <CardDescription className="text-md">
              तुमचे योगदान आम्हाला विविध उपक्रम आणि कार्यक्रम आयोजित करण्यास मदत करते.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <p className="text-center text-muted-foreground">
              खालील QR कोड स्कॅन करून किंवा बटण वापरून तुम्ही देणगी देऊ शकता. तुमच्या समर्थनाबद्दल धन्यवाद!
            </p>
            {qrCodeImage && (
              <div className="relative h-48 w-48 rounded-lg overflow-hidden border p-2">
                <Image
                  src={qrCodeImage.imageUrl}
                  alt={qrCodeImage.description}
                  width={300}
                  height={300}
                  className="rounded-md"
                  data-ai-hint={qrCodeImage.imageHint}
                />
              </div>
            )}
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Donate Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
