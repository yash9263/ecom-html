console.log("index.js loaded");

const productsEl = document.querySelector("#products-list");
const productsInfo = [
  {
    title: "Hiking Jacket",
    src: "https://res.cloudinary.com/yashwant9263/image/upload/v1645121952/Camp/ecommerce/home/hiking_jacket.webp",
  },
  {
    title: "Hiking Bag 15 Litre NH100 - Blue",
    src: "https://res.cloudinary.com/yashwant9263/image/upload/v1645126116/Camp/ecommerce/home/bagpack1_zu78hu.webp",
  },
  {
    title: "Men’s Hiking Fleece Jacket - MH120",
    src: "https://res.cloudinary.com/yashwant9263/image/upload/v1645126228/Camp/ecommerce/home/hiking_flece_d9lh7g.webp",
  },
  {
    title: "Trekking Backpack Trek 900 50+10 Litre - Light Grey",
    src: "https://res.cloudinary.com/yashwant9263/image/upload/v1645126153/Camp/ecommerce/home/rugsack1_gxdplc.webp",
  },
];

const productCard = (title, src) => `
    <div class="product-card">
    <div class="img-container product-img-wrapper">
        <img
            src=${src}
            loading="lazy"
            alt="product image"
        />
        <div class="wishlist-icon"><i class="bx bxs-heart"></i></div>
    </div>
    <div class="card-content">
        <div class="small-text product-caption">Trending</div>
        <h3 class="header-3 bold">${title}</h3>
        <strong class="small-text bold">Rs.1,200.00</strong>
        <div class="small-text medium">New Arrival</div>
    </div>
</div>
`;

const productsArr = Array.from(productsInfo, ({ title, src }) =>
  productCard(title, src)
).join("");

const productsHTML = Array.from({ length: 3 }, () => productsArr).join("");
productsEl.innerHTML = productsHTML;
