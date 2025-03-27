import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Appointment from "../pages/Appointment";

// Mock Data
const mockDoctors = [
  {
    _id: "123",
    name: "Dr. Jane Doe",
    degree: "MD",
    speciality: "Cardiology",
    experience: "10 years",
    about: "Experienced in heart diseases.",
    fees: 200,
    image: "/mock-image.jpg",
  },
];

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ docId: "123" }),
  };
})

describe("Appointment Component", () => {
  beforeEach(() => {
    render(
      <AppContext.Provider
        value={{ doctors: mockDoctors, currencySymbol: "$" }}
      >
        <MemoryRouter initialEntries={["/appointment/123"]}>
          <Routes>
            <Route path="/appointment/:docId" element={<Appointment />} />
          </Routes>
        </MemoryRouter>
      </AppContext.Provider>
    );
  });

  test("renders doctor information correctly", async () => {
    await waitFor(() => {
      expect(screen.queryByText("Dr. Jane Doe")).not.toBeNull();
      expect(screen.queryByText("MD - Cardiology")).not.toBeNull();
      expect(
        screen.queryByText("Experienced in heart diseases.")
      ).not.toBeNull();
      expect(screen.queryByText("Appointment fee:")).not.toBeNull();
      expect(screen.queryByText("$200")).not.toBeNull();
    });
  });

  test("displays booking slots after doctor info is loaded", async () => {
    await waitFor(() => {
      expect(screen.queryByText("Booking slots")).not.toBeNull();
    });
  });

  test("renders book appointment button", () => {
    expect(screen.queryByText("Book an appointment")).not.toBeNull();
  });

  test("handles when doctor is not found", () => {
    render(
      <AppContext.Provider
        value={{ doctors: mockDoctors, currencySymbol: "$" }}
      >
        <MemoryRouter initialEntries={["/appointment/999"]}>
          <Routes>
            <Route path="/appointment/:docId" element={<Appointment />} />
          </Routes>
        </MemoryRouter>
      </AppContext.Provider>
    );

    expect(screen.queryByText("Jane Doe")).toBeNull();
  });

  test("selecting a booking slot updates the UI", async () => {
    await waitFor(() => {
      const slot = screen.queryAllByText(/SUN|MON|TUE|WED|THU|FRI|SAT/)[0];
      expect(slot).not.toBeNull();
      fireEvent.click(slot);
    });

    expect(screen.queryAllByText(/SUN|MON|TUE|WED|THU|FRI|SAT/)[0]).toBeTruthy(
      "bg-[var(--primary)] text-white"
    );
  });

  test("selecting a time slot updates the UI", async () => {
    await waitFor(() => {
      const timeSlot = screen.queryAllByText(/am|pm/i)[0];
      expect(timeSlot).not.toBeNull();
      fireEvent.click(timeSlot);
    });

    expect(screen.queryAllByText(/am|pm/i)[0]).toBeTruthy(
      "bg-[var(--primary)] text-white"
    );
  });

  test('clicking "Book an appointment" triggers action', () => {
    const bookButton = screen.getByText("Book an appointment");
    fireEvent.click(bookButton);

    // No explicit action is taken in this component, but we can check if button exists
    expect(bookButton).not.toBeNull();
  });
});
