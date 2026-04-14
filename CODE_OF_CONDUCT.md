# CODE OF CONDUCT

## TODO Checklist

- Install eslint and prettier extensions in vs code and use the default settings defined in .vscode
- Create custom components with tailwind
- Use react-hot-toast to show toast messages
- Use lucid icons for icons

## Naming Convention

- Function Name -> camelCase
- Variables -> snake_case
- API Call->TitleCase
- useState Variable -> count,setCount
- Constant / special vars -> CAPITAL_LETTER
- Component name -> TitleCase
- Always use const fn = ()=>{} instead of function fn(){}

## Code structure to follow

- Any global styles should go to global.css and any module based css goes to file like moduleName.css
- Any module based css should have a container to isolate css code and prevent overwrite
- All page should contain a description at top like :

```js
/**
 * @version 0.0.1
 * Updated On : August 28, 2024
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */
```

- Maintain standard code structure with comment. Declare all states and variables first and the the UseEffect and then all other method.

```js
//-------------- State & Variables --------------//

//-------------- Use Effects --------------//

//-------------- Other Methods --------------//
```

- Break big page UI into small section and components.
- Non reusable components goes inside `components` folder of same directory

## Contributing

Pull requests (PRs) are welcome.

- Create a branch with your name from dev branch.
- Do changes in that branch.
- Push changes to your branch and create PR to staging branch.
- Get PR reviewed for sanity check and merge it to staging.
- Then finally merge all changes from staging to main to deploy in prod.

## License

[MIT](https://choosealicense.com/licenses/mit/)
