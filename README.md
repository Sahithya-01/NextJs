

#### Node Version
- Minimum Node.js version updated from 16.14 to 18.17 since 16.x is now out-of-support.

#### Create Next App
- Use the command `npx create-next-app@latest appName` to create a new Next.js application.

#### Folder Structure
- **app folder**: Main working area, handling routes, layouts, and loading states.
- **node_modules**: Contains project dependencies.
- **public**: For static assets.
- **.gitignore**: Specifies files ignored by source control.
- **package.json**: Look at scripts, use `npm run dev` to start the project.

#### Home Page
- `page.tsx` in the root of the app folder represents the root of the application.
- It's a React component acting as the main page.

#### Creating Pages in Next.js
- Create folders and `page.js` files inside the app folder for new pages (e.g., `about/page.js` or `contact/page.js`).

#### Link Component
- Use the Link component to navigate around the project.

#### Nested Routes
- Create nested routes like `app/info/contact/page.tsx`. Missing `page.tsx` will result in a 404 error.

#### CSS and Tailwind
- Use vanilla CSS in `globals.css` and consider using TailwindCSS.

#### Layouts and Templates
- `layout.tsx`: Wraps other pages and layouts to share UI. Does not re-render when the route changes.
- Templates are similar but do re-render.

#### Challenge - Navbar
- Create a `Navbar.tsx` component and render it in `layout.tsx`.

#### Fonts - Google Fonts
- Automatically self-host Google Fonts. They're included in your deployment and served from the same domain.

#### Metadata
- Define your application metadata using Next.js's Metadata API for better SEO and shareability.

#### Server Components vs. Client Components
- **Server Components**: Default in Next.js, great for data fetching, security, caching, and reducing bundle size.
- **Client Components**: Useful for interactivity, state management, and using browser APIs.

#### Fetch Data in Server Components
- Use async functions to fetch data in server components.

#### Loading Component
- Use `loading.js` to show a loading UI with React Suspense while content loads.

#### Error Component
- Use `error.tsx` to handle unexpected runtime errors in nested routes.

#### Nested Layouts
- Create nested layouts within specific route segments using `layout.tsx`.

#### Dynamic Routes
- Create dynamic routes like `app/tours/[id]/page.tsx` to handle parameterized paths.

#### Setup Links
- Use the Link component to set up navigation links in dynamic routes.

#### Next Image Component
- The Next.js Image component optimizes images for size, stability, and faster page loads. It supports both local and remote images.

#### Responsive Images
- Use the `fill` prop for responsive images and the `sizes` property to improve performance based on the user's device and screen size.