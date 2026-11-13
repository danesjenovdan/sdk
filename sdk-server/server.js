const express = require('express');
const app     = express();
const cheerio = require('cheerio');
const fs      = require('fs');

// Load index.html
const indexFile = fs.readFileSync(`${__dirname}/dist/index.html`, 'utf8', (err, file) => err ? reject(err) : resolve(file));
const indexHtml = indexFile.toString();

// load ads
const jsonFile = fs.readFileSync(`${__dirname}/src/assets/ads.json`, 'utf8', (err, file) => err ? reject(err) : resolve(file));
const ads = JSON.parse(jsonFile.toString()).ads;

app.get('/oglas/:oglasId', async ( req, res ) => {
  try {
    const $ = cheerio.load(indexHtml);

    $('title').text(`${ads[parseInt(req.params.oglasId)].og_title}`);
    $('.removeme').remove();
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

app.get('/', async ( req, res ) => {
  try {
    const $ = cheerio.load(indexHtml);

    $('title').text('Sestavi vlado!');
    $('.removeme').remove();
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

app.use('/', express.static(`${__dirname}/dist`));

app.listen(7062, () => {
  console.log('Server listening on port 7062');
});
