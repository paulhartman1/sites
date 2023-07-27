'use client';
import { Radio, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import ImageGallery from '../components/gallery/page';
import Nav from '../components/nav/page';
import { couldStartTrivia } from 'typescript';

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(-1);
  const [categories, setCategories] = useState<any[]>([]);
  const [imageCategories, setImageCategories] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);

  const [loaded, setLoaded] = useState(false);



  useEffect(() => {
    fetch('/imageCategory')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImageCategories(data);
      });
  }, [imageCategories.length, loaded]);

  useEffect(() => {
    
    fetch('/imageData')
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].display = 'block';
          data[i].isPrimary = false  ;
          imageCategories[i] &&
            (data[i].categoryid = imageCategories[i].categoryid);
        }
        setImages(data);
        console.log('images', images);
      });
      setLoaded(true);
  }, [loaded, imageCategories.length]);

  useEffect(() => {
    fetch('/category')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [categories.length]);

  const handleCategoryChange = (e: any) => {
    if (e == 'all') {
      setSelectedCategory(-1);
      return;
    }
    if (e == 'uncategorized') {
      setSelectedCategory(-2);
      return;
    }
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name == e) {
        setSelectedCategory(i);
      }
    }
  };

  useEffect(() => {
  
    for (let i = 0; i < images.length; i++) {
      if (selectedCategory === -1) {
        images[i].display = 'block';
      } else if (selectedCategory === -2) {
        if (images[i].categoryid === null) {
          images[i].display = 'block';
        } else {
          images[i].display = 'none';
        }
      } else if (images[i].categoryid === categories[selectedCategory!].id) {
        images[i].display = 'block';
      } else {
        images[i].display = 'none';
      }
    }
    setImages([...images]);
  }, [selectedCategory]);

  return (
    <>
      <Nav />
      <Radio.Group
        defaultValue="all"
        orientation="horizontal"
        color="secondary"
        onChange={handleCategoryChange}
        css={{margin: '0 auto', width: 'fit-content', marginTop: '1em'}}
      >
        <Radio value="all"><Text>All</Text></Radio>
        <Radio value="uncategorized">
          <Text>Uncategorized</Text>
        </Radio>
        {categories.map((category) => (
          <Radio value={category.name}>
            <Text css={{tt: 'capitalize'}}>{category.name}</Text>

          </Radio>
        ))}
      </Radio.Group>
      <ImageGallery
        images={images}
        selectedCategory={selectedCategory}
        isPressable={true}
        borders={true}
      />
    </>
  );
}
