'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="bg-background min-h-[calc(100vh-4rem)] pb-20">
      <div className="container mx-auto flex items-center justify-center px-4 py-16 md:py-24">
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
            <div className="relative h-64 w-64 rounded-lg overflow-hidden border p-2 bg-white">
              <Image
                src="/qr-code.jpeg"
                alt="Donation QR Code"
                fill
                unoptimized
                className="rounded-md object-contain"
              />
            </div>
            <Button 
              size="lg" 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeFr_hjK6XikPPX0FbSCasm2schfnfnPGwI7ERm4gdggSojlg/viewform?usp=publish-editor', '_blank')}
            >
              Donate Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
