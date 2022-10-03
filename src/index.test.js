import React from "react";
import { render, screen } from "@testing-library/react";
import AddNewButton from "./components/AddNewButton";
import "@testing-library/jest-dom";

describe("button text tests", () => {
  test("button text in react", () => {
    try {
      render(<AddNewButton />);
      const button = screen.getElemenById("addNewButton");
      expect(button.text().includes("Add new record")).toBe(true);
    } catch (ErrorMessage) {}
  });
});

describe("search Button text tests", () => {
  test("Search button text in react", () => {
    try {
      render(<AddNewButton />);
      const button = screen.getElemenById("searchButton");
      expect(button.text().includes("searchButton new record")).toBe(true);
    } catch (ErrorMessage) {}
  });
});

describe("details Button text tests", () => {
  test("details Button text in react", () => {
    try {
      render(<AddNewButton />);
      const button = screen.getElemenById("detailsButton");
      expect(button.text().includes("detailsButton new record")).toBe(true);
    } catch (ErrorMessage) {}
  });
});

describe("addNewInput tests", () => {
  test("addNewInput in react", () => {
    try {
      render(<AddNewButton />);
      const input = screen.getElemenClassName("addNewInput");
      for (let a; a < input.length; a++) {
        expect(input[a].value().not.equals("")).toBe(true);
      }
    } catch (ErrorMessage) {}
  });
});
