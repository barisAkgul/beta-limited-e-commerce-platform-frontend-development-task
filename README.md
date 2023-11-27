# BetaLimited E-Commerce Platform Frontend Development Task 🚀

This project encompasses a shopping cart application with search functionality and the ability to add and remove items from the cart. The application is developed using technologies such as Material UI, Zustand, React, and Axios, providing a clean, responsive, and reusable structure.

## Features 🚦

The fundamental operation of the application consists of the following steps:

 - Session ID Request:

  Initially, the user's session ID is obtained. This is used to grant access to the user's cart from previous visits.
  If there is an existing session ID, the application proceeds with it. Otherwise, a new session ID is generated.


 - Product Addition and Removal Operations:

  User requests to add or remove items from the cart are performed using post operations over this session ID.
  These operations are carried out through HTTP requests supported by the Axios library.


 - State Management with Zustand:

  Session ID and shopping cart transactions are managed using Zustand state management. This method was used to facilitate ease of use and in-application data        sharing.

 - Search Feature:

  The search feature is implemented using the query parameter. When the user enters a search query, this query is taken as a parameter.
  In order to make the searched product easily shareable, query was used instead of state.



  ## Technologies Used 🛠

- React
- Zustand
- MaterialUI
- Axios


