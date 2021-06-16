# mi proyecto nesecita  node vesion 12
FROM node:14

# crearemos un working directory
WORKDIR /app

# y pasamostodos los archivos a /app asi  cuando pones./ estas refiriendote a tu directorioasignado arriba osea a ./app
COPY  package*.json ./

# empesar a ejecutar el comendo npm install
RUN npm install

# con el anterior comando creamos el paquete de node_modules dentro del container ahora ejecutamos el codifgo con estre comando de punto y punto estamos diciendo que copies todo lo que tengo aqui osea lo que queda el SRC y lo pongas en mi directorio de trabajo osea APP
COPY . .

# ahora para ejecutar todo este proyecto se hace de la siguiente manera este paso es como el script que se ejecutara para iniciar tu proyecto 
CMD [ "npm","start" ]
# para esto primero vamos a crear una imagen con el comando build


