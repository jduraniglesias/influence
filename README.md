# Instagram Analytics Dashboard

A clean, scalable React application for tracking Instagram analytics and growth metrics.

## 📁 Project Structure

```
instagram-dashboard-clean/
├── index.html              # Entry HTML file
├── package.json            # Project dependencies
├── vite.config.js         # Vite configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component
│   ├── components/        # Reusable components
│   │   ├── Header.jsx     # Profile header
│   │   ├── PostCard.jsx   # Individual post display
│   │   └── StatCard.jsx   # Analytics stat card
│   ├── data/              # Data management
│   │   └── mockData.js    # Mock Instagram API data
│   ├── styles/            # CSS files
│   │   ├── index.css      # Global styles
│   │   ├── App.css        # Main layout styles
│   │   ├── Header.css     # Header component styles
│   │   ├── PostCard.css   # Post card styles
│   │   └── StatCard.css   # Stat card styles
│   └── utils/             # Helper functions
│       └── formatters.js  # Formatting utilities
└── public/                # Static assets
```

## 🚀 Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd instagram-dashboard-clean
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Vite will show you the local URL (usually http://localhost:5173)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📊 Connecting Real Instagram API

When ready to connect real data:

1. **Update `src/data/mockData.js`:**
   - Replace export statements with API fetch functions
   - Example:
   ```javascript
   export const fetchProfileData = async (accessToken) => {
     const response = await fetch(`https://graph.facebook.com/v21.0/me?fields=...&access_token=${accessToken}`);
     return await response.json();
   };
   ```

2. **Update components to use async data:**
   - Use React hooks (useState, useEffect) in App.jsx
   - Handle loading states
   - Add error handling

3. **Environment variables:**
   - Create `.env` file for sensitive data
   - Store API keys and tokens securely
   - Never commit `.env` to version control

## 🎯 Best Practices Implemented

- **Component Separation**: Each component in its own file
- **Utility Functions**: Reusable logic extracted to utils
- **Data Layer**: Clear separation between data and UI
- **CSS Modules**: Each component has dedicated styles
- **JSDoc Comments**: Functions documented for clarity
- **Consistent Naming**: Clear, descriptive variable names
- **DRY Principle**: No repeated code, everything reusable

## 🔜 Next Steps for Scaling

1. Add API service layer (`src/services/instagram.js`)
2. Implement state management (Context API or Redux)
3. Add authentication flow
4. Create environment configs
5. Add error boundaries
6. Implement loading states
7. Add data caching
8. Write unit tests

## 📝 Notes

- Currently using mock data for development
- Design matches original single-file version
- Ready to scale with real API integration
- All calculations happen in utility functions for easy testing
