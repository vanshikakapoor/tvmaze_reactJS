import Login from "./Login";
import { render, screen } from "@testing-library/react";

test("testing for Login", () => {
   render(<Login title ="Sign In"/>)
   const result = screen.getAllByText(/Sign In/i);
   //expect(result).toBeInTheDocument();
})