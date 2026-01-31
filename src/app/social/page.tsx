'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function SocialPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">आमच्याशी जुडा</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            आमच्या सोशल मीडिया वर फॉलो करा आणि आमच्या सर्व कार्यक्रमांची आणि उपक्रमांची माहिती मिळवा
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-secondary text-primary rounded-2xl p-4 w-fit mb-4 border-2 border-primary/20">
                <Instagram className="h-12 w-12" />
              </div>
              <CardTitle className="font-headline text-2xl">Instagram</CardTitle>
              <CardDescription className="text-base">@mujjarculture</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                आमच्या फोटो, व्हिडिओ आणि कार्यक्रमांच्या अपडेट्स पहा. आमच्या संस्कृती आणि परंपरांचा अनुभव घ्या.
              </p>
              <a 
                href="https://www.instagram.com/mujjarculture?igsh=dG55a21qNDZrd21z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-secondary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-secondary/80 transition-colors shadow-md border border-primary/50"
              >
                Instagram वर फॉलो करा
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-secondary text-primary rounded-2xl p-4 w-fit mb-4 border-2 border-primary/20">
                <FaWhatsapp className="h-12 w-12" />
              </div>
              <CardTitle className="font-headline text-2xl">WhatsApp Group</CardTitle>
              <CardDescription className="text-base">आमच्या ग्रुप मध्ये सामील व्हा</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                सर्व सदस्यांसोबत संवाद साधा, तात्काळ अपडेट्स मिळवा आणि कार्यक्रमांच्या माहितीसाठी ग्रुप मध्ये सामील व्हा.
              </p>
              <a 
                href="https://chat.whatsapp.com/DzQb64jKaUh0gnUHbkEOLM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-secondary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-secondary/80 transition-colors shadow-md border border-primary/30"
              >
                WhatsApp Group मध्ये सामील व्हा
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
