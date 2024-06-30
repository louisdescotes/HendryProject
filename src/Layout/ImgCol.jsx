import React from 'react'

export default function ImgCol({img1, img2, img3, img4, author}) {
  return (
    <aside className="grid grid-cols-12 grid-rows-custom2 gap-y-2 gap-x-2">
        <div className="col-span-6 grid-rows-1">
            <img className="h-full w-full object-cover" src={img1} alt="" />
        </div>
        <div className="col-span-6 grid-rows-1">
            <img className="h-full w-full object-cover" src={img2} alt="" />
        </div>
        <div className="col-span-3 grid-rows-2 col-start-4">
            <img className="h-full w-full object-cover" src={img3} alt="" />
        </div>
        <div className="col-span-3 grid-rows-2 col-start-10">
            <img className="h-full w-full object-cover" src={img4} alt="" />
        </div>
        <span className="mt-1 font-neue text-author font-regular row-start-4">{author}</span>
    </aside>
  )
}
