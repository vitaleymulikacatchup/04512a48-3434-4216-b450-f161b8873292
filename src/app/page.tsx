"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: "hero-image", url: "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "High-End Gaming PC Interior with Colorful RGB Lights" },
  { id: "about-image", url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." },
  { id: "feature-image-1", url: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Team analyzing financial charts and digital reports during a business meeting." },
  { id: "feature-image-2", url: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Detailed image of a server rack with glowing lights in a modern data center." },
  { id: "feature-image-3", url: "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&h=650&w=940", alt: "3D render abstract digital visualization depicting neural networks and AI technology." },
  { id: "faq-image", url: "https://images.pexels.com/photos/7709255/pexels-photo-7709255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Portrait of a smiling customer service representative with a headset." },
];

const navItems = [
  { name: "About", id: "about" },
  { name: "Features", id: "features" },
  { name: "Contact", id: "contact" },
  { name: "Pricing", id: "pricing" },
  { name: "Testimonials", id: "testimonials" },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={navItems} brandName="AI SaaS" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to AI SaaS"
            description="Transform your business with cutting-edge AI technology."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" },
            ]}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We build innovative AI solutions that help companies thrive"
            buttons={[
              { text: "Our Story", href: "about" },
            ]}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Intelligent Analytics", description: "Gain insights with advanced data analytics.", imageSrc: assetMap.find(a => a.id === "feature-image-1")?.url },
              { title: "Seamless Integration", description: "Integrate effortlessly with existing systems.", imageSrc: assetMap.find(a => a.id === "feature-image-2")?.url },
              { title: "AI Driven Solutions", description: "Leverage AI to streamline operations.", imageSrc: assetMap.find(a => a.id === "feature-image-3")?.url },
            ]}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe for the latest updates and insights."
            imageSrc={assetMap.find(a => a.id === "faq-image")?.url}
            onSubmit={(email) => console.log(email)}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] },
            ]}
            copyrightText="© 2025 AI SaaS"
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}