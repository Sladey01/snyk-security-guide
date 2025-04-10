const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/guide', (req, res) => {
  const language = req.query.language || '';
  const framework = req.query.framework || '';
  
  const guide = getSnykGuide(language, framework);
  res.render('guide', { language, framework, guide });
});

// API endpoint to get languages and frameworks
app.get('/api/languages', (req, res) => {
  const guides = require('./data/guides');
  const languages = {};
  
  Object.keys(guides).forEach(lang => {
    languages[lang] = {
      name: capitalizeFirstLetter(lang),
      frameworks: guides[lang].frameworks ? Object.keys(guides[lang].frameworks).map(fw => ({
        id: fw,
        name: capitalizeFirstLetter(fw)
      })) : []
    };
  });
  
  res.json(languages);
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong! Please try again later.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Function to get Snyk best practices
function getSnykGuide(language, framework) {
  const guides = require('./data/guides');
  
  if (language && framework) {
    return guides[language]?.frameworks?.[framework] || guides[language]?.general || { error: 'Guide not found for the specified language and framework' };
  } else if (language) {
    return guides[language]?.general || { error: 'Guide not found for the specified language' };
  } else {
    return { error: 'Please select a language and/or framework' };
  }
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}