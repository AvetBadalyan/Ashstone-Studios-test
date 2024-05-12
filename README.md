# Ashstone Studios - Middle Front-End Developer Test Task (Front-End React)

## Description

This test task involves creating a React application to display a list of posts, implement search functionality, and show detailed information about a selected post in a popup.

## Design

For the design, use the design mockups available in Figma [here](https://www.figma.com/file/5dPAPZRin0lfmgrmvVkg8R/frontend-trial?node-id=0%3A2).

### Menu

- **Horizontal Menu:** Sticks to the top of the screen when scrolling down. After scrolling down 200px further, the menu smoothly slides up beyond the screen. When scrolling back up, the menu smoothly slides back into view. When scrolling to the top of the page, the menu returns to its original position. The position and behavior of the sticky menu should remain correct even when the height of the header, where the logo is located, changes.
- **Mobile Menu:** Displayed on the left side of the screen according to the design mockup. It should not be displayed on desktops.

### Submenu

Show submenu on hover over a menu item.

## Fonts

Use Google Fonts to ensure a consistent and visually appealing typography across the application. Specify font sizes in `rem` for scalability and flexibility.

## Sizes

Use `rem` for margins to maintain consistency and adaptability across different screen sizes and resolutions. Use `px` for gaps between columns with posts to ensure precise control over layout spacing.

## Retina

All images should support Retina displays and include the `srcset` attribute for better display quality on high-resolution screens. The JSON file contains paths to two images for each post, allowing for smooth rendering on Retina displays.

## Posts

Use flexbox to create a responsive three-column grid layout for displaying posts. On tablets, adjust the layout to display two columns, while on mobile devices, display a single column layout for optimal viewing experience.

Ensure a consistent gap of `3rem` between posts and the horizontal menu for aesthetic spacing and visual hierarchy.

# React

## Task

The task is to create a list of posts, implement search functionality, and display detailed information about a selected post in a popup.

### Step 1: Fetching Data

Retrieve data using `fetch()` or any other library (such as Axios) from the provided endpoint.

<aside>
💡 https://cloud.codesupply.co/endpoint/react/data.json

</aside>

### Step 2: Displaying the List of Posts

Create a component that displays the list of posts as cards, utilizing the data retrieved in Step 1. Each card should contain a title, a brief description of the post, an image, and meta information including author, date, and number of views.

### Step 3: Searching Posts

Implement search functionality to filter posts based on user input in the search field. Display only those posts whose titles or descriptions contain the entered text, providing users with a seamless browsing experience.

### Step 4: Full Post Information

When clicking on a post card, a popup should appear with detailed information about the post, including the title, description, image, and meta information. Users should be able to close the popup by clicking the "Close" button or by clicking outside the popup, ensuring intuitive navigation.

### Technical Details:

- Write code using functional components and hooks (React Hooks) for improved code readability and maintainability.
- Utilize the `useState` hook to manage component state, ensuring efficient state management and updates.
- Implement the `useEffect` hook for handling state updates and optimizing component performance, ensuring smooth interaction and responsiveness.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
