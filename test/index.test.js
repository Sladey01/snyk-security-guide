const assert = require('assert');
const guidesData = require('../data/guides');

describe('Guides Data', function() {
  it('should contain JavaScript guide', function() {
    assert.ok(guidesData.javascript, 'JavaScript guide not found');
    assert.ok(guidesData.javascript.general, 'JavaScript general guide not found');
  });

  it('should contain Python guide', function() {
    assert.ok(guidesData.python, 'Python guide not found');
    assert.ok(guidesData.python.general, 'Python general guide not found');
  });

  it('should contain Java guide', function() {
    assert.ok(guidesData.java, 'Java guide not found');
    assert.ok(guidesData.java.general, 'Java general guide not found');
  });

  it('should have required properties in each guide', function() {
    for (const language in guidesData) {
      if (guidesData[language].general) {
        const guide = guidesData[language].general;
        assert.ok(guide.title, `${language} guide missing title`);
        assert.ok(guide.description, `${language} guide missing description`);
        assert.ok(guide.installation, `${language} guide missing installation`);
        assert.ok(guide.usage, `${language} guide missing usage`);
        assert.ok(guide.cliBasics, `${language} guide missing CLI basics`);
        assert.ok(Array.isArray(guide.bestPractices), `${language} guide best practices should be an array`);
        assert.ok(Array.isArray(guide.commonIssues), `${language} guide common issues should be an array`);
      }
      
      if (guidesData[language].frameworks) {
        for (const framework in guidesData[language].frameworks) {
          const frameworkGuide = guidesData[language].frameworks[framework];
          assert.ok(frameworkGuide.title, `${language}/${framework} guide missing title`);
          assert.ok(frameworkGuide.description, `${language}/${framework} guide missing description`);
          assert.ok(frameworkGuide.installation, `${language}/${framework} guide missing installation`);
          assert.ok(frameworkGuide.usage, `${language}/${framework} guide missing usage`);
          assert.ok(frameworkGuide.cliBasics, `${language}/${framework} guide missing CLI basics`);
          assert.ok(Array.isArray(frameworkGuide.bestPractices), `${language}/${framework} guide best practices should be an array`);
          assert.ok(Array.isArray(frameworkGuide.commonIssues), `${language}/${framework} guide common issues should be an array`);
        }
      }
    }
  });
});
