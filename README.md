# Project Name: Finance Management Dashboard

Some Overview and Introduction of this Project ( Using AI tool )

## Introduction of this Project

FinFlow a platform that connects to multiple Bank Accounts, display transactions in real-time & even allows you to transfer money to other platform users with an ultra Secure SSR authentication. A homepage showcasing your balance connected credit cards, transaction list & spending categories, a page list where you can see all connected Banks and the transaction lists with filtering & a Payment Transfer Page where you can transfer to real Bank Accounts & even other accounts on this platform.

All of this using Next.js server side rendering, group routes, nested layouts, service actions and more. Advanced & Reusable Form Management using TypeScript,
React hook form in ZOD played for payment & it'll work anywhere.

Charts, shaten and Tailwind CSS for a Modern and Completly Responsive UI and Sentry Monitoring Software that analysis performance and Makes Bank more Secure.

## Setup

1. We had created a folder named as ``jsm_banking`` and opened in VS code Editor

2. To initialize this app, I used ``shadcn/cn``. Install and configure Next JS, click on this link [shadcn/cn](https://ui.shadcn.com/docs/installation/next) and Before using next commnad make sure that ``npm`` is install on device, now **Create project** using this command on your terminal ``npx create-next-app@latest my-app --typescript --tailwind --eslint`` to install in your current directory use ``./``  in-place of ``my-app`` in upper command like this ``npx create-next-app@latest ./ --typescript --tailwind --eslint``

3. **Run the CLI:** Run the ``shadcn-ui``init cmd to setup project ``npx shadcn-ui@latest init``

4. **Set-up Fonts:** In shadcn/ui, it creates a new folder & adds the code only for the components that actually want to use within application, which is not the case for many other UI kits example like Material UI or Boot-strap, there er have install whole library. Run this command in terminal at project directory ``npx shadcn-ui@latest add button``.

Folder Structure

```
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```
5. Delete file from ``app`` folder ``favicon.ico and globals.css``, ``lib``, ``public``, ``tailwind.config.ts`` folder as we create from stratch

## File and Folder Structure

## Home Page UI

## Slide bars

## Auth Page UI

## App Write Authentication

## Securing the App with Sentry

## Plaid Banking Functionality

## Dwolla Enviroment 

## Display Real Banking Data

## Recent Transaction

## Connect Multiple Bank Accounts

## Transaction History Page

## My Bank Page

## Transfer Payment Page

## Display Real-time Transaction

## Pagination and Spending categories

## Deployment and Fixing Production Errors