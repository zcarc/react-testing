// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// 테스트 시작 전, setupServer listen
beforeAll(() => server.listen());

// 각 테스트가 끝나면, 런타임 시 생성된 핸들러 reset
afterEach(() => server.resetHandlers());

// 모든 테스트가 끝나면, setupServer close
afterAll(() => server.close());
