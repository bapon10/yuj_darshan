export const workshops = [
  {
    id: 'conscious-living-tantra',
    kicker: '5-Day Workshop',
    title: 'Conscious Living through Tantra',
    subtitle: 'Vibrant Consciousness through Tantra',
    accent: 'primary', // maps to --accent styling on the card
    schedule: [
      { time: 'Morning', activity: 'Hatha Yoga + Pranayama', duration: '1 hr 45 mins' },
      { time: 'Evening', activity: 'Kundalini Meditation + Tantra Philosophy', duration: '1 hr 30 mins + 15 mins bonus' },
    ],
    teaser:
      'A five-day journey into the Tantric tradition, rooted in the Bihar Yoga lineage — a holistic path toward harmony of body and mind, and the art of conscious living.',
    fullOverview: [
      'Embark on a transformative five-day journey into the profound wisdom of the Tantric tradition. This intensive workshop is thoughtfully designed to introduce seekers to the foundational principles and practices of Tantra and Kundalini in a clear, authentic, and accessible way.',
      'Rooted in the Bihar Yoga Tradition, the programme offers a holistic approach that nurtures harmony of body, mind, and helps cultivate awareness. Through a balanced blend of yogic practices, meditation, philosophy, and self-inquiry, participants are guided toward greater inner balance, clarity, and the art of conscious living.',
      'Far more than a series of lectures, this workshop is an immersive learning experience that engages both the body and the intellect. Whether you are beginning your spiritual journey or seeking to deepen your existing practice, you will gain access to timeless insights from our experienced and learned teachers, and a deeper understanding of the expansive philosophy of Tantra.',
    ],
  },
  {
    id: 'atman-workshop',
    kicker: '5-Day Workshop',
    title: 'The Atman Workshop',
    subtitle: 'Awareness-Centred Living through Vedanta',
    accent: 'amber', // this card uses --amber per spec
    schedule: [
      { time: 'Morning', activity: 'Yin Yoga + Pranayama / Yoga Nidra', duration: '' },
      { time: 'Evening', activity: 'Vedanta Philosophy + Meditation', duration: '' },
    ],
    teaser:
      'A restorative journey into the heart of Advaita Vedanta — self-inquiry, contemplation and healing, distilled from the Upanishads and the teachings of Adi Shankaracharya.',
    fullOverview: [
      'Join us for a 5-day immersive journey into the heart of Advaita Vedanta — a path toward awareness-centred living. This is a restorative workshop designed for those seeking to go deeper: into self-inquiry, contemplation, and healing.',
      'At its core, Vedanta is described as the highest reach of human understanding — not a belief system, but a direct inquiry into the nature of reality and the self. This foundational course extracts the essence of the Upanishads and the timeless teachings of sages like Adi Shankaracharya, making ancient wisdom accessible, relevant and directly applicable to the questions we carry today.',
      'Each day unfolds in two movements. Mornings open the body and breath — Yin Yoga, Pranayama, and Yoga Nidra create the stillness needed for deeper reflection to take root. Evenings turn inward — Vedanta philosophy and meditation guide you through a structured inquiry into the nature of the self, and offer a lens for meeting the confusions, restlessness, and search for meaning that mark modern life.',
      'At the weekends, we host book circles and discussion circles that revolve around the concepts discussed in class — philosophy, doubts, and reflections shared in community.',
      'This workshop is for those who are drawn to ask: Who am I, beneath all that I do and think? No prior philosophical background is needed — only curiosity, and a willingness to sit with oneself.',
    ],
  },
];

// Shared placeholder batch dates — spec flags this as an open item
// (real per-workshop dates/pricing needed from client before launch)
export const batchDates = [
  { value: 'batch-1', label: 'Batch 1 — Dates TBC' },
  { value: 'batch-2', label: 'Batch 2 — Dates TBC' },
  { value: 'batch-3', label: 'Batch 3 — Dates TBC' },
];