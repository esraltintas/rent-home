### RentFlow Project

This project is a RentFlow application built with Next.js, and it's bootstrapped with create-next-app.

## Getting Started

To run the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages`. The page auto-updates as you edit the file.

## Header

The header of the RentFlow application may include the Buena logo. Clicking on the Buena logo is designed to reset the entire renting process and start from scratch.

## Home Card

Before starting the renting process, users encounter the "Home Card." This card provides information about available homes, including details such as:

- Image
- Price
- Description
- Location
- Size
- Room count

## Renting Process

After clicking the "Rent Now" button on the Home Card, users go through the following steps:

- Full Name Step: Collects the user's full name.
- Email Step: Collects the user's email address.
- Phone Step: Collects the user's phone number.
- Salary Step: Collects the user's salary information.
- Summary Step: Displays a summary of collected data and triggers the submission.
