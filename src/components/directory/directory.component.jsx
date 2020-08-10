import React, { Component } from "react";
import "./directory-styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://i.ibb.co/HxHkgZQ/fa4094693363564a6cf9513f637ec4c5-1000.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://i.ibb.co/fp16fhc/cns-greylogo-large-official-mockup-Front-Mens-Lifestyle-Black-White.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/41njYbM/business-woman-with-laptop.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://i.ibb.co/V3csSw0/Photo-Jonas-Svidras-STEP-CAMERA.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    const menuDirectory = Object.assign([], this.state.sections);
    return (
      <div className="directory-menu">
        {menuDirectory.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
