 // src/App.jsx
import React from 'react';
import Header from './header';
import Section from './section';
import Article from './articlerticle';
import Sidebar from './slidebaridebar';
import Footer from './footer';
import './styles.css';
import './styles.css';

// Dynamic content using JavaScript variables
const appTitle = 'JSX and Props Showcase';
const section1Content = 'This is the content of section 1.';
const article1Title = 'Article 1';
const article1Text = 'Content of Article 1.';
const sidebarContent = 'Sidebar content goes here.';
const section2Content = 'This is the content of section 2.';
const footerText = 'Copyright © 2024 JSX Props App';

function App() {
  return (
    <div>
      <Header title={appTitle} />
      <Section heading="Section 1" content={section1Content} />
      <Article title={article1Title} text={article1Text} />
      <Sidebar content={sidebarContent} />
      <Section heading="Section 2" content={section2Content} />
      <Footer text={footerText} />
    </div>
  );
}

export default App;