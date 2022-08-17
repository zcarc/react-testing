import { render, screen } from "@testing-library/react";
import Type from "../Type";

test("서버에서 프로덕트 이미지를 받아와서 출력", async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(["America product", "England product"]);
});
