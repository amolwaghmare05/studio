import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { members } from '@/lib/members';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Members | Mujjar Mita Mandal',
  description: 'Meet the pillars of Mujjar Mita Mandal.',
};

export default function MembersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            मंडळाचे सदस्य
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            आमच्या गटातील प्रत्येक सदस्याची ओळख करून घ्या, जे आमच्या मंडळाला खास बनवतात.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {members.map((member) => {
            return (
              <Card
                key={member.id}
                className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-0 text-center">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={`/members/member-${member.id}.${member.id === 5 ? 'jpeg' : 'png'}`}
                      alt={`Profile of ${member.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      style={member.id === 10 ? { objectPosition: 'center 38%' } : member.id === 8 ? { objectPosition: 'center 0%' } : undefined}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-headline text-2xl font-semibold text-primary">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-lg font-medium text-accent">{member.title}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
