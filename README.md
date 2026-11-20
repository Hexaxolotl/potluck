This Potluck is a React application that helps guests organize meals for a potluck gathering. It uses Supabase to store and manage meals.

Features

    View saved meals from Supabase.
    Add a meal with a guest name and serving count.
    Keep meal data after refreshing the page.
    Display meals using reusable React components.


Technologies

    React
    Vite
    JavaScript
    Supabase
    Bun

The application uses a Supabase table named meals with these fields:

    id — Unique meal identifier
    name — Name of the dish
    guest — Person bringing the dish
    servings — Number of servings

Testing

Verified locally:

    Meals load from Supabase.
    New meals can be added and remain after refresh.
