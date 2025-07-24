import { useEffect, useRef } from 'react';

import type { Artwork } from './Masonry';

interface ModalProps {
  open: boolean;
  artwork: Artwork;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Modal = ({
  open,
  artwork,
  onClose,
  onPrev,
  onNext,
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close modal on ESC key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0">
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-6 right-8 text-gray-200 hover:text-white focus:outline-none z-10"
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={artwork.src}
          alt={artwork.title}
          className="w-full h-full object-contain rounded shadow-lg"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
};
