import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Type from "../Type";

test("각 프로덕트가 변경되면, 프로덕트 토탈 업데이트", async () => {
  render(<Type orderType="products" />);

  // { exact: false } "상품 총 가격" 텍스트 이외에 다른 텍스트가 존재할 수 있습니다.
  const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // America 상품을 선택합니다.
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  // input에 text "1"을 씁니다.
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});
