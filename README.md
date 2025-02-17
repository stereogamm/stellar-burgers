# Project "Stellar Burgers" 🍔 🍟

-----

[VIEW THE PROJECT](https://zero-gravity-steakhouse.vercel.app/)

----

 The application offers the following features:

✅ The ability to add, remove, and combine ingredients to create a custom order\
✅ Users can create an account, modify profile data, log in, and log out\
✅ After logging in and creating an order, users can view their orders and order details in the order history section of their profile\
✅ Unauthenticated users have access to the feed of general orders\
✅ Users can change their password or request a password recovery for logging into their profile\
_____

[Mock up](<https://www.figma.com/file/vIywAvqfkOIRWGOkfOnReY/React-Fullstack_-Проектные-задачи-(3-месяца)_external_link?type=design&node-id=0-1&mode=design>) ✏️

----------------
This project uses:

🥤 `React`\
🥤 `React-Redux`\
🥤 `React-router-dom` based on a basic starter kit

During the project, I implemented and configured:

🥤 `Routing` for protected and open routes\
🥤 A `store` for data, with reducers connected\
🥤 `Slices` for easier data handling\
🥤 User `registration` and `authorization`, working with `JWT` and cookies\
🥤 Data exchange between the server/store React and components\
🥤 Modal window functionality

---
#### The main logic for working with data is located in `src/components`. The processed data is passed as props to the `{name}UI` components, which are used for subsequent rendering. This approach separates the business logic layer from the data display layer, simplifying maintenance and code understanding.

---

### Project Structure 🍔 🍟

1  Components are located in the `src/components` folder\
2  Some components, mainly pages, are placed in the `pages` folder\
3  Server requests are located in the `utils/burger-api.ts` folder\
4  Unit tests cover the basic functionality of slice reducers, while e2e tests cover main user scenarios\

## Tests 🍔 🍟

- e2e tests are written using Cypress 
- Unit tests are written using Jest

## Important 🍔 🍟

- For the server requests to work correctly, you need to add the `BURGER_API_URL` variable in the environment. The URL can be found in the `.env.example` file

- The project uses Webpack and has linting configured


