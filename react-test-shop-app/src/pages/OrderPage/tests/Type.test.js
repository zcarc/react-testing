import { render, screen } from "@testing-library/react";
import Type from "../Type";
import { server } from "../../../mocks/server";
import { rest } from "msw";

test("서버에서 프로덕트 이미지를 받아와서 출력", async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("product 데이터들을 가져올 때, 에러를 만납니다.", async () => {
  // 서버의 핸들러를 모두 리셋하고 새로운 products 핸들러를 생성합니다.
  // 새로 생성된 products 핸들러 이외에 기존에 있던 핸들러는 존재하지 않습니다.
  server.resetHandlers(
    rest.get("http://localhost:5000/products", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("서버에서 option 정보 가져오기", async () => {
  render(<Type orderType="options" />);

  const optionCheckboxes = await screen.findAllByRole("checkbox");
  expect(optionCheckboxes).toHaveLength(2);
});
