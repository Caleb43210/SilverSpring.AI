import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    content: 'calebhenok43@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: ['123 Innovation Street', 'Tech City, TC 12345']
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail) => (
        <div key={detail.title} className="flex items-start">
          <detail.icon className="h-6 w-6 text-blue-500 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-200">{detail.title}</h3>
            <p className="mt-1 text-gray-400">
              {Array.isArray(detail.content) ? (
                detail.content.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < detail.content.length - 1 && <br />}
                  </React.Fragment>
                ))
              ) : (
                detail.content
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}