import { useCallback, useState } from 'react';
import { Masonry as MasonicMasonry } from 'masonic';
import { ArtworkCard } from './ArtworkCard';
import { Modal } from './Modal';

export interface Artwork {
  src: string;
  title: string;
  description: string;
  height: number;
}

const ALL_ARTWORKS: Artwork[] = [
  {
    src: 'https://placehold.co/400x600',
    title: 'Abstract Composition #1',
    description: 'A vibrant exploration of color and form',
    height: 600,
  },
  {
    src: 'https://placehold.co/400x800',
    title: 'Digital Landscape',
    description: 'Mountains meet sky in digital harmony',
    height: 800,
  },
  {
    src: 'https://placehold.co/400x500',
    title: 'Portrait Study',
    description: 'Capturing emotion through light and shadow',
    height: 500,
  },
  {
    src: 'https://placehold.co/400x700',
    title: 'Urban Reflection',
    description: 'City life through a contemplative lens',
    height: 700,
  },
  {
    src: 'https://placehold.co/400x450',
    title: 'Minimalist Study',
    description: 'Finding beauty in simplicity',
    height: 450,
  },
  {
    src: 'https://placehold.co/400x650',
    title: "Nature's Pattern",
    description: 'Organic forms and natural textures',
    height: 650,
  },
  {
    src: 'https://placehold.co/400x550',
    title: 'Color Theory',
    description: 'Experimenting with complementary hues',
    height: 550,
  },
  {
    src: 'https://placehold.co/400x750',
    title: 'Emotional Landscape',
    description: 'Where feelings become visual',
    height: 750,
  },
  {
    src: 'https://placehold.co/400x620',
    title: 'Geometric Dreams',
    description: 'Precise lines creating infinite possibilities',
    height: 620,
  },
  {
    src: 'https://placehold.co/400x480',
    title: 'Sunset Reverie',
    description: 'Golden hour captured in eternal beauty',
    height: 480,
  },
  {
    src: 'https://placehold.co/400x720',
    title: 'Ocean Depths',
    description: 'Mysteries beneath the surface',
    height: 720,
  },
  {
    src: 'https://placehold.co/400x580',
    title: 'Forest Whispers',
    description: 'Ancient trees sharing their secrets',
    height: 580,
  },
  {
    src: 'https://placehold.co/400x640',
    title: 'City Pulse',
    description: 'The heartbeat of urban life',
    height: 640,
  },
  {
    src: 'https://placehold.co/400x520',
    title: 'Mountain Majesty',
    description: 'Peaks touching the infinite sky',
    height: 520,
  },
  {
    src: 'https://placehold.co/400x680',
    title: 'Desert Solitude',
    description: 'Finding peace in vast emptiness',
    height: 680,
  },
  {
    src: 'https://placehold.co/400x460',
    title: 'Flower Power',
    description: "Nature's delicate strength",
    height: 460,
  },
  {
    src: 'https://placehold.co/400x760',
    title: 'Storm Brewing',
    description: "Power and beauty in nature's fury",
    height: 760,
  },
  {
    src: 'https://placehold.co/400x540',
    title: 'Peaceful Waters',
    description: 'Tranquil lakes reflecting eternity',
    height: 540,
  },
  {
    src: 'https://placehold.co/400x600',
    title: 'Cosmic Dance',
    description: 'Stars painting stories across the night',
    height: 600,
  },
  {
    src: 'https://placehold.co/400x700',
    title: 'Architectural Poetry',
    description: 'Buildings as verses in stone and steel',
    height: 700,
  },
  {
    src: 'https://placehold.co/400x440',
    title: 'Autumn Symphony',
    description: 'Colors dancing in the crisp air',
    height: 440,
  },
  {
    src: 'https://placehold.co/400x660',
    title: "Winter's Grace",
    description: 'Silence and purity in frozen moments',
    height: 660,
  },
  {
    src: 'https://placehold.co/400x590',
    title: 'Spring Awakening',
    description: 'Life returning with gentle force',
    height: 590,
  },
  {
    src: 'https://placehold.co/400x780',
    title: "Summer's Embrace",
    description: 'Warmth and abundance in every ray',
    height: 780,
  },
];

export function Masonry() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = useCallback((artwork: Artwork) => {
    const idx = ALL_ARTWORKS.findIndex((a) => a.src === artwork.src);
    setSelectedIndex(idx === -1 ? 0 : idx);
  }, []);

  const handleClose = () => setSelectedIndex(null);

  const handlePrev = () =>
    setSelectedIndex((i) => {
      if (i === null) return i;
      return i === 0 ? ALL_ARTWORKS.length - 1 : i - 1;
    });

  const handleNext = () =>
    setSelectedIndex((i) => {
      if (i === null) return i;
      return i === ALL_ARTWORKS.length - 1 ? 0 : i + 1;
    });

  // Render function for masonic
  const renderCard = useCallback(
    ({ data }: { data: Artwork }) => (
      <ArtworkCard artwork={data} onClick={() => handleOpen(data)} />
    ),
    [handleOpen]
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <MasonicMasonry
          items={ALL_ARTWORKS}
          render={renderCard}
          columnWidth={300}
          columnGutter={16}
          rowGutter={16}
          itemKey={(data: Artwork) => data.src + data.title}
          itemHeightEstimate={700}
        />
      </div>
      {selectedIndex !== null && (
        <Modal
          open={selectedIndex !== null}
          artwork={ALL_ARTWORKS[selectedIndex]}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
