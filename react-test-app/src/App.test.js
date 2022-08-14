import { fireEvent, render, screen } from "@testing-library/react";
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

test("'+' 버튼을 눌렀을 때, counter는 1로 변합니다.", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");

  // plus button 엘리먼트를 클릭하는 이벤트를 발생
  fireEvent.click(plusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("'-' 버튼을 눌렀을 때, counter는 -1로 변합니다.", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");

  // minus button 엘리먼트를 클릭하는 이벤트를 발생
  fireEvent.click(minusButtonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off 버튼은 파란색입니다.", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("on/off 버튼이 클릭되면 '+' 버튼의 disabled 속성의 값은 true로 변합니다.", () => {
  render(<App />);

  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});
