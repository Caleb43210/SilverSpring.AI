import {mediaUrl, vehicleMedia} from '../media/catalog';
export const heroImage = mediaUrl('hero-poster');
export type Vehicle = {
    id: number;
    make: string;
    model: string;
    trim: string;
    year: number;
    price: number;
    mileage: number;
    body: string;
    fuel: string;
    image: string;
    condition: string;
    mediaIds: string[];
};
export const inventory: Vehicle[] = [
    { id: 1, make: 'Land Rover', model: 'Defender', trim: '110 S • Adventure, refined.', year: 2024, price: 68450, mileage: 8420, body: 'SUV', fuel: 'Gasoline', image: '', condition: 'Pre-owned' },
    { id: 2, make: 'BMW', model: 'X5', trim: 'xDrive40i • M Sport', year: 2024, price: 58900, mileage: 12480, body: 'SUV', fuel: 'Gasoline', image: '', condition: 'Certified' },
    { id: 3, make: 'Porsche', model: '911', trim: 'Carrera • PDK', year: 2023, price: 112500, mileage: 9650, body: 'Coupe', fuel: 'Gasoline', image: '', condition: 'Pre-owned' },
    { id: 4, make: 'Toyota', model: 'RAV4', trim: 'XLE Premium • AWD', year: 2025, price: 36950, mileage: 18, body: 'SUV', fuel: 'Hybrid', image: '', condition: 'New' },
    { id: 5, make: 'Ford', model: 'F-150', trim: 'Lariat • SuperCrew 4×4', year: 2023, price: 42750, mileage: 28400, body: 'Truck', fuel: 'Gasoline', image: '', condition: 'Pre-owned' },
    { id: 6, make: 'BMW', model: '3 Series', trim: '330i • Sport Line', year: 2022, price: 29800, mileage: 35600, body: 'Sedan', fuel: 'Gasoline', image: '', condition: 'Certified' },
    { id: 7, make: 'Subaru', model: 'Outback', trim: 'Limited • Symmetrical AWD', year: 2024, price: 32450, mileage: 19200, body: 'Wagon', fuel: 'Gasoline', image: '', condition: 'Pre-owned' },
    { id: 8, make: 'Toyota', model: 'Camry', trim: 'SE • Everyday confidence', year: 2021, price: 22950, mileage: 48200, body: 'Sedan', fuel: 'Gasoline', image: '', condition: 'Pre-owned' }
].map(vehicle => {const photos=vehicleMedia(vehicle.id);return {...vehicle,image:mediaUrl(photos[0].id),mediaIds:photos.map(photo=>photo.id)};});
export const defaultConfig = { name: 'Your Dealership', tagline: 'A higher standard. A better drive.', color: '#254d40', font: 'sans-serif', logo: '', hero: heroImage, video: mediaUrl('hero-film'), address: '1840 Alpine Avenue, Boulder, CO 80301', phone: '(303) 555-0148', featured: true, services: true };
export function payment(price: number, down: number, apr: number, months: number) { const p = Math.max(0, price - down), r = apr / 1200; return r === 0 ? p / months : p * r / (1 - Math.pow(1 + r, -months)); }
export const money = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
export function filterInventory(filters: Record<string, string>) { return inventory.filter(v => (!filters.make || v.make === filters.make) && (!filters.model || v.model === filters.model) && (!filters.body || v.body === filters.body) && (!filters.price || v.price <= +filters.price) && (!filters.mileage || v.mileage <= +filters.mileage) && (!filters.year || v.year >= +filters.year) && (!filters.condition || v.condition === filters.condition)); }
