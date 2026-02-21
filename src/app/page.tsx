"use client";

import Navbar from "@/components/Navbar";
import SplineScene from "@/components/SplineScene";
import { Contact2 } from "@/components/ui/contact-2";
import { TestimonialStack, Testimonial } from "@/components/ui/glass-testimonial-swiper";
import { Users, Calendar, ThumbsUp, ShieldCheck, Clock, Share, Rocket, Zap, Gem } from 'lucide-react';
import Spline from "@splinetool/react-spline";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    initials: 'SM',
    name: 'Sarah Mitchell',
    role: 'VP of Engineering at TechFlow',
    quote: "This platform has completely transformed how our team collaborates. The AI-powered analytics provide insights we never had before, and the performance improvements are remarkable. Best investment we've made this year.",
    tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'Enterprise', type: 'default' }],
    stats: [{ icon: Users, text: '200+ team' }, { icon: Calendar, text: '2 years customer' }],
    avatarGradient: 'linear-gradient(135deg, #5e6ad2, #8b5cf6)',
  },
  {
    id: 2,
    initials: 'MC',
    name: 'Marcus Chen',
    role: 'Product Manager at DataSync',
    quote: "The real-time collaboration features are game-changing. Our remote team feels more connected than ever, and the platform's reliability is outstanding. The mobile experience is seamless across all devices.",
    tags: [{ text: 'Startup', type: 'default' }, { text: 'Mobile', type: 'default' }],
    stats: [{ icon: ThumbsUp, text: 'Helpful' }, { icon: ShieldCheck, text: 'Verified' }],
    avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 3,
    initials: 'AR',
    name: 'Alex Rodriguez',
    role: 'CTO at StartupFlow',
    quote: "Incredible performance boost and the mobile apps are flawless. Support team is responsive and the feature roadmap aligns perfectly with our needs. The customization options are endless.",
    tags: [{ text: 'Enterprise', type: 'default' }, { text: 'API User', type: 'default' }],
    stats: [{ icon: Clock, text: '6 months ago' }, { icon: Share, text: 'Shared 8 times' }],
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
  {
    id: 4,
    initials: 'EJ',
    name: 'Emily Johnson',
    role: 'Founder of Innovate Inc.',
    quote: "As a new company, speed is everything. This tool allowed us to scale our operations twice as fast without doubling our headcount. A must-have for any ambitious startup.",
    tags: [{ text: 'New', type: 'default' }, { text: 'Growth', type: 'featured' }],
    stats: [{ icon: Rocket, text: 'Scaled 2x' }, { icon: Zap, text: 'Fast Setup' }],
    avatarGradient: 'linear-gradient(135deg, #ec4899, #d946ef)',
  },
  {
    id: 5,
    initials: 'DW',
    name: 'David Wong',
    role: 'Lead Designer at Creative Co.',
    quote: "The user interface is not just beautiful, it's intuitive. Our design team was able to adopt it instantly, streamlining our entire workflow and improving creative output.",
    tags: [{ text: 'Design', type: 'default' }],
    stats: [{ icon: Gem, text: 'Top UI/UX' }],
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="w-full h-screen relative">
        <div className="absolute top-1/4 left-10 z-10 p-6 max-w-lg">
          <h1 className="text-5xl font-bold text-foreground mb-4">AIサービスをあなたに</h1>
          <p className="text-xl text-muted-foreground">カーソルを動かして、未来を体験してください。</p>
        </div>
        <div className="w-full h-full">
          <SplineScene />
        </div>
      </section>

      {/* AI Course Section */}
      <section id="ai-course" className="w-full h-screen relative bg-background">
        <div className="absolute top-1/4 left-10 z-10 p-6 max-w-lg">
          <h2 className="text-4xl font-bold text-foreground mb-4">AIコース</h2>
          <p className="text-lg text-muted-foreground">AIの基礎から実践まで、わかりやすく学べるコースです。</p>
        </div>
        <div className="w-full h-full">
          <Spline scene="https://prod.spline.design/vA-vXuhp-4fg5pPl/scene.splinecode" />
        </div>
      </section>

      {/* Services Section */}

      <section id="services" className="w-full min-h-screen flex items-center justify-center bg-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Services</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6 text-xl md:text-2xl font-bold text-foreground/80 list-none text-center">
              <li>AI自動化サービス構築</li>
              <li>AI自動化導入支援・サポート</li>
              <li>企業または小グループ向けAI研修</li>
              <li>AI開発</li>
              <li>AIエージェント開発</li>
              <li>webアプリ・Website作成</li>
              <li>AI自動化セットアップ・ランニング代行</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-20 bg-background relative overflow-hidden">
        {/* Background for Testimonials */}
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-10 scale-[1.2] pointer-events-none"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/drhx7imeb/image/upload/v1756215257/gradient-optimized_nfrakk.svg")' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Testimonials</h2>
          <div className="w-full h-[600px] flex items-center justify-center">
            <TestimonialStack testimonials={testimonialsData} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-background">
        <Contact2
          title="Contact Us"
          description="ご質問、フィードバック、またはコラボレーションの機会があればお知らせください。どのようにお手伝いできるかをお知らせください！"
          email="matcha.ai789@gmail.com"
        />
      </section>
    </main>
  );
}
