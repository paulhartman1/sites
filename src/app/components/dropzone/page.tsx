'use client';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Image, Text } from '@nextui-org/react';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

export default function Dropzone(props:any) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: props.onDrop
  });

  const thumbs = props.files?.map((file:any) => (
    <div key={file.name}>
      <div style={thumbInner}>
        <Image
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {<Text>Drop <span style={{fontWeight:'lighter'}}>(or)</span> click me!</Text>}
      </div>
      <aside>{thumbs}</aside>
    </section>
  );
}
