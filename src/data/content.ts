export interface Faq {
  q: string;
  a: string;
}

export interface TimelineStep {
  day: string;
  text: string;
}

export const INSTAGRAM_URL = 'https://www.instagram.com/natgenic.in?cplk=c2M4aHlwZ2tqdWtp';

export const NAV_LINKS = [
  { label: 'The Product', href: '#product-intro' },
  { label: '60-Day Challenge', href: '#challenge' },
  { label: 'Results', href: '#results' },
  { label: 'How to Use', href: '#how-to-use' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const TIMELINE: TimelineStep[] = [
  { day: 'Day 1', text: 'Begin the routine. Take a clear starting photo.' },
  { day: 'Day 15', text: 'The habit settles in. Keep the routine regular.' },
  { day: 'Day 30', text: 'Halfway point. Compare against your Day 1 photo.' },
  { day: 'Day 45', text: 'Stay with it. Consistency matters most here.' },
  { day: 'Day 60', text: 'Review your progress side by side and decide for yourself.' },
];

export const FAQS: Faq[] = [
  {
    q: 'Who is Natgenic for?',
    a: 'Natgenic is made for people dealing with hair fall, thinning hair or a hereditary pattern of hair loss, and who want a dedicated hair-care routine they can follow consistently.',
  },
  {
    q: 'Can I use Natgenic if I have genetic hair loss?',
    a: 'Yes, Natgenic is designed with genetic hair thinning in mind. It is a hair-care product, not a medical treatment, so it is intended to support your hair-care routine rather than replace professional medical advice. If your hair loss is sudden, patchy or accompanied by other symptoms, we recommend consulting a dermatologist.',
  },
  {
    q: 'How often should I use it?',
    a: 'Follow the usage instructions on the bottle and apply it regularly as part of your routine. Regular, repeated use matters far more than using a large amount occasionally.',
  },
  {
    q: 'How long should I use Natgenic before evaluating results?',
    a: 'We suggest giving it at least 60 days of consistent use. Hair changes gradually, so take a clear photo on Day 1 and compare it at Day 60. Individual results vary.',
  },
  {
    q: 'How do I purchase Natgenic?',
    a: 'This website is not an online store. Natgenic is sold directly through our Instagram page. Message us there and we\u2019ll help you place your order. 60 ml \u00b7 \u20b9600.',
  },
  {
    q: 'Is shipping available across India?',
    a: 'Yes, we ship across India. For delivery timelines and shipping charges for your location, message us on Instagram before placing your order.',
  },
];
