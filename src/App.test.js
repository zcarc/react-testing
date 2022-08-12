import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  // App 컴포넌트 렌더링
  render(<App />);

  // screen object로 원하는 엘리먼트에 접근 (id로 접근)
  const counterElement = screen.getByTestId("counter");

  // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  // App 컴포넌트 렌더링
  render(<App />);

  // screen object로 id가 minus-button인 엘리먼트에 접근
  const minusButtonElement = screen.getByTestId("minus-button");

  // id가 minus-button인 엘리먼트의 텍스트가 '-'인지 테스트
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  // App 컴포넌트 렌더링
  render(<App />);

  // screen object로 id가 plus-button인 엘리먼트에 접근
  const plusButtonElement = screen.getByTestId("plus-button");

  // id가 plus-button인 엘리먼트의 텍스트가 '+'인지 테스트
  expect(plusButtonElement).toHaveTextContent("+");
});
