import { render as renderComponent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// a special render function that includes userEvent setup
export const render = (ui: React.ReactElement, options: Parameters<typeof renderComponent>[1]) => {
    const user = userEvent.setup();
    const result = renderComponent(ui, options);
    return { ...result, user };
}   