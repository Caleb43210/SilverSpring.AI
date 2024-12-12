import React from 'react';
import { Container } from './layout/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Zap, Shield, BarChart3, Workflow } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience instant responses and real-time processing powered by cutting-edge AI technology.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Your data is protected with military-grade encryption and compliance with industry standards.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with detailed analytics and performance metrics.'
  },
  {
    icon: Workflow,
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing tools and workflows for maximum efficiency.'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-800">
      <Container>
        <SectionHeading
          title="Cutting-Edge Features"
          description="Powered by advanced AI technology to deliver exceptional results"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="relative p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="mt-4 text-lg font-medium text-white text-center">{feature.title}</h3>
                <p className="mt-4 text-sm text-gray-400 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}