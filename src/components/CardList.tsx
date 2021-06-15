import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleViewImage(url: string): void {
    setSelectedImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards &&
          cards.map(card => (
            <Card
              key={card.id}
              data={card}
              viewImage={() => handleViewImage(card.url)}
            />
          ))}
      </SimpleGrid>

      <ModalViewImage
        onClose={onClose}
        imgUrl={selectedImageUrl}
        isOpen={isOpen}
      />
    </>
  );
}
