const switchOptions = [
  {
    id: 'lineNumbers',
    title: 'Line Numbers',
    trueValue: true,
    falseValue: false,
    value: true
  },
  {
    id: 'readOnly',
    title: 'Read Only',
    trueValue: false,
    falseValue: true,
    value: true
  }
];
const selectOptions = [
  {
    id: 'tabSize',
    title: 'Tab Size',
    options: ['2', '4', '6', '8'],
    value: 2
  },
  {
    id: 'mode',
    title: 'Language',
    options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
    value: 'javascript'
  },
  {
    id: 'theme',
    title: 'Select themes',
    options: [
      'default',
      'zenburn',
      'solarized',
      'rubyblue',
      'paraiso-dark',
      'midnight',
      'material',
      'hopscotch',
      'twilight'
    ],
    value: 'zenburn'
  }
];

const defaultValues = {
  basic: `const component = {
    name: 'Project',
    author: 'Pedro Mendez',
    website: ''
};`,
  javascript: `const component = {
    name: 'Project',
    author: 'Pedro Mendez',
    website: ''
};`,
  markdown: `# Project
###This is a Pedro Mendez production
[have a look]()
  `,
  xml: `<project>
    <to>Tove</to>
    <name>Project</name>
    <author>Pedro Mendez</author>
    <website></website>
</project>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1></h1>
 <p>This is a Pedro Mendez production</p>
 <a href="">visit ou site</a>
 </body>
</html>
`,
  python: `
print("Project")
print("")
print("")
`,
  ruby: `rint "Project"
print "This is a Pedro Mendez production"
print "visit us"
`
};

export { switchOptions, selectOptions, defaultValues };
