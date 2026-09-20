# ServiFind

ServiFind is a responsive local service finder built for Nigeria.

The platform helps users find service providers, view their locations, compare prices, check ratings, contact providers, save favourites, and make bookings.

## Project Type

Frontend web application

Built with:

* HTML5
* CSS3
* JavaScript
* Browser Local Storage
* Browser Geolocation API
* Google Maps links

## Project Structure

```text
ServiFind/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Features

### 1. Welcome Page

The homepage introduces ServiFind and helps users start searching for local services.

Users can:

* Search for a service
* Select a Nigerian state
* Detect their current location
* Open the providers section

### 2. Dark Mode and Light Mode

Users can switch between:

* Light mode
* Dark mode

The selected theme is saved in the browser using Local Storage.

### 3. Location Detection

ServiFind uses the browser Geolocation API to request the user's current location.

The location section displays:

* Latitude
* Longitude
* Location detection status

Users can also use their detected location to open Google Maps.

### 4. Nigeria Location Structure

Provider information follows a Nigerian location structure:

```text
Country
   ↓
State
   ↓
City
   ↓
Area
```

Example:

```text
Nigeria
   ↓
Lagos
   ↓
Ikeja
   ↓
Allen Avenue
```

Each provider contains state, city and area information.

### 5. Service Search

Users can search for services such as:

```text
Plumber
Electrician
Cleaner
Mechanic
Carpenter
Painter
AC Technician
Phone Repair
Caterer
IT Support
Barber
Photographer
```

Search also checks:

* Provider name
* Service type
* Category
* City
* Area
* State

### 6. Provider Cards

Each provider card displays:

* Provider name
* Service
* State
* City
* Area
* Verification status
* Rating
* Number of reviews
* Starting price
* Distance
* Service tags

Provider actions include:

* Book
* Message
* Review
* Call
* WhatsApp
* Map
* Favourite

### 7. Favourite Panel

Users can save providers to their favourites.

The favourite system supports:

* Add provider
* Remove provider
* View saved providers
* Open provider booking from favourites

Favourites are stored using Local Storage.

### 8. Login System

The frontend includes a login and account creation interface.

Users can enter:

* Email
* Phone number
* Password

The current frontend stores the basic account information locally.

This system is a prototype.

For production, connect ServiFind to a real authentication service.

### 9. Booking System

Users can book providers by entering:

* Service date
* Preferred time
* Address
* Service details

Bookings appear in the provider dashboard.

Each booking contains:

```text
Provider
Date
Time
Address
Service details
Price
Status
```

The default booking status is:

```text
Pending
```

### 10. Price Filter

Users can filter providers by starting price.

Available filters include:

```text
Any price
Under ₦10,000
Under ₦25,000
Under ₦50,000
```

### 11. Rating Filter

Users can filter providers using their ratings.

Available options include:

```text
Any rating
4.0+
4.5+
4.8+
```

### 12. Distance Filter

Users can filter providers by distance.

Available options include:

```text
Any distance
Under 5 km
Under 10 km
Under 25 km
```

### 13. Distance Display

Provider cards display an estimated distance.

Example:

```text
📍 2.4 km
```

The current provider distances are sample values for the frontend prototype.

A production version should calculate distances using real coordinates.

### 14. Maps

ServiFind includes Google Maps links.

Users can open:

* Their current location
* A provider's location

Provider map links use their:

```text
Area
City
State
Nigeria
```

Example:

```text
Allen Avenue, Ikeja, Lagos, Nigeria
```

### 15. Mini Map

The homepage includes a mini map preview.

The main map section provides a larger map-style interface.

The current map is a frontend visual representation.

A production implementation should connect Google Maps or Mapbox.

### 16. Messaging

Users can message providers through the messaging interface.

The frontend supports:

* Opening a provider chat
* Sending messages
* Viewing sent messages

Messages are stored locally.

A real application should use a backend and real-time database.

### 17. Calling

Provider cards contain call buttons.

Example:

```text
☎ Call
```

The button opens the device phone application using a `tel:` link.

### 18. WhatsApp

Provider cards include WhatsApp buttons.

The button opens a WhatsApp conversation using the provider's phone number.

### 19. Social Buttons

The footer contains links for:

* Instagram
* X
* WhatsApp
* Phone

Replace the placeholder links with ServiFind's official accounts before deployment.

### 20. Ratings and Reviews

Users can submit:

* Star rating
* Written review

The current frontend displays a review submission interface.

A production version should store reviews in a database and update provider ratings automatically.

### 21. Emergency Services

ServiFind includes quick access to emergency services.

Current shortcuts include:

```text
112
Emergency

199
Police

767
Ambulance

199
Fire Service
```

Emergency numbers should be verified against current official Nigerian emergency information before production deployment.

### 22. Provider Dashboard

The provider dashboard displays:

* Number of bookings
* Number of messages
* Average rating
* Estimated revenue
* Recent bookings

The current dashboard uses frontend data stored in Local Storage.

### 23. Responsive Design

ServiFind is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

The interface uses responsive CSS media queries to adapt the layout to smaller screens.

## Running the Project

### Option 1: VS Code Live Server

1. Open the ServiFind folder in VS Code.
2. Install the `Live Server` extension.
3. Open `index.html`.
4. Right-click inside the HTML file.
5. Select `Open with Live Server`.

The browser should open the ServiFind website.

### Option 2: Open Directly

You can also open:

```text
index.html
```

directly in a browser.

Some browser features, especially location services, work more reliably when the project runs through a local server.

## How the Files Work

### index.html

Contains the structure of the website.

It includes:

* Navigation
* Hero section
* Search
* Service categories
* Provider section
* Maps
* Emergency section
* Dashboard
* Login modal
* Booking modal
* Messaging modal
* Review modal
* Favourite panel
* Footer

### style.css

Controls the visual design.

It contains:

* Colors
* Typography
* Buttons
* Cards
* Navigation
* Maps
* Modals
* Responsive layouts
* Dark mode
* Mobile layouts

### script.js

Controls the website functionality.

It handles:

* Provider data
* Searching
* Filtering
* Favourites
* Login
* Bookings
* Messaging
* Reviews
* Location detection
* Google Maps
* Dark mode
* Dashboard statistics
* Local Storage

## Current Data

The provider list in `script.js` contains sample providers.

Example:

```javascript
{
    id: 1,
    name: "Ade Plumbing Services",
    service: "Plumber",
    state: "Lagos",
    city: "Ikeja",
    area: "Allen Avenue",
    price: 8500,
    distance: 2.4,
    rating: 4.9
}
```

Replace the sample providers with real verified providers before launch.

## Local Storage

ServiFind currently uses browser Local Storage for:

```text
servifindFavourites
servifindBookings
servifindMessages
servifindUser
servifindTheme
```

This means data is stored in the user's browser.

Clearing browser data can remove the stored information.

## Production Upgrades

For a real ServiFind platform, replace the frontend demo systems with backend services.

### Authentication

Recommended options:

```text
Firebase Authentication
Supabase Auth
Custom Node.js authentication
```

### Database

Recommended options:

```text
Supabase PostgreSQL
Firebase Firestore
MySQL
PostgreSQL
MongoDB
```

### Real-Time Messaging

Recommended options:

```text
Supabase Realtime
Firebase
WebSockets
Socket.IO
```

### Maps

Recommended options:

```text
Google Maps Platform
Mapbox
OpenStreetMap
```

### Payments

Recommended Nigerian payment options:

```text
Paystack
Flutterwave
```

International payment support can be added through services such as Stripe where appropriate.

### Notifications

Possible notification systems:

```text
Email
SMS
WhatsApp Business API
Push notifications
```

## Recommended Production Architecture

A future ServiFind version can use:

```text
Frontend
   ↓
HTML / CSS / JavaScript
   ↓
API
   ↓
Backend
   ↓
Database
```

A larger application can use:

```text
Frontend
React / Next.js

Backend
Node.js / Express

Database
PostgreSQL

Authentication
Supabase / Firebase

Maps
Google Maps / Mapbox

Payments
Paystack / Flutterwave

Messaging
WebSockets / Supabase Realtime
```

## Security

Before deployment, add:

* Secure authentication
* Password hashing
* Server-side validation
* Input sanitization
* Rate limiting
* HTTPS
* Database access rules
* Provider verification
* Admin moderation
* Secure payment processing

Never store real user passwords inside browser Local Storage.

## Provider Verification

A production ServiFind platform should verify providers before listing them.

Recommended provider fields include:

```text
Full name
Business name
Phone number
Email
Service category
State
City
Area
Address
Business description
Price range
Working hours
Verification status
Profile image
Social accounts
Reviews
Coordinates
```

## Future Features

Possible future ServiFind features include:

```text
Real user accounts
Provider registration
Provider verification
Admin dashboard
Live maps
Real distance calculations
Live chat
Push notifications
Booking confirmations
Provider availability
Online payments
Saved addresses
Service categories
Provider portfolios
Provider analytics
Dispute reporting
Customer support
Referral system
Promo codes
Subscription plans
```

## Development Goal

ServiFind is designed to become a Nigerian local-service marketplace where users can quickly:

```text
Search
   ↓
Compare
   ↓
View distance
   ↓
Check ratings
   ↓
Contact provider
   ↓
Book service
   ↓
Review provider
```

The current project provides the frontend foundation for this system.

## Author

ServiFind

© 2026 ServiFind
