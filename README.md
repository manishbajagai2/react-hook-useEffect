# react-hook-useEffect

### To Deploy using gh-pages :

1. ` npm install gh-pages --save-dev `
2. ` git remote add origin <your_cloned_repo_url> `
3. In package.json file :
    1. ` “homepage” : “http://manishbajagai2.github.io/<your_repo_name>” `
    2. In scripts :
        1. ` “predeploy” : “npm run build” `
        2. ` “deploy” : “gh-pages -d build” `
4. Finally run the following command in the terminal :
    ` npm run deploy `

The above is applicable for using react not using vite in it
