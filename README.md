## Take-Home Assignment: “Category Page” React App

**Timebox:** No more than **2 hours**
**Goal:** Build a simple React app that displays a category page of products, with **pagination** and **sorting**, using any tooling you like. You may use AI-driven code assistance (e.g. GitHub Copilot, ChatGPT) to speed things up.

### 📋 Requirements

1. **Data**

   * Use a hard-coded JSON array (in code) of at least 20 products.
   * Each product should have:

     * `id` (string or number)
     * `name` (string)
     * `price` (number)
     * `imageUrl` (string – can be placeholder)

2. **UI**

   * A **Category** page that:

     * Lists products in a grid or list.
     * Shows product `name`, `price`, and `image`.
   * **Pagination**:

     * Show 5 items per page.
     * “Previous” and “Next” buttons (disabled at ends).
   * **Sorting**:

     * A control (dropdown or buttons) to sort by `price` (asc/desc) and `name` (A→Z/Z→A).

3. **Tech & Tooling**

   * Use **React** (Create React App, Vite, Next.js, etc.).
   * Styling: Do not use Tailwind, Bootstrap, or similar. Instead, use Vanilla Extract (i.e., camelCase vanilla CSS) or plain CSS modules.
   * You’re encouraged to leverage AI-powered tools (Copilot, ChatGPT) for boilerplate or logic.

4. **Project Setup & Run**

   * Include a **README** with:

     * How to install (`npm install` / `yarn install`)
     * How to start (`npm start` / `yarn dev`)
   * The app should spin up locally with **one** command after install.

5. **Deliverable**

   * We will provide a GitHub repository link for you to **fork**.
   * Commit and push your solution to your fork.
   * No need to deploy—local run is fine.

---

## Evaluation Criteria

| Area              | What We’ll Look For                                   |
| ----------------- | ----------------------------------------------------- |
| **Functionality** | Pagination works; sorting toggles order correctly.    |
| **Code Quality**  | Clean, modular, easy to read.                         |
| **Project Setup** | One-step install & run; clear README.                 |
| **Use of AI**     | Judicious use of AI to accelerate—not to obscure.     |
| **UX & Styling**  | Basic, consistent styling (doesn’t need to be fancy). |

---

> **Next steps:**
> In the follow-up pairing session, we’ll expand this app—e.g. fetching real data, adding filtering, or refactoring to a more complex architecture together.
