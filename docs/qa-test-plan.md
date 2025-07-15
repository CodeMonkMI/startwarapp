# QA/Test Plan

> I have limited experience in testing on production projects. I have theoretical knowledge about testing. I am willing to learn testing under senior guidance

## Overview

This document describes the testing strategy, tools, test scenarios, and bug tracking approach for the web application.

## 1. Types of Testing

- **Unit Testing:**  
  Testing individual functions, React components, and modules in isolation.

- **Integration Testing:**  
  Testing the interaction between different application modules (e.g., component and API interaction).

- **End-to-End (E2E) Testing:**  
  Simulating user workflows to verify the application works as expected from the user’s perspective.

- **UI/UX Testing:**  
  Validating the application’s visual consistency and user experience against design specifications.

## 2. Test Tools

- **Jest:** Unit and integration testing for JavaScript/TypeScript code and React components.
- **React Testing Library:** User-centric testing of UI components.

## 3. Test Cases and Scenarios

### Unit Tests

- Rendering main components without errors (`layout.tsx`, `page.tsx`, etc.).
- UI elements (button, card, input) function as expected.
- Utility functions handle input and edge cases.

### Integration Tests

- Components correctly fetch and display API data.
- Page navigation works (e.g., homepage to Star Wars character page).
- Forms process and validate user input.

### End-to-End (E2E) Tests

- User navigates from the homepage to the Star Wars character list and views details.
- Error messages display when APIs fail.
- Application is responsive on different devices.

### UI/UX Tests

- Application matches design specs (e.g., Figma).
- All controls are accessible by keyboard.
- ARIA attributes and focus states are present where required.

## 3. Test Coverage

- only one unit test coverage for `CharacterCard` component.

## 4. References

- [Jest](https://jestjs.io/)
- [NextJs Jest](https://nextjs.org/docs/app/guides/testing/jest)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
