'use client';
/* eslint-disable react/no-unescaped-entities */
import { Image, Grid, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import LandingText from '../../../../public/landingText';

export default function Layout(props: any) {
  const [bannerImage, setBannerImage] = useState(
    props.bannerImage || '/dave.png'
  );
  const [bodyData, setBodyData] = useState(props.bodyData || LandingText);
  const [bodyTitle, setBodyTitle] = useState(props.bodyTitle || null);

  useEffect(() => {
    setBannerImage(props.bannerImage || '/dave.png');
    setBodyData(props.bodyData || LandingText);
    setBodyTitle(props.bodyTitle || null);
  }, [props]);

  return (
    <Grid.Container gap={2} style={{ marginTop: '50px' }}>
      <Grid xs={0} sm={3} style={{ marginTop: '35px' }}>
        <Image
          className="banner-image"
          height={450}
          src={bannerImage}
          alt="Picture of the author"
          objectFit="cover"
        />
      </Grid>
      <Grid.Container xs={12} sm={9}>
        <Grid xs={12} >
          <div className="banner-body">{bodyData}</div>
        </Grid>
        <Grid xs={12}>
          <Button color="primary" className='banner-body' css={{textAlign:'center', margin:'auto', backgroundColor:'$purple800'}}>
            Contact Me
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
}
