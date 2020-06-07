import React from 'react';

import './directory.scss';
import MenuItem from '../menu-item/menu-item';

class Directory extends React.Component  {
    constructor(){
        super();

        this.state = {
             sections : [{
                  title: 'Superfoods',
                  imageUrl: 'https://i.ibb.co/s5FVprF/Superfoods.jpg',
                  id: 1,
                  linkUrl: 'shop/superfoods'
                },
                {
                  title: 'Vegan products',
                  imageUrl: 'https://i.ibb.co/7jsKsJ7/Vegan-products.jpg',
                  id: 2,
                  linkUrl: 'shop/veganproducts'
                },
                {
                  title: 'Plants seeds',
                  imageUrl: 'https://i.ibb.co/QbJvCvj/Plants-seeds.jpg',
                  id: 3,
                  linkUrl: 'shop/sproutedseeds'
                },
                {
                  title: 'Vegan cosmetics',
                  imageUrl: 'https://i.ibb.co/pjNDSg8/Vegan-cosmetics.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/vegancosmetics'
                },
                {
                  title: 'Eco accessories',
                  imageUrl: 'https://i.ibb.co/FHSr0TL/Eco-accessories.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/ecocessories'
                }]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionsProps}) => (
                    <MenuItem id={id} {...otherSectionsProps} />
                ))
                }
            </div>
        )
    }
}

export default Directory;