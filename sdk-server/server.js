const express = require('express');
const app     = express();
const cheerio = require('cheerio');
const fs      = require('fs');
const config  = require('./config');
const request = require('request-promise-native');
const ejs     = require('ejs');
const webshot = require('webshot');

let ogCount = 0;

// Load index.html
const indexFile = fs.readFileSync(`${__dirname}/../dist/index.html`, 'utf8', (err, file) => err ? reject(err) : resolve(file));
const indexHtml = indexFile.toString();

// load ads
const jsonFile = fs.readFileSync(`${__dirname}/../src/assets/ads.json`, 'utf8', (err, file) => err ? reject(err) : resolve(file));
const ads = JSON.parse(jsonFile.toString()).ads;

app.get('/sdk/oglas/:oglasId', async ( req, res ) => {

  try {
    // const analysisId    = req.params.analysisId;
    // const templatePath = `${__dirname}/og_templates/snippet.ejs`;
    // const ogImagePath  = `${__dirname}/og_renders/snippet-${snippetId}.png`;
    const $ = cheerio.load(indexHtml);

    // const ogExists = await new Promise(( resolve ) => {
    //   fs.exists(`${__dirname}/og_renders/snippet-${snippetId}.png`, ( exists ) => resolve(exists));
    // });

    // if ( !ogExists ) {
    //   console.log(`Og count: ${ogCount}`);
    //   ogCount++;
    //   renderOg(templatePath, snippetData, ogImagePath);
    // }

    $('title').text(`${ads[parseInt(req.params.oglasId)].og_title}`);
    $('.removeme').remove();
    // <meta property="og:image"          content="${config.URL}/images/snippet-${snippetId}.png" />
    // <meta name="twitter:image" content="${config.URL}/images/snippet-${snippetId}.png">
    $('head').append(`
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${ads[parseInt(req.params.oglasId)].og_title}" />
      <meta property="og:description" content="${ads[parseInt(req.params.oglasId)].og_description}" />
      <meta property="og:image" content="https://sestavivlado.si/static/${ads[parseInt(req.params.oglasId)].og_image}" />
      
      <meta name="twitter:title" content="${ads[parseInt(req.params.oglasId)].og_title}" />
      <meta name="twitter:description" content="${ads[parseInt(req.params.oglasId)].og_description}" />
      <meta name="twitter:image" content="https://sestavivlado.si/static/${ads[parseInt(req.params.oglasId)].og_image}" />
      <meta name="twitter:card" content="summary_large_image">
    `);

    res.send($.html());

  } catch ( err ) {
    console.log(err);
    res.status(400).send('Something went wrong');
  }

});

app.get('/sdk/', async ( req, res ) => {
  try {
    // const analysisId    = req.params.analysisId;
    // const templatePath = `${__dirname}/og_templates/snippet.ejs`;
    // const ogImagePath  = `${__dirname}/og_renders/snippet-${snippetId}.png`;
    const $ = cheerio.load(indexHtml);

    // const ogExists = await new Promise(( resolve ) => {
    //   fs.exists(`${__dirname}/og_renders/snippet-${snippetId}.png`, ( exists ) => resolve(exists));
    // });

    // if ( !ogExists ) {
    //   console.log(`Og count: ${ogCount}`);
    //   ogCount++;
    //   renderOg(templatePath, snippetData, ogImagePath);
    // }

    $('title').text('Sestavi vlado!');
    $('.removeme').remove();
    // <meta property="og:image"          content="${config.URL}/images/snippet-${snippetId}.png" />
    // <meta name="twitter:image" content="${config.URL}/images/snippet-${snippetId}.png">
    $('head').append(`
      <meta name="description" content="Sestavljanje koalicije ne sme biti kupčkanje glasov in tešenje posameznih interesov. Preizkusi se kot mandatar/-ka!">
      <meta name="author" content="Danes je nov dan, Inštitut za druga vprašanja">
      <link rel="shortcut icon" href="/sdk/static/favicon.png">

      <meta class="removeme" property="og:title" content="Sestavi vlado" />
      <meta class="removeme" property="og:type" content="article" />
      <meta class="removeme" property="og:description" content="Sestavljanje koalicije ne sme biti kupčkanje glasov in tešenje posameznih interesov. Preizkusi se kot mandatar/-ka!" />
      <meta class="removeme" property="og:image" content="https://danesjenovdan.si/sdk/static/og-koalicija.jpg" />

      <meta name="twitter:title" content="Sestavi vlado" />
      <meta name="twitter:description" content="Sestavljanje koalicije ne sme biti kupčkanje glasov in tešenje posameznih interesov. Preizkusi se kot mandatar/-ka!" />
      <meta name="twitter:image" content="https://danesjenovdan.si/sdk/static/og-koalicija.jpg" />
      <meta name="twitter:card" content="summary_large_image">
    `);

    res.send($.html());
  } catch (err) {
    console.log(err);
    res.status(400).send('Something went wrong');
  }
});

app.use('/sdk/', express.static(`${__dirname}/../dist`));

app.listen(7062, () => {
  console.log('Server listening on port 7062');
});

async function renderOg( templatePath, data, imagePath ) {

  const template = await new Promise(( resolve, reject ) => {
    fs.readFile(templatePath, 'utf8', ( err, file ) => err ? reject(err) : resolve(file));
  });

  const templateHtml = template.toString();

  const rendered = ejs.render(templateHtml, data);

  await new Promise(( resolve, reject ) => {
    webshot(rendered, imagePath, {
      screenSize : {
        width  : 1200,
        height : 630
      },
      shotSize   : {
        width  : 1200,
        height : 630
      },
      siteType   : 'html'
    }, ( err ) => err ? reject(err) : resolve(imagePath));
  });

}
