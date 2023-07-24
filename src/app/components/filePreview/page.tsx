import React from 'react';
export default function FilePreview(props: any) {
    console.log('props');
  const fileData = props.fileData;
  return (
    fileData?.fileList?.length > 0 &&
    <div className={'fileList'}>
      <div className={'fileContainer'}>
        {/* loop over the fileData */}
        {fileData.fileList.map((f: { lastModified: React.Key | null | undefined; name: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; }) => {
            console.log(f);
          return (
            <>
              <ol>
                <li key={f.lastModified} className={'fileList'}>
                  {/* display the filename and type */}
                  <div key={Math.random()} className={'fileName'}>
                    {f.name}
                  </div>
                </li>
              </ol>
            </>
          );
        })}
      </div>
    </div>
  );
}
