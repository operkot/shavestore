import { FC } from 'react'
// import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { IProductImage } from '../types'

interface ProductGalleryProps {
  images: IProductImage[]
}

const SWIPER_OPTIONS = {
  // modules: [Pagination],
  loop: true,
  // pagination: {
  //   el: '.product-gallery-pagination',
  //   clickable: true,
  // },
}

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  return (
    <section className="overflow-hidden">
      <Swiper {...SWIPER_OPTIONS}>
        {images.map((image: IProductImage) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
