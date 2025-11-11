# Company Logos

This folder should contain the company logos for the experience section.

## Required Logos:

1. **envnt.svg** or **envnt.png** - ENVNT company logo
2. **ielearn.png** - IE-Learn company logo (you may already have this in projects folder)
3. **blueline.svg** or **blueline.png** - Blueline Trading company logo

## How to use:

Once you add the logos to this folder, update the `src/constants/index.js` file to import and use them:

```javascript
// Import company logos
import envnt from "../assets/company/envnt.svg";
import ielearn from "../assets/company/ielearn.png";
import blueline from "../assets/company/blueline.svg";

// Then update the experiences array to use these logos:
const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "ENVNT",
    icon: envnt, // Replace 'web' with 'envnt'
    // ... rest of config
  },
  // ... other experiences
];
```

## Note:

Currently, the experiences are using placeholder icons (`web` icon). Replace them with actual company logos for a more professional look.
