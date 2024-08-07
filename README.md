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
For having a one single layout & managing layoutsv(A layout is specific UI that you can see across multiple pages), like homepages or root pages have one layout and Auth pages have one layout, for achieving this I had use Functionality of ``Next JS``, [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups).

Delete file ``Finance Management Dashboard/jsm_banking/app/page.tsx`` and create folder named ``(root)`` and create two files inside it named as ``page.tsx`` & ``layout.tsx``

Create Folder and file in that structure:
```
└── 📁app
    └── 📁(auth)
        └── layout.tsx
        └── 📁sign-in
            └── page.tsx
        └── 📁sign-up
            └── page.tsx
    └── 📁(root)
        └── layout.tsx
        └── page.tsx
    └── globals.css
    └── layout.tsx
```
Now we will our application through this command ``npm run dev``

## Home Page UI
### Create ``HeaderBox.tsx`` file inside ``jsm_banking/components/HeaderBox.tsx`` and write this code:

HeaderBox.tsx File Code:
```
import React from 'react'

const HeaderBox = ({ type="title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
            {title}
            {type == 'greeting' && (
                <span className='text-bankGradient'>
                    &nbsp;{user}
                </span>
            )}
        
        </h1>
        <p className='header-box-subtext'>
            {subtext}
        </p>
    </div>
  )
}

export default HeaderBox
```
1. Import ``react`` libraries
2. **Defining the components:**
This defines a functional React component named HeaderBox. It takes an argument called props (short for properties), which is an object containing the data that will be used to customize the component's appearance and behavior.
Inside the curly braces ({}), the component's logic will be defined.
3. **Interface:**
This part (commented out in some cases) defines an interface called HeaderBoxProps. An interface is a blueprint that specifies the expected structure and types of the props that the HeaderBox component can receive. This helps with code clarity and type checking during development.

    ``type``: An optional string value that can be used for conditional rendering. Defaults to "title".
    ``title``: A required string value that will be displayed as the main heading.
    ``subtext``: A required string value that will be displayed as a smaller subtitle below the title.
    ``user``: An optional string value that will be displayed if present.

4. **Component Logic:** 
    This section defines what the component will render on the screen using JSX syntax (which looks like HTML but is used for building React components).
        It returns a div element with the class name header-box, which likely contains styles for the overall header box.
        Inside the div, an h1 element is used for the title, with the class name header-box-title.
            The title prop is displayed using curly braces ({}).
            There's a conditional statement using type === 'greeting' to check if the type prop is set to "greeting". If it is, a span element will be rendered inside the h1. This span element has the class name text-bankGradient and displays the user prop with a non-breaking space (&nbsp;) before it. This likely creates a visual distinction for the user name.
        Below the h1, a p element with the class name header-box-subtext is used to display the subtext prop.

5. Exporting Component.

### Create ``TotalBalanceBox.tsx`` file inside ``jsm_banking/components/TotalBalanceBox.tsx`` and write this code:

```

import React from 'react'
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance

}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={ accounts }/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts: {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                <div className='total-balance-amount flex-center gap-2'>
                    {/* To change USD currency to INR currency: jsm_banking/lib/utils.ts , Change formatAmount() func*/}
                    <AnimatedCounter amount={totalCurrentBalance}/>
                    {/* {formatAmount(totalCurrentBalance)} */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
```

### Create ``DoughnutChart.tsx`` file inside ``jsm_banking/components/DoughnutChart.tsx`` and write this code:
```
"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const data = {
        datasets : [
            {
                label: 'Banks',
                data: [2500, 3000, 1100],
                backgroundColor: ['#0747b6', '#02265d8', '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }

  return <Doughnut 
  data={data}
  options={{
    cutout: '60%',
    plugins:{
        legend:{
            display: false
        }
    }
  }}
  />
}

export default DoughnutChart
```

### Create ``AnimatedCounter.tsx`` file inside ``jsm_banking/components/AnimatedCounter.tsx`` and write this code:
Install npm modules ``chartjs`` and ``react-chartjs-2``

```
'use client';
import CountUp from 'react-countup';


const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
        duration={2.45}
        decimals={2}
        decimal='.'
        prefix='$' 
        end={amount} />
    </div>
  )
}

export default AnimatedCounter
```

### Create ``page.tsx`` file inside ``jsm_banking/app/(root)/page.tsx`` and write this code:
```
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIN = {firstName: "Aaditya Pitroda"};

  return (
    // ClassName 'home' propertise mentioned in "app/globals.css"
    <section className='home'>  
      <div className='home-content'>
        <header className='home-header'>

          <HeaderBox 
          type = "greeting"
          title="Welcome"
          user={loggedIN?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1809.20}
          />

        </header>
      </div>
    </section>
  )
}

export default Home
```

## Slide bars
Git Commit Message: "Implemented Complete Layout"

## Auth Page UI
Git Commit Message: ""

To Authenticate ( sign-up & sign-in page ) we are using (React Hook Form)[https://ui.shadcn.com/docs/components/form], Firstly we install it using ``npx shadcn-ui@latest add form`` & ``npx shadcn-ui@latest add form button input
`` command in terminal.


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
