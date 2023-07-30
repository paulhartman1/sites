'use client';
import React, { use, useEffect, useState } from 'react';
import Nav from '../components/nav/page';
import Layout from '../components/layout/page';
import ImageGallery from '../components/gallery/page';
import { usePathname } from 'next/navigation';
import { UserProvider } from '@auth0/nextjs-auth0/client';

 interface image {
  id: number;
  name: string;
  url: string;
  categoryid: number;
  isPrimary: boolean;
}

export default function Gallery() {
  
  const [imgData, setImageData] = useState<image[]>([]);

  useEffect(() => {
  fetch('/imageData').then((res) => res.json()).then((data) => {
    setImageData(data);
  });
},([]));
  const [bannerImage, setBannerImage] = useState('');

  const [images, setImages] = useState<image[]>([]);
  const router = usePathname();
  const [catId, setCatId] = useState(-1);

  useEffect(() => {
    setCatId(parseInt(router!.substring(1)));
  });

  useEffect(() => {
   
    let images = [];
    for (let i = 0; i < imgData.length; i++) {
      if (
        
        imgData[i].categoryid == catId
      ) {
        if (imgData[i].isPrimary) {
          setBannerImage(imgData[i].url);
        } else {
          images.push(imgData[i]);
          setImages(images);
        }
      }
    }
  
  }, [catId, imgData.length]);

  return (
    <UserProvider>
      <Nav />
      <Layout
        bannerImage={bannerImage}
        bodyData={<ImageGallery catId={catId} images={images} isPressable={false}/>}
      />
    </UserProvider>
  );
}
