# S-Pilot-Map

This is a sample application to test various things for s. In order to view the current version of the project, you will need to clone the repo and inside the project folder do the following steps on terminal.

```
npm install
bower install

gulp
```

### This project includes:
1. __ReactJS__ as the frontend UI library to render components.
2. __Bootstrap__ is used as the responsive frontend framework.
3. __Fontawesome__ is used for certain icons.
4. __Leaflet__ is used as the mapping 3rd party application and __MapBox__ is used for tiling the map.

### Notes:
- Files inside __build__ folder are created dynamically by a _gulp task_ that converts _jsx_ files into valid js files.
- __css > app.css__ file is also created dynamically by a _gulp task_ that preprocesses all the files inside __sass__ folder.

