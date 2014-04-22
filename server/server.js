var jsonImport = require('./dummyJson.json'),
   _ = require('underscore'),
   exportMarkdown ='',
   marked = require('marked')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

var json2md = function(jsonImport) {
   // Add Title
   jsonImport.abstract ='# Abstract \n'+jsonImport.abstract

   exportMarkdown = jsonImport.abstract + ' \n';

   // Add Title
   jsonImport.introduction ='# Introduction \n'+jsonImport.introduction
   exportMarkdown = exportMarkdown + jsonImport.introduction + ' \n';

   // Add list features
   exportMarkdown = exportMarkdown + '# Equipment' +' \n'
   _.map(jsonImport.equipment,function (value,key) {
      jsonImport.equipment[key] = '- '+jsonImport.equipment[key]
      exportMarkdown = exportMarkdown + jsonImport.equipment[key] + ' \n';
   })

   // Add list features
   exportMarkdown = exportMarkdown + '# Materials' +' \n'
   _.map(jsonImport.materials,function (value,key) {
      jsonImport.materials[key] = '- '+jsonImport.materials[key]
      exportMarkdown = exportMarkdown + jsonImport.materials[key] + ' \n';
   })

   jsonImport.enviromentConditions = '# Workspace Preration \n'+jsonImport.enviromentConditions
   exportMarkdown = exportMarkdown + jsonImport.enviromentConditions  +' \n'

   //
      //TODO add Procedure MD title
   //
   jsonImport.procedureTitle = '## Procedure';
   _.map(jsonImport.procedure,function (value,key){
      // Group Titles
      value.processGroupTitle = '## '+value.processGroupTitle
      exportMarkdown = exportMarkdown + value.processGroupTitle +' \n'
      _.map(value.processSteps,function (value,key){
         //
         value.title = '\n  '+(key +1) +'. '+ value.title
         exportMarkdown = exportMarkdown + value.title +'  \n '

         value.context = '> '+ value.context
         exportMarkdown = exportMarkdown + value.context +'  \n '

         value.highlights = '> '+ value.highlights
         exportMarkdown = exportMarkdown + value.highlights +'  \n '

         value.critical = '> '+ value.critical
         exportMarkdown = exportMarkdown + value.critical +'  \n '

         value.safety = '> '+ value.safety
         exportMarkdown = exportMarkdown + value.safety +'  \n '

         value.behavior = '> '+ value.behavior
         exportMarkdown = exportMarkdown + value.behavior +'  \n '

         var codeBlock = ''
         value.userInput = _.omit(value.userInput,'user','date');
         _.map(value.userInput,function (value,key){
            if (typeof value[0] === 'object') {
               codeBlock = value[0].value +' min: '+ value[0].minValue +' max: '+ value[0].maxValue +' '+ codeBlock;
            } else {
               codeBlock = value +' '+ codeBlock;
            }
         });
         // add to Json markdown
         value.userInput ='´´´userImput '+codeBlock+' ´´´';
         exportMarkdown = exportMarkdown + value.userInput +' \n'
      });
   });
   return marked(exportMarkdown)
}


//console.log(marked(exportMarkdown));
console.log(exportMarkdown);

//jsonImport.equipment ='# Equipment \n'+jsonImport.abstract

