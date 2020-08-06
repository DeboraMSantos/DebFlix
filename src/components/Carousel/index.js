import React from 'react';
import {
  VideoCardGroupContainer, Title, ExtraLink, Imagem,
} from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const categoryImage = category.image;

  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>

          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            <Imagem alt="icone categoria" src={categoryImage} />
            {categoryTitle}
          </Title>

        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
