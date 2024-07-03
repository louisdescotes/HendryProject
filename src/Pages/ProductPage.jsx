import React from "react";
import { useParams } from "react-router-dom";
import ProductPageLayout from "../Layout/ProductPageLayout";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const productData = {
  bunny: {
    name: "Bunny",
    description:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
    prix: "125,00 €",
    information:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
  },
  celinalea: {
    name: "celinalea",
    description:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
    prix: "125,00 €",
    information:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
  },
  rayn: {
    name: "Rayn",
    description:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
    prix: "125,00 €",
    information:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
  },
  theloveofgold: {
    name: "The Love of Gold",
    description:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
    prix: "125,00 €",
    information:
      "Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero sed repudiandae corrupti aut obcaecati molestiae nam veritatis praesentium et omnis veniam. Et perferendis beatae et laborum sint qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.",
  },
};

export default function ProductPage() {
  const { name } = useParams();
  const product = productData[name];

  return (
    <div>
      <Header />
      <ProductPageLayout
        name={product.name}
        description={product.description}
        prix={product.prix}
        information={product.information}
      />
      <Footer />
    </div>
  );
}
