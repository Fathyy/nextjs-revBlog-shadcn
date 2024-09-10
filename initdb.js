const sql = require('better-sqlite3')
const db = sql('blogs.db');

const dummyBlogs = [
  {
    title: 'Introduction to React',
    slug: 'introduction-to-react',
    image: '/images/burger.jpg',
    summary: 'A beginner\'s guide to getting started with React.',
    content: `
      React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is maintained by a community of developers.
      
      ## Getting Started
      To get started with React, you need to have Node.js installed on your computer. Then, you can create a new React project using Create React App.

      \`\`\`sh
      npx create-react-app my-app
      cd my-app
      npm start
      \`\`\`

      This will start a development server and open your new React app in your default browser.

      ## JSX
      React uses JSX, a syntax extension that looks similar to HTML. JSX allows you to write HTML elements in JavaScript and place them in the DOM.

      \`\`\`jsx
      const element = <h1>Hello, world!</h1>;
      \`\`\`

      ## Components
      Components are the building blocks of a React application. They can be either class components or functional components.

      \`\`\`jsx
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      \`\`\`

      ## Conclusion
      React is a powerful tool for building dynamic and interactive user interfaces. With a strong community and a wealth of resources, it's a great choice for any web developer.
    `,
    author: 'John Doe',
    author_email: 'johndoe@example.com',
  },
  {
    title: 'Next.js for Beginners',
    slug: 'nextjs-for-beginners',
    image: '/images/curry.jpg',
    summary: 'An introduction to Next.js, a React framework for production.',
    content: `
      Next.js is a React framework that enables server-side rendering and static site generation for React applications. It is built on top of Node.js and provides a lot of features out of the box.

      ## Setting Up
      To create a new Next.js project, you can use the following command:

      \`\`\`sh
      npx create-next-app my-next-app
      cd my-next-app
      npm run dev
      \`\`\`

      This will start the Next.js development server and open your new app in the browser.

      ## Pages
      Next.js uses a file-based routing system. Each file in the \`pages\` directory represents a route in your application.

      \`\`\`jsx
      // pages/index.js
      export default function Home() {
        return <h1>Welcome to Next.js!</h1>;
      }
      \`\`\`

      ## API Routes
      Next.js allows you to create API routes that run on the server. These routes are defined in the \`pages/api\` directory.

      \`\`\`jsx
      // pages/api/hello.js
      export default function handler(req, res) {
        res.status(200).json({ message: 'Hello, world!' });
      }
      \`\`\`

      ## Conclusion
      Next.js is a powerful framework that makes it easy to build fast and scalable React applications. With built-in features like server-side rendering and static site generation, it's a great choice for building production-ready applications.
    `,
    author: 'Jane Smith',
    author_email: 'janesmith@example.com',
  },
  {
    title: 'Understanding JavaScript Closures',
    slug: 'understanding-javascript-closures',
    image: '/images/dumplings.jpg',
    summary: 'A brief overview of closures in JavaScript and their usage.',
    content: `
      JavaScript closures are a fundamental concept that allows a function to access variables from an enclosing scope.

      ## Example
      \`\`\`js
      function outerFunction() {
        let outerVariable = 'I am outside!';

        function innerFunction() {
          console.log(outerVariable);
        }

        return innerFunction;
      }

      const myFunction = outerFunction();
      myFunction(); // Output: I am outside!
      \`\`\`

      Closures are powerful for maintaining state and creating function factories.
    `,
    author: 'Alice Johnson',
    author_email: 'alicejohnson@example.com',
  },
  {
    title: 'CSS Grid Layout',
    slug: 'css-grid-layout',
    image: '/images/macncheese.jpg',
    summary: 'A quick guide to using CSS Grid Layout.',
    content: `
      CSS Grid Layout is a two-dimensional layout system for the web.

      ## Basic Example
      \`\`\`css
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }

      .item {
        background-color: lightblue;
        padding: 20px;
        text-align: center;
      }
      \`\`\`

      Grid layout makes it easy to create complex layouts with simple CSS rules.
    `,
    author: 'Michael Brown',
    author_email: 'michaelbrown@example.com',
  },
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    author_email TEXT NOT NULL
  )
`).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO blogs VALUES (
      null,
      @slug,
      @title,
      @image,
      @summary,
      @content,
      @author,
      @author_email
    )
  `);

  for (const blog of dummyBlogs) {
    stmt.run(blog);
  }
}

initData();
