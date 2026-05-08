import { useState } from 'react';
import { Card1 } from './components/Card1';
import { Card2 } from './components/Card2';
import { Card3 } from './components/Card3';
import { Card4 } from './components/Card4';
import { Card5 } from './components/Card5';
import { Card6 } from './components/Card6';
import { Card7 } from './components/Card7';
import { Card8 } from './components/Card8';
import { Card9 } from './components/Card9';
import { Card10 } from './components/Card10';
import { Navigation } from './components/Navigation';
import './styles/globals.css';

const cards = [
  { component: Card1, title: 'DIY vs Professional' },
  { component: Card2, title: 'Grower Network' },
  { component: Card3, title: 'Three Paths to Growers' },
  { component: Card4, title: 'Postcard Results' },
  { component: Card5, title: 'AI Discovery' },
  { component: Card6, title: '30-Day Timeline' },
  { component: Card7, title: 'Analytics Dashboard' },
  { component: Card8, title: 'Blog Content' },
  { component: Card9, title: 'Landing Page' },
  { component: Card10, title: 'Before/After' },
];

function App() {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleCardSelect = (cardIndex: number) => {
    setCurrentCard(cardIndex);
  };

  const CurrentCard = cards[currentCard].component;

  return (
    <div>
      <CurrentCard />
      <Navigation
        currentCard={currentCard}
        totalCards={cards.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onCardSelect={handleCardSelect}
      />
    </div>
  );
}

export default App;
