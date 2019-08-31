Set of themes for Mod Organizer 2

Get [latest versions](https://github.com/nikolay-borzov/modorganizer-themes/releases)

# General

[![Greenkeeper badge](https://badges.greenkeeper.io/nikolay-borzov/modorganizer-themes.svg)](https://greenkeeper.io/)

## Installation
Download and extract to `ModOrganizer 2\stylesheets\` folder

## Credits
* Tannin for creating [Mod Organizer](http://www.nexusmods.com/skyrim/mods/1334/?)
* [Mod Organizer 2](https://github.com/ModOrganizer2/modorganizer) team 

# Skyrim

Skyrim UI theme

## Known Issues
* Links are hard to read on dark background. Unfortunately it's impossible to fix through styles. But you can lighten background color (e.g. `QWidget { background-color: #8B8C93; }`)
* Transparent background on hover for disabled check box in the Archives tab. Can't figure out how to fix it (if you care)
* If filter is applied fancy border disappears. Also there is so no red border around mod list. I cannot fix it because it's hardcoded in MO source code. Optionally I can remove image border. 

## Future plans
* Bug fixes (if any)

## Credits
* Bethesda Softworks for a great game

# VS15

Dark theme inspired by VS 2015 UI.

## Features
* Minimalist
* Increased list items height (Mods  List, Plugins List and etc.)
* Unchecked .bsa highlight on Archives tab
* Unique sort indicator
* Several fixes

## Installation
Download and extract to `ModOrganizer\stylesheets\` folder

## Known Issues
* Links are hard to read on dark background. Unfortunately it's impossible to fix through styles. But you can lighten background color (e.g. `QWidget { background-color: #8B8C93; }`)
* Transparent background on hover for disabled check box in the Archives tab. Can't figure out how to fix it (if you care)

## Future plans
* Bug fixes (if any)
* Light theme (less possible)

## Credits
* Microsoft for bringing clean and smooth UI for Visual Studio 2015
* EGraf for [UI Tweaks - Alternative style for Mod Organizer](http://www.nexusmods.com/skyrim/mods/70774/?)


# Development

### Build
```
npm run build -- --theme=vs15 --version=2.1.0
```

### Watch
```
npm run watch -- --theme=vs15
```

### Change default build destination
```
npm run watch -- --theme=vs15 --dest="C:\Games\Mod Organizer 2\stylesheets"
```

### Add a new theme
1. Add new folder to `/themes`
2. Use folder name as theme id `npm run build -- --theme=my-theme`
3. Place theme images inside `images` sub-folder

# Other

## Resources
* [Qt Documentation - The Style Sheet Syntax](http://doc.qt.io/qt-5/stylesheet-syntax.html)
* [StackOverflow](http://stackoverflow.com/)
* Mod Organizer source code

## Tools
* [ColorPic](http://www.iconico.com/colorpic/)
* [Paint.NET](http://www.getpaint.net/index.html)
* [SASS](http://sass-lang.com/)
* [Gulp](http://gulpjs.com/) ([gulp-sass](https://www.npmjs.com/package/gulp-sass), [gulp-replace](https://www.npmjs.com/package/gulp-replace), [gulp-rename](https://www.npmjs.com/package/gulp-rename) and [gulp-clean-css](https://github.com/scniro/gulp-clean-css))

