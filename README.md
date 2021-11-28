#GagotApp

## How to run locally

In order to run the app you should follow these steps:

1. Clone this repo.
2. Run `npm i`
3. Run `npm start`



## NPM Scripts

- `loc`: Run the app with development conflagrations.
- `test`: Run all the tests.
- `electron`: Run a local electron app.
- `sync:android`: Sync all Android plugins with the current code.
- `sync:ios`: Sync all IOS plugins with the current code.
- `android`: Build the app and open Android Studio in order to build an APK on a device.
- `ios`: Build the app and open xCode in order to build an IPA on a device
- `reset`: Delete the **node_modules** folder and run `npm i` - Can be used when we need to change branches.
- `copy_fonts`: Copy the fonts folder content to the app fonts folder.

  _Usage:_

  ```shell
  npm run copy_fonts [FULL PATH TO DRIVE FONTS FOLDER]
  ```

- `update_version`: Update the version for all the files.

  _Usage:_

  ```shell
  npm run update_version [NEW VERSION]
  ```

---

## VSCode Tasks

In order to run VSCode tasks you will need to press <kbd>F1</kbd> → `Run Task`.

You will find the automatic generate tasks such under the folders.

In addition, we have these custom tasks:

1. **Start** - Start the local dev by running `npm run loc`.
2. **Copy Fonts** - Copy the fonts files from the Google Drive to the app.
3. **Update Version** - Update the app version in all the files.
4. **Run specific test** - Run ng test only on the test files that match the pattern.
5. **Reset local dependencies** - Delete the **node_modules** folder and run `npm install`.

---

## VSCode Extensions

You can see the workspace recommended extensions in the extensions section in VSCode with the filter `@recommended`.

---

## WebStorm Extensions

- [GitToolBox](https://plugins.jetbrains.com/plugin/7499-gittoolbox) - Extends Git Integration with additional features, Status display, auto fetch, inline blame annotation, commit dialog completion, behind notifications and more...

