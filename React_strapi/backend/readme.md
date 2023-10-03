<h1> Repositorio aula strap + react </h1>

<p>
  para iniciar o projeto basta utilizar

  npx create-strapi-app + nome da aplicação
</p>

<li>npm run develop -> modo watch
<li>npm start -> inicia aplicação
<li>npm build ele builda o projeto para deploy

<p>
   modifique config > database.js e adicione pool { min:0,max:5,}
   evitar de errors
</p>
<h2>Cloudinary </h2>

<p>
Para evitar que perca arquivo de img utilizaremos cloudinary um cdn - content delivery network,aws,cloudplatform e heroku </p>

<p>npm install @strapi/provider-upload-cloudinary --sa
vev</p>

<li> Adicione no  config/plugins :

      module.exports = ({ env }) => ({
      // ...
      upload: {
         config: {
          provider: 'cloudinary',
          providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
          },
        },
      },
      // ...
    });

<li> Adicione no  config/Middleware.js :
<hr/>

        module.exports = [
          //adcione aqui ate
        {
          name: 'strapi::security',
          config: {
            contentSecurityPolicy: {
              useDefaults: true,
             directives: {
                'connect-src': ["'self'", 'https:'],
                'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
                'media-src': [
                 "'self'",
                  'data:',
                  'blob:',
                  'market-assets.strapi.io',
                  'res.cloudinary.com',
               ],
               upgradeInsecureRequests: null,
              },
            },
         },
        },
        //aqui ....
        'strapi::errors',
       'strapi::cors',
        'strapi::poweredBy',
        'strapi::logger',
       'strapi::query',
        'strapi::body',
       'strapi::session',
        'strapi::favicon',
        'strapi::public',
      ];
