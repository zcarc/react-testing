import { render, screen } from "@testing-library/react";
import SummaryPage from "../SummaryPage";

test("주문 확인 체크 박스를 눌러야만 주문 확인 버튼을 누를 수 있다.", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?", // name: label의 text
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(confirmButton.disabled).toBeTruthy();
});
