# [Newspaper FullStack Website](https://news-forge-hub.web.app/)

## [https://news-forge-hub.web.app/](https://news-forge-hub.web.app/)

This project is a full-stack newspaper website built using React, Firebase, React Router, Node.js, Express, MongoDB, and more. It includes various functionalities for users and an admin dashboard.

## Features

### For Users

#### Home Page

- Navbar with links to different sections.
- Trending Articles (Slider).
- All Publisher section displaying publishers added by admin.
- Statistics page showing user counts using `react-countup`.
- Plans section displaying features for free and premium users.

#### Add Article Page

- Form to input article information such as title, image, publisher, tags, description, and submit button.
- Implementation with `react-select` for multi-select tags.
- Dropdown for selecting publishers.

#### All Articles Page

- Infinite scrolling system displaying approved articles.
- Filtering by publisher and tags.
- Search functionality for articles.
- Article cards with title, image, publisher, description, and details button.
- Different designs for premium articles.
- Premium articles accessible only to subscribed users.

#### Article Details Page

- Displays detailed information about an article.
- Increases view count on each visit.

#### Subscription Page

- Attractive banner.
- Dropdown for subscription period selection.
- Button to take a subscription leading to the payment page.

#### Premium Articles Page

- Displays premium articles.

#### My Profile Page

- Allows users to view and update their information.

#### My Articles Page

- Displays the current user's articles in a tabular format.
- Status indicators for article approval.

### For Admin

#### Dashboard Page

- Sidebar with routes to manage users, articles, and publishers.
- Dynamic pie chart and static charts using `react-google-charts`.

#### All Users Page

- Displays all users with actions button.

#### All Articles Page

- Displays all articles with options to approve, decline, delete, and make premium.

#### Add Publisher Page

- Form to add publishers to the website.

#### Publisher Page

- Show publishers page and admin actions on publisher.

### Authentication

- Email and password-based authentication.
- Additional login method e.g. Google
- 404 (not found) page.

### Other Features

- Responsive design for homepage (mobile and desktop).
- Pagination on admin dashboard pages.
- Implementation of Private Routes with JWT authentication.
- Homepage modal for subscription promotion.
- Proper use of website titles and favicons.
