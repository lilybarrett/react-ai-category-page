## Take-Home Assignment: “Category Page” React App

**Timebox:** No more than **2 hours**
**Goal:** Build a simple **TypeScript** React app that displays a category page of products, with **pagination**, **sorting**, **basic accessibility (ADA-friendly)**, and **mobile-first responsive design**, using any tooling you like. Feel free to use AI-driven code assistance (e.g. Copilot, ChatGPT) to speed things up.

### 📋 Requirements

1. **Starter Data**

   * We’ll include a `products.json` file (with 20+ items) in the repo root for you to import.
   * Each product entry has:

     ```ts
     interface Product {
       id: number;
       name: string;
       price: number;
       imageUrl: string;
     }
     ```

2. **UI, Accessibility & Responsiveness**

   * **Category** page that:

     * Lists products in a grid or list.
     * Shows `name`, `price`, and `image`.
   * **Pagination**:

     * 5 items per page, with “Previous”/“Next” buttons (disabled at ends).
     * Buttons must be keyboard-focusable and have ARIA labels.
   * **Sorting**:

     * Control (dropdown/buttons) to sort by `price` (asc/desc) and `name` (A→Z/Z→A).
     * Use semantic HTML and proper labels.
   * **Images**:

     * Provide meaningful `alt` text.
   * **Keyboard Navigation**:

     * All interactive elements must be operable via keyboard.
   * **Mobile-First Responsive Design**:

     * Default styles for small screens, with enhancements at larger breakpoints.

3. **Tech & Tooling**

   * **TypeScript** + React (Create React App, Vite, or Next.js).
   * **Styling:** No Tailwind/Bootstrap; use Vanilla Extract (camelCase CSS) or CSS modules.
   * AI tools (Copilot/ChatGPT) are encouraged for boilerplate or logic.

4. **Project Setup & Run**

   * Provide a **README** with install (`npm install` / `yarn install`) and start (`npm start` / `yarn dev`) instructions.
   * App must spin up locally with one command after install.

5. **Deliverable**

   * We’ll share a GitHub repo link for you to **fork** (includes `products.json`).
   * Commit & push to your fork. Local run only—no deployment needed.

---

## Evaluation Criteria

| Area                    | What We’ll Look For                                               |
| ----------------------- | ----------------------------------------------------------------- |
| **Functionality**       | Pagination; sorting; keyboard & ARIA labels.                      |
| **Accessibility (ADA)** | Semantic HTML; `alt` text; keyboard operability; ARIA attributes. |
| **Responsiveness**      | Mobile-first approach; smooth layout across breakpoints.          |
| **TypeScript Usage**    | Proper types/interfaces; no `any` hacks; clean TS idioms.         |
| **Code Quality**        | Clean, modular, readable.                                         |
| **Project Setup**       | One-step install & run; clear README.                             |
| **Use of AI**           | Judicious AI use to accelerate—not obscure your understanding.    |
| **UX & Styling**        | Basic, consistent styling (doesn’t need to be fancy).             |

---

> **Next steps (pairing session):**
>
> 1. **Enhance the UI** (filters, modals, polish)
> 2. **Deepen Accessibility** (focus management, landmarks, ARIA patterns)
> 3. **Refactor for Scale** (state management, real data fetching)

Feel free to review `products.json` and let us know if you have any questions before you start!
