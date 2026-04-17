import React from 'react';
import { Award, Users, Globe, BookOpen } from 'lucide-react';
import { courses } from '../../data/courses';
import { Hero } from '../../components/home/Hero';
import { ModeHighlight } from '../../components/home/ModeHighlight';
import { FeaturedCourses } from '../../components/home/FeaturedCourses';
import { WhyChooseUs } from '../../components/home/WhyChooseUs';
import { GalleryPreview } from '../../components/home/GalleryPreview';
import { Testimonials } from '../../components/home/Testimonials';
import { ContactForm } from '../../components/ui/ContactForm';
import { Section } from '../../components/ui/Section';
import { ContactCTA } from '../../components/home/ContactCTA';
import ContactSectionWithContent from '../../components/home/HomeContact';

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  const stats = [
    { label: 'Courses', value: '15+', icon: BookOpen },
    { label: 'Students', value: '2500+', icon: Users },
    { label: 'Experience', value: '10Yrs', icon: Award },
    { label: 'Placement', value: '90%', icon: Globe },
  ];

  return (
    <div className="pt-20">
      <Hero stats={stats} />
      <ModeHighlight />
      <FeaturedCourses courses={featuredCourses} />
      <WhyChooseUs />
      <Testimonials />
      <Section
  title="Quick Inquiry"
  subtitle="Get Started Today"
  className="bg-white"
  center={false}
>
  <ContactSectionWithContent 
    whatsappNumber="+91 98765 43210"
    phoneNumber="+91 98765 43210"
    email="sunilsunil39739@gmail.com"
    responseTime="24 hours"
  />
</Section>
      <GalleryPreview />
      <ContactCTA />
    </div>
  );
}
