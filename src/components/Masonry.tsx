import { ArtworkCard } from './ArtworkCard';
import Modal from './Modal';
import React from 'react';

export interface Artwork {
  id: string;
  src: string;
  title: string;
  description: string;
  height: number;
}

const ALL_ARTWORKS: Artwork[] = [
  {
    id: '1',
    src: 'https://placehold.co/400x600',
    title: 'Abstract Composition #1',
    description: 'A vibrant exploration of color and form',
    height: 600,
  },
  {
    id: '2',
    src: 'https://placehold.co/400x800',
    title: 'Digital Landscape',
    description: 'Mountains meet sky in digital harmony',
    height: 800,
  },
  {
    id: '3',
    src: 'https://placehold.co/400x500',
    title: 'Portrait Study',
    description: 'Capturing emotion through light and shadow',
    height: 500,
  },
  {
    id: '4',
    src: 'https://placehold.co/400x700',
    title: 'Urban Reflection',
    description: 'City life through a contemplative lens',
    height: 700,
  },
  {
    id: '5',
    src: 'https://placehold.co/400x450',
    title: 'Minimalist Study',
    description: 'Finding beauty in simplicity',
    height: 450,
  },
  {
    id: '6',
    src: 'https://placehold.co/400x650',
    title: "Nature's Pattern",
    description: 'Organic forms and natural textures',
    height: 650,
  },
  {
    id: '7',
    src: 'https://placehold.co/400x550',
    title: 'Color Theory',
    description: 'Experimenting with complementary hues',
    height: 550,
  },
  {
    id: '8',
    src: 'https://placehold.co/400x750',
    title: 'Emotional Landscape',
    description: 'Where feelings become visual',
    height: 750,
  },
  {
    id: '9',
    src: 'https://placehold.co/400x620',
    title: 'Geometric Dreams',
    description: 'Precise lines creating infinite possibilities',
    height: 620,
  },
  {
    id: '10',
    src: 'https://placehold.co/400x480',
    title: 'Sunset Reverie',
    description: 'Golden hour captured in eternal beauty',
    height: 480,
  },
  {
    id: '11',
    src: 'https://placehold.co/400x720',
    title: 'Ocean Depths',
    description: 'Mysteries beneath the surface',
    height: 720,
  },
  {
    id: '12',
    src: 'https://placehold.co/400x580',
    title: 'Forest Whispers',
    description: 'Ancient trees sharing their secrets',
    height: 580,
  },
  {
    id: '13',
    src: 'https://placehold.co/400x640',
    title: 'City Pulse',
    description: 'The heartbeat of urban life',
    height: 640,
  },
  {
    id: '14',
    src: 'https://placehold.co/400x520',
    title: 'Mountain Majesty',
    description: 'Peaks touching the infinite sky',
    height: 520,
  },
  {
    id: '15',
    src: 'https://placehold.co/400x680',
    title: 'Desert Solitude',
    description: 'Finding peace in vast emptiness',
    height: 680,
  },
  {
    id: '16',
    src: 'https://placehold.co/400x460',
    title: 'Flower Power',
    description: "Nature's delicate strength",
    height: 460,
  },
  {
    id: '17',
    src: 'https://placehold.co/400x760',
    title: 'Storm Brewing',
    description: "Power and beauty in nature's fury",
    height: 760,
  },
  {
    id: '18',
    src: 'https://placehold.co/400x540',
    title: 'Peaceful Waters',
    description: 'Tranquil lakes reflecting eternity',
    height: 540,
  },
  {
    id: '19',
    src: 'https://placehold.co/400x600',
    title: 'Cosmic Dance',
    description: 'Stars painting stories across the night',
    height: 600,
  },
  {
    id: '20',
    src: 'https://placehold.co/400x700',
    title: 'Architectural Poetry',
    description: 'Buildings as verses in stone and steel',
    height: 700,
  },
  {
    id: '21',
    src: 'https://placehold.co/400x440',
    title: 'Autumn Symphony',
    description: 'Colors dancing in the crisp air',
    height: 440,
  },
  {
    id: '22',
    src: 'https://placehold.co/400x660',
    title: "Winter's Grace",
    description: 'Silence and purity in frozen moments',
    height: 660,
  },
  {
    id: '23',
    src: 'https://placehold.co/400x590',
    title: 'Spring Awakening',
    description: 'Life returning with gentle force',
    height: 590,
  },
  {
    id: '24',
    src: 'https://placehold.co/400x780',
    title: "Summer's Embrace",
    description: 'Warmth and abundance in every ray',
    height: 780,
  },
];

export function Masonry() {
  const columns = 3;
  const columnItems = Array.from({ length: columns }, () => [] as Artwork[]);
  const [selected, setSelected] = React.useState<Artwork | null>(null);

  // split artworks into columns
  ALL_ARTWORKS.forEach((artwork, index) => {
    const columnIndex = index % columns;
    columnItems[columnIndex].push(artwork);
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex gap-4">
          {columnItems.map((items, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4">
              {items.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onClick={() => setSelected(artwork)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <Modal
          open={!!selected}
          artwork={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
