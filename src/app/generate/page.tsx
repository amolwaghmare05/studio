import type { Metadata } from 'next';
import { MarathiGeneratorForm } from './marathi-generator-form';
import { Wand2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Generate Marathi Content | Mujjar Mita Mandal',
  description: 'Use our AI tool to generate engaging Marathi content from English text.',
};

export default function GenerateContentPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                <Wand2 className="h-8 w-8" />
            </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            मराठी मजकूर जनरेटर
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            तुमचा इंग्रजी मजकूर येथे टाका आणि आमच्या AI टूलद्वारे आकर्षक मराठी भाषांतरे मिळवा. वेबसाइटसाठी मथळे, वर्णन किंवा इतर कोणताही मजकूर तयार करण्यासाठी योग्य.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <MarathiGeneratorForm />
        </div>
      </div>
    </div>
  );
}
