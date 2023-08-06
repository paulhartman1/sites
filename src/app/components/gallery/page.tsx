'use client';
import { Grid } from '@nextui-org/react';
import ArtCard from '../artCard/artCard';
import { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import {Image as IMG} from '@/app/types/image';
export default function Gallery(props: any) {
  const [images, setImages] = useState<IMG[]>(props.images);

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
              <ArtCard  image={image} isPressable={props.isPressable || true} display={true} showBorder={props.borders || false} isPrimary={image.isPrimary || false}/>
            </Grid>
          )
      )}
    </Grid.Container>

    </UserProvider>
  );
}
