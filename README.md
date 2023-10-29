# LiquidLab

LiquidLab is a Single-Page Application (SPA) designed to introduce users to a delightful collection of cocktail recipes. This project is built using React and leverages React Router for seamless navigation within the application. It also integrates with TheCocktailDB API to fetch and display a wide array of cocktail recipes.

## Project Link

[Contentful React Project](https://contentful-oxmj.onrender.com)

## Technologies and Libraries

- **React Router**: Used for handling routing and navigation within the application. [React Router Docs](https://reactrouter.com/en/main)

- **Styled Components**: Implemented for styling the UI components in a CSS-in-JS manner. [Styled Components Docs](https://styled-components.com/)

- **TanStack Query**: Integrated for managing API data fetching and caching. [TanStack Query](https://tanstack.com/query/latest/)

- **React Toastify**: Utilized for displaying notifications. [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

## Project Structure

The project's architecture is organized in a structured manner:

- The `src/pages` directory contains components representing different pages of the application, including `Landing`, `About`, `Cocktail`, `Newsletter`, and more.

- The `src/components` directory hosts reusable components like `Navbar`, `SearchForm`, `CocktailList`, `CocktailCard`, etc., used across multiple pages.

- The `assets` folder holds wrappers for pages, images, and other static assets.

## Functionality

LiquidLab provides the following features:

- **Single-Page Application**: Loads initial resources and dynamically updates content based on user interaction without full page reloads.

- **Navigation**: Seamless client-side navigation enabled through React Router.

- **Cocktail Database Integration**: Utilizes TheCocktailDB API for fetching and displaying cocktail recipes.

- **Newsletter Subscription**: Allows users to submit their details for the newsletter.

- **Search**: Enables users to search for specific cocktails.

## Usage

Upon running the application, you will be directed to the home page displaying a collection of cocktail recipes. You can navigate to various sections using the provided links in the Navbar. Explore different cocktails, view their details, and subscribe to the newsletter to stay updated with the latest mixology news.

## Additional Notes

This README provides a comprehensive overview of the LiquidLab project structure, functionalities, and technologies utilized. For in-depth technical details, code snippets, and specific implementation aspects, please refer to the project files and comments within the source code.