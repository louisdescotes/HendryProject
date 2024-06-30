import React from 'react'

export default function ImgRow({img1, img2, img3, img4, author}) {
  return (
    <aside className="grid grid-cols-12 grid-rows-custom gap-x-2">
      <div className="col-span-3 row-span-3 row-start-4 row-end-1 h-full ">
        <img className="h-full w-full object-cover" src={img1} alt="" />
      </div>
      <div className="col-span-3 row-span-2 row-start-4 row-end-2 h-full ">
        <img className="h-full w-full object-cover" src={img2} alt="" />
      </div>
      <div className="col-span-3 row-span-2 row-start-4 row-end-2 h-full ">
        <img className="h-full w-full object-cover" src={img3} alt="" />
      </div>
      {img4 && (
        <div className="col-span-3 row-span-1 row-start-3 h-full">
          <img className="h-full w-full object-cover" src={img4} alt="" />
        </div>
      )}
      <span className="mt-1 font-neue text-author font-regular row-start-4">{author}</span>
    </aside>
  )
}
