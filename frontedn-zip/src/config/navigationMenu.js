export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Edible Mushrooms',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://res.cloudinary.com/dwxq8ylbf/image/upload/v1725879796/100031968109b1_1_tpuew9.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://res.cloudinary.com/dwxq8ylbf/image/upload/v1725887093/image_1_dltjbd.webp',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Mushroom',
            items: [
              { name: 'Mushroom Pappad', id:"top", href: `{women/clothing/tops}` },
              { name: 'Mushroom Pickels', id:"women_dress", href: '#' },
              { name: 'Mushroom Protein Powder', id: 'women_jeans' },
             
            ],
          },
          

        ],
      },
      {
        id: 'men',
        name: 'Medicinal Mushrooms',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://res.cloudinary.com/dwxq8ylbf/image/upload/v1725883332/8381547fe7821f62c63d1ab2cd5b8645_1_cnsujl.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://res.cloudinary.com/dwxq8ylbf/image/upload/v1725879637/i_20_1_pe40tl.webp',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Mushroom',
            items: [
              { name: 'Mushroom Pappad', id: 'mens_kurta' },
              { name: 'Mushroom Pickel', id: 'shirt' },
              { name: 'Mushroom Protein Powder', id: 'men_jeans' },
             
              
            ],
          },
         
          
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }