import { useEffect } from 'react';

interface NavigationProps {
  currentCard: number;
  totalCards: number;
  onNext: () => void;
  onPrevious: () => void;
  onCardSelect: (cardIndex: number) => void;
}

export function Navigation({
  currentCard,
  totalCards,
  onNext,
  onPrevious,
  onCardSelect,
}: NavigationProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious]);

  return (
    <div className="navigation">
      <button
        className="nav-button"
        onClick={onPrevious}
        disabled={currentCard === 0}
        aria-label="Previous card"
      >
        ← Previous
      </button>

      <div className="dot-indicators">
        {Array.from({ length: totalCards }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentCard ? 'active' : ''}`}
            onClick={() => onCardSelect(index)}
            aria-label={`Go to card ${index + 1}`}
            aria-current={index === currentCard ? 'page' : undefined}
          />
        ))}
      </div>

      <div className="slide-counter">
        {currentCard + 1} of {totalCards}
      </div>

      <button
        className="nav-button"
        onClick={onNext}
        disabled={currentCard === totalCards - 1}
        aria-label="Next card"
      >
        Next →
      </button>
    </div>
  );
}
