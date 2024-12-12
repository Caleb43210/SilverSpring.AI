import React from 'react';
import { Container } from './layout/Container';
import { SectionHeading } from './ui/SectionHeading';
import { ServiceCard } from './services/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-900">
      <Container>
        <SectionHeading
          title="Our Services"
          description="Comprehensive AI automation solutions tailored to your business needs"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </div>
  );
}