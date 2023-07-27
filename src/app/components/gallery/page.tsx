'use client';
import { Grid } from '@nextui-org/react';
import ArtCard from '../artCard/page';
import { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
export default function Gallery(props: any) {
  const [images, setImages] = useState(props.images);

  useEffect(() => {
    
    setImages(props.images);
    }, [props, images]);



  return (
    <UserProvider>
    <Grid.Container gap={2} className="art-cards-container">
      {images?.map(
        (image: any) =>
           (
            <Grid xs={12} sm={3} key={image.id}>
              <ArtCard imageId={image.id} title={image.name} image={image.url} isPressable={props.isPressable || false} display={image.display} showBorder={props.borders || false} isPrimary={image.isPrimary || false}/>
            </Grid>
          )
      )}
    </Grid.Container>

    </UserProvider>
  );
}
