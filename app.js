const products = [
  {
    id: 1,
    name: "Personal Alarm for Women, 10 Pack 140DB Emergency Self-Defense Security Alarm Keychain with LED Light for Women Kids and Elders",
    price: "$25.99",
    imgUrl: "https://m.media-amazon.com/images/I/51kRinbqajL._AC_SY200_.jpg",
  },
  {
    id: 2,
    name: "（Full-coverage）Privacy Screen Protector for 2019 iPhone 11 Pro/iPhone X/XS (2-Pack)，Elecshion True 28° (Case Friendly) Anti-spy Tempered Glass with Easy Installation Tray(5.8'')",
    price: "$9.99",
    imgUrl: "https://m.media-amazon.com/images/I/51b1rSXmqKL._AC_SY200_.jpg",
  },
  {
    id: 3,
    name: "NEW Microsoft Surface Dock 2",
    price: "$175.98",
    imgUrl: "https://m.media-amazon.com/images/I/21AP+lf4gjL._AC_SY200_.jpg",
  },
  {
    id: 4,
    name: "for iPhone 6S Screen Replacement Black,Drscreen LCD Touch Digitizer Complete Display for A1633, A1688, A1700,with Home Button Proximity Sensor Ear Speaker Front Camera Screen Protector and Repair Tool",
    price: "$29.99",
    imgUrl: "https://m.media-amazon.com/images/I/41NVpmJUHHL._AC_SY200_.jpg",
  },
  {
    id: 5,
    name: "Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass",
    price: "$6.98",
    imgUrl: "https://m.media-amazon.com/images/I/41R16MX-aWL._AC_SY200_.jpg",
  },
  {
    id: 6,
    name: "(2 Pack) Supershieldz Designed for Apple iPhone 11 and iPhone XR (6.1 inch) (Privacy) Anti Spy Tempered Glass Screen Protector, 0.33mm, Anti Scratch, Bubble Free",
    price: "$8.99",
    imgUrl: "https://m.media-amazon.com/images/I/51rGNvwUu9L._AC_SY200_.jpg",
  },
  {
    id: 7,
    name: "pehael Privacy Screen Protector, Anty- Spy Tempered Glass for iPhone 11 Pro Max iPhone Xs Max, Easy Install, Free Bubbles [6.5 inch](2ps)",
    price: "$5.02",
    imgUrl: "https://m.media-amazon.com/images/I/41kfXEjd1wL._AC_SY200_.jpg",
  },
  {
    id: 8,
    name: "Seagate ST8000VXZ022 Skyhawk 8TB Surveillance Hard SATA 6Gb/s 256MB Cache 3.5-Inch Internal Drive-Frustration Free Packaging (ST8000VX0022), 1.33 gal",
    price: "$230.99",
    imgUrl: "https://m.media-amazon.com/images/I/41fAjKKIQQL._AC_SY200_.jpg",
  },
  {
    id: 9,
    name: "Seagate IronWolf 12TB NAS Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache for RAID Network Attached Storage – Frustration Free Packaging (ST12000VN0008)",
    price: "$355.87",
    imgUrl: "https://m.media-amazon.com/images/I/41Vt7Y0wQUL._AC_SY200_.jpg",
  },
  {
    id: 10,
    name: 'Kondor Blue Mini Quick Release Plate for Camera Tripod/Gimbal/Video Monitor/Magic Arm Flash Bracket/Stabilizer, Camera Quick Release Mount with 1/4"-20 & 3/4" Screw',
    price: "$24.99",
    imgUrl: "https://m.media-amazon.com/images/I/31wIaMFOSgL._AC_SY200_.jpg",
  },
  {
    id: 11,
    name: "JETech Privacy Screen Protector for iPhone 11 Pro, iPhone Xs and iPhone X 5.8-Inch, Anti Spy Tempered Glass Film, 2-Pack",
    price: "$7.64",
    imgUrl: "https://m.media-amazon.com/images/I/51ZLlnDz6WL._AC_SY200_.jpg",
  },
  {
    id: 12,
    name: "Galaxy S9 Plus Screen Protector Tempered Glass (2 Pack), OTAO 3D Curved Dot Matrix [Full Screen Coverage] Glass Screen Protector for Samsung Galaxy S 9 Plus with Installation Tray [Case Friendly]",
    price: "$10.99",
    imgUrl: "https://m.media-amazon.com/images/I/41bxZlOGMEL._AC_SY200_.jpg",
  },
];

const cardsImgs = Array.from(document.querySelectorAll(".card-img-top")),
  cardBtns = Array.from(document.querySelectorAll(".my-card-btn"));

cardBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalBody = document.querySelector(".modal-body");

    const cleanup = () => {
      const modalBodyChilds = Array.from(modalBody.children);

      modalBodyChilds.forEach((child) => child.remove());
    };

    const modalImg = document.createElement("img");
    const productName = document.createElement("h5");
    const productNameText = document.createTextNode(
      products.filter((product) => product.id == btn.id)[0].name
    );
    const productPrice = document.createElement("p");
    const productPriceValue = document.createTextNode(
      products.filter((product) => product.id == btn.id)[0].price
    );

    productName.appendChild(productNameText);
    productPrice.appendChild(productPriceValue);

    modalImg.setAttribute(
      "src",
      `${cardsImgs.filter((img) => img.id === btn.id)[0].currentSrc}`
    );

    productName.classList.add("product-title");
    productPrice.classList.add("product-price");
    modalImg.classList.add("modal-img");

    cleanup();

    modalBody.appendChild(modalImg);
    modalBody.appendChild(productName);
    modalBody.appendChild(productPrice);
  });
});
