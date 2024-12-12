import React from 'react';
import { Container } from './layout/Container';
import { SectionHeading } from './ui/SectionHeading';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-24">
      <Container>
        <SectionHeading
          title="Get in Touch"
          description="Ready to transform your business with AI? Let's talk about your needs."
        />
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
}