import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export function Footer() {
    return (
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
            {/* About Section */}
            <div>
              <h3 className="font-headline text-base font-bold text-primary mb-2">मुज्जर मित्र मंडळ</h3>
              <p className="text-xs text-muted-foreground mb-2">
                सामाजिक, सांस्कृतिक आणि शैक्षणिक उपक्रम आयोजित करणारे मंडळ
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/mujjarculture?igsh=dG55a21qNDZrd21z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://chat.whatsapp.com/DzQb64jKaUh0gnUHbkEOLM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-headline text-base font-bold text-primary mb-2">द्रुत दुवे</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <li>
                  <Link href="/members" className="text-muted-foreground hover:text-primary transition-colors">
                    सदस्य
                  </Link>
                </li>
                <li>
                  <Link href="/gallery/photos" className="text-muted-foreground hover:text-primary transition-colors">
                    फोटो गॅलरी
                  </Link>
                </li>
                <li>
                  <Link href="/gallery/videos" className="text-muted-foreground hover:text-primary transition-colors">
                    व्हिडिओ गॅलरी
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                    देणगी द्या
                  </Link>
                </li>
                <li>
                  <Link href="/social" className="text-muted-foreground hover:text-primary transition-colors">
                    सोशल मीडिया
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-3">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mujjar Mita Mandal. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  