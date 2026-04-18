// Central data store for all packages
export const internationalPackages = [
  { id: 'intl-1', title: 'Dubai Delight', location: 'Dubai, UAE', duration: '5 Days / 4 Nights', price: '₹49,999', rating: 4.8, reviews: 120, image: '/destination_2.png', badge: 'Best Seller', highlights: ['Burj Khalifa Visit', 'Desert Safari', 'Dubai Mall', 'Dhow Cruise', 'Hotel Stay'], includes: ['Flights', 'Hotel', 'Transfers', 'Breakfast'] },
  { id: 'intl-2', title: 'Singapore Splendour', location: 'Singapore', duration: '6 Days / 5 Nights', price: '₹59,999', rating: 4.7, reviews: 95, image: '/destination_1.png', badge: 'Popular', highlights: ['Gardens by the Bay', 'Sentosa Island', 'Universal Studios', 'Night Safari', 'Marina Bay Sands'], includes: ['Flights', 'Hotel', 'Transfers', 'Breakfast'] },
  { id: 'intl-3', title: 'Thailand Tropical', location: 'Bangkok & Pattaya', duration: '7 Days / 6 Nights', price: '₹44,999', rating: 4.6, reviews: 200, image: '/destination_2.png', badge: 'Budget Pick', highlights: ['Grand Palace', 'Coral Island', 'Nong Nooch Garden', 'Floating Market', 'Alcazar Show'], includes: ['Flights', 'Hotel', 'Transfers', 'Daily Breakfast'] },
  { id: 'intl-4', title: 'Malaysia Magic', location: 'Kuala Lumpur & Genting', duration: '5 Days / 4 Nights', price: '₹39,999', rating: 4.5, reviews: 88, image: '/destination_1.png', badge: null, highlights: ['Petronas Twin Towers', 'Genting Highlands', 'Batu Caves', 'City Tour', 'Cable Car Ride'], includes: ['Flights', 'Hotel', 'Transfers', 'Breakfast'] },
  { id: 'intl-5', title: 'Bali Bliss', location: 'Bali, Indonesia', duration: '6 Days / 5 Nights', price: '₹54,999', rating: 4.9, reviews: 175, image: '/destination_2.png', badge: 'Top Rated', highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Kuta Beach', 'Volcano Trekking', 'Spa & Wellness'], includes: ['Flights', 'Resort Stay', 'Transfers', 'Breakfast'] },
  { id: 'intl-6', title: 'Europe Explorer', location: 'Paris, Rome, Zurich', duration: '10 Days / 9 Nights', price: '₹1,49,999', rating: 4.8, reviews: 60, image: '/destination_1.png', badge: 'Premium', highlights: ['Eiffel Tower', 'Colosseum', 'Swiss Alps', 'Vatican City', 'Seine River Cruise'], includes: ['Flights', '4-Star Hotels', 'All Transfers', 'Daily Breakfast'] },
];

export const domesticPackages = [
  { id: 'dom-1', title: 'Rajasthan Royal Tour', location: 'Jaipur, Jodhpur, Udaipur', duration: '7 Days / 6 Nights', price: '₹24,999', rating: 4.8, reviews: 210, image: '/destination_1.png', badge: 'Best Seller', highlights: ['Amber Fort', 'Mehrangarh Fort', 'City Palace', 'Camel Safari', 'Cultural Show'], includes: ['Hotel', 'Transfers', 'Breakfast', 'Guide'] },
  { id: 'dom-2', title: 'Kerala God\'s Own Country', location: 'Munnar, Alleppey, Kovalam', duration: '6 Days / 5 Nights', price: '₹19,999', rating: 4.9, reviews: 180, image: '/destination_2.png', badge: 'Top Rated', highlights: ['Tea Gardens', 'Houseboat Stay', 'Backwaters', 'Ayurveda Spa', 'Beach Relaxation'], includes: ['Hotel + Houseboat', 'Transfers', 'All Meals'] },
  { id: 'dom-3', title: 'Goa Beach Holiday', location: 'North & South Goa', duration: '5 Days / 4 Nights', price: '₹14,999', rating: 4.6, reviews: 300, image: '/destination_1.png', badge: 'Popular', highlights: ['Baga Beach', 'Dudhsagar Waterfall', 'Old Goa Churches', 'Water Sports', 'Night Markets'], includes: ['Hotel', 'Transfers', 'Breakfast'] },
  { id: 'dom-4', title: 'Himachal Adventure', location: 'Manali, Rohtang, Solang', duration: '7 Days / 6 Nights', price: '₹22,999', rating: 4.7, reviews: 145, image: '/destination_2.png', badge: null, highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'River Rafting', 'Snow Activities'], includes: ['Hotel', 'Transfers', 'Breakfast', 'Activities'] },
  { id: 'dom-5', title: 'Kashmir Paradise', location: 'Srinagar, Gulmarg, Pahalgam', duration: '7 Days / 6 Nights', price: '₹29,999', rating: 4.9, reviews: 195, image: '/destination_1.png', badge: 'Premium', highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens', 'Houseboat Stay'], includes: ['Houseboat + Hotel', 'Transfers', 'Breakfast'] },
  { id: 'dom-6', title: 'Andaman Island Escape', location: 'Port Blair, Havelock, Neil Island', duration: '6 Days / 5 Nights', price: '₹32,999', rating: 4.7, reviews: 110, image: '/destination_2.png', badge: 'Exotic', highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail', 'Glass Bottom Boat', 'Coral Reef Snorkeling'], includes: ['Hotel', 'Ferry Tickets', 'Transfers', 'Breakfast'] },
];

export const spiritualPackages = [
  { id: 'spi-1', title: 'Char Dham Yatra', location: 'Yamunotri, Gangotri, Kedarnath, Badrinath', duration: '12 Days / 11 Nights', price: '₹34,999', rating: 4.9, reviews: 250, image: '/destination_1.png', badge: 'Most Sacred', highlights: ['Yamunotri Temple', 'Gangotri Glacier', 'Kedarnath by Helicopter', 'Badrinath Darshan', 'Mana Village'], includes: ['Hotel/Dharamshala', 'Transfers', 'All Meals', 'Pooja Kit'] },
  { id: 'spi-2', title: 'Vaishno Devi Darshan', location: 'Katra, Jammu & Kashmir', duration: '4 Days / 3 Nights', price: '₹9,999', rating: 4.8, reviews: 400, image: '/destination_2.png', badge: 'Popular', highlights: ['Vaishno Devi Mandir', 'Bhawan Darshan', 'Ardhkuwari Temple', 'Shiv Khori', 'Sanjichhat Ropeway'], includes: ['Hotel', 'Transfers', 'Breakfast', 'Guide'] },
  { id: 'spi-3', title: 'Tirupati Balaji Darshan', location: 'Tirupati, Andhra Pradesh', duration: '3 Days / 2 Nights', price: '₹7,999', rating: 4.7, reviews: 320, image: '/destination_1.png', badge: null, highlights: ['Tirumala Temple Darshan', 'Special Entry Ticket', 'Sri Padmavathi Temple', 'Kapila Theertham', 'Akasaganga Teertham'], includes: ['Hotel', 'Transfers', 'Breakfast', 'VIP Darshan'] },
  { id: 'spi-4', title: 'Kashi Ayodhya Yatra', location: 'Varanasi, Ayodhya, Prayagraj', duration: '6 Days / 5 Nights', price: '₹15,999', rating: 4.8, reviews: 175, image: '/destination_2.png', badge: 'Heritage', highlights: ['Kashi Vishwanath Temple', 'Ram Janmabhoomi', 'Sangam Ghat', 'Ganga Aarti', 'Boat Ride'], includes: ['Hotel', 'Transfers', 'Breakfast', 'Special Pooja'] },
  { id: 'spi-5', title: 'Kailash Mansarovar Yatra', location: 'Tibet, China', duration: '15 Days / 14 Nights', price: '₹1,50,000', rating: 5.0, reviews: 40, image: '/destination_1.png', badge: 'Ultimate Pilgrimage', highlights: ['Kailash Parvat Parikrama', 'Mansarovar Lake Snan', 'Dolma La Pass', 'Tirthapuri Kund', 'Taklakot'], includes: ['Hotel/Camps', 'All Meals', 'Permit', 'Medical Kit'] },
  { id: 'spi-6', title: 'Shirdi Nashik Trimbakeshwar', location: 'Maharashtra', duration: '4 Days / 3 Nights', price: '₹11,999', rating: 4.6, reviews: 190, image: '/destination_2.png', badge: null, highlights: ['Sai Baba Temple', 'Trimbakeshwar Jyotirlinga', 'Nashik Kumbh Ghats', 'Pandavleni Caves', 'Anjneri Hill'], includes: ['Hotel', 'Transfers', 'Breakfast'] },
];

export const faqs = {
  general: [
    { q: 'How do I book a tour package?', a: 'You can book by visiting our website, calling us, or visiting our office. Choose your package, select dates, fill in traveler details, and confirm with payment.' },
    { q: 'Can I customise my tour package?', a: 'Absolutely! We specialise in tailor-made tours. Contact our team and we\'ll design an itinerary perfectly suited to your interests and budget.' },
    { q: 'What is included in the package price?', a: 'Each package clearly lists inclusions (hotel, flights, meals, transfers etc.). Please read the "Includes" section of each tour carefully.' },
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 2-4 weeks in advance for domestic tours and 4-8 weeks for international tours to ensure availability and best pricing.' },
  ],
  payment: [
    { q: 'What payment methods do you accept?', a: 'We accept UPI, Net Banking, Credit/Debit Cards, and EMI options. For international packages, wire transfers are also available.' },
    { q: 'Do you offer EMI options?', a: 'Yes! We offer no-cost EMI on select credit cards for packages above ₹25,000. Contact us for details.' },
    { q: 'Is a deposit required to confirm booking?', a: 'Yes, typically 25-30% of the total package cost is required as a deposit to confirm your booking. The balance is due 15 days before travel.' },
  ],
  cancellation: [
    { q: 'What is your cancellation policy?', a: 'Cancellations 30+ days before: 10% charge. 15-29 days: 25% charge. 7-14 days: 50% charge. Less than 7 days: 75-100% charge depending on the package.' },
    { q: 'How long does a refund take?', a: 'Refunds are processed within 7-14 business days after cancellation approval, back to the original payment method.' },
    { q: 'Can I reschedule my trip?', a: 'Yes, reschedules are allowed with at least 15 days notice, subject to availability. A nominal rescheduling fee may apply.' },
  ],
  passport: [
    { q: 'What documents do I need for international travel?', a: 'You need a valid passport (minimum 6 months validity), visa (we can assist), travel insurance, and PAN card / Aadhar card copies.' },
    { q: 'Do you assist with visa processing?', a: 'Yes! We offer end-to-end visa assistance for most countries including Dubai, Thailand, Singapore, Malaysia, Schengen, and USA.' },
    { q: 'What is a travel insurance and is it mandatory?', a: 'Travel insurance covers medical emergencies, trip cancellation, and baggage loss. It is highly recommended and mandatory for some international destinations.' },
  ],
};
