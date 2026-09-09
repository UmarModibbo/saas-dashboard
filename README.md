# SaaS Dashboard

A modern, responsive SaaS-style dashboard built with React, featuring interactive charts, data tables, filters, search functionality, and dark/light mode support.

## Features

✨ **Responsive Design**
- Mobile-first approach
- Collapsible sidebar
- Adaptive layouts

📊 **Charts & Analytics**
- Line charts for trends
- Pie charts for distribution
- Interactive data visualization

📋 **Data Management**
- Sortable tables
- Advanced filtering
- Real-time search

🌙 **Theme Support**
- Dark mode
- Light mode
- Smooth transitions

🎨 **Reusable Components**
- StatCard
- Card
- Table
- Filter
- SearchBar

## Tech Stack

- **React** - UI framework
- **Recharts** - Data visualization
- **React Icons** - Icon library
- **CSS3** - Styling with variables

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js
│   ├── Header.js
│   ├── SearchBar.js
│   ├── Card.js
│   ├── StatCard.js
│   ├── Table.js
│   ├── Filter.js
│   ├── ChartComponent.js
│   └── [component styles]
├── pages/
│   ├── Dashboard.js
│   └── Dashboard.css
├── App.js
└── index.js
```

## Key Components

### StatCard
Displays key metrics with trend indicators.

### Table
Reusable table component with sorting support.

### Filter
Dropdown filter component for data filtering.

### ChartComponent
Flexible chart component supporting multiple chart types.

## Dark Mode

Toggle dark mode using the theme button in the header. Theme preference is applied globally.

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Future Enhancements

- [ ] API integration
- [ ] User authentication
- [ ] Data persistence
- [ ] More chart types
- [ ] Export functionality
- [ ] Real-time notifications

## License

MIT License - feel free to use this project for any purpose.
