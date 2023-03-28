All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
### BREAKING CHANGES
-->

# Common Changelog

## 2020-06-24

### Added

- Switch to Dart Sass

### Changed

- Group styles using accent and hover colors
- Integrate prettier

## 2018-11-11

### Added

- Watch `images` folder during `watch` task
- Zip theme after `build` succeeds
- Set version when `build` task is executed

### Changed

- Move common fixes to `common/_fixes.scss`
- Simplify imports

## 2018-11-02

### Changed

- Update fix for broken padding on list/tree items. At the moment only `QListWidget` items need the fix. It fixes missing selected plugin's esp highlighting when a plugin is selected on the main list

## 2018-10-28

### Changed

- Extract common fixes and functions to be used by all themes
- Update gulp tasks to support generic themes

# Skyrim Theme Changelog

## 2.1.0 - 2018-11-14

### Changed

- Align inputs height
- Increase list/tree rows height with editable cells to fit increased input size

### Removed

- Remove drop-down image border
- Remove tab pane image border

### Fixed

- Fix install link color on download widget
- Fix scrollbar arrow background color inside `QTextEdit`

## 2.0.1 - 2018-11-02

### Fixed

- Update common fix (see "Common Changelog" > "2018-11-02")

## 2.0.0 - 2018-10-28

### Changed

- Update for Mod Organizer 2
- Some small changes

## 1.1.5 - 2017-05-20

### Changed

- Build without minification. Makes no sense to keep minified for local files. Minified version also used to produce bugs.

## 1.1.4 - 2016-05-08

### Removed

- Remove purple tint on progress bar chunk gradient - just don't like it

## 1.1.3 - 2016-02-29

### Fixed

- Table view corner has white background in minificated version

## 1.1.2 - 2016-02-28

### Fixed

- Add paddings to all trees controls similar to the dialog files tree
- Fix indeterminate check box image

## 1.1.1 - 2016-02-28

### Fixed

- Progress bar chunk is missing in minificated version

## 1.1.0 - 2016-02-28

### Changed

- Set `min-width` for Mod Info dialog so that all tabs are visible
- Make download label bold on Downloads tab

### Fixed

- Fix `min-width` for "Overwrite" dialog

## 1.0.0 - 2016-02-25

### Added

- Initial MVP version

# VS15 Theme Changelog

## 2.1.0 - 2020-06-24

### Added

- Add "Pink" and "Dark" accent color themes

### Changed

- Use accent color in more places - for selected and hover colors
- Make sure contrast foreground color is used when the background is the accent or hover color
- Reduce checkbox size to fix column fits all text functionality
- Unify buttons style
- Reduce accent color variety to two - accent and hover color
- Make "Yellow" theme color more yellow
- Compress png images with PNGGauntlet

### Removed

- Remove unused image

## 2.0.2 - 2018-11-14

### Fixed

- Fix install link color on "Download" widget

## 2.0.1 - 2018-11-02

### Changed

- Add padding for "Archives" and "Data" tabs' items

### Fixed

- Update common fix (see "Common Changelog" > "2018-11-02")

## 2.0.0 - 2018-10-28

### Changed

- Update for Mod Organizer 2
- Some small changes

## 1.3.2 - 2017-05-20

### Changed

- Build without minification

## 1.3.1 - 2016-11-24

### Fixed

- Set minimum width for the Overwrite Dialog so that buttons aren't cut

## 1.3.0 - 2016-02-13

### Added

- Add 5 color variants - red, yellow, orange, purple and green
- Start using SASS

### Changed

- Several minor changes
- Unify colors - all inputs should have the same colors

## 1.2.4 - 2016-02-10

### Added

- Add styles for group box checkboxes
- Add styles for radio buttons (w/o images)

## 1.2.3 - 2016-02-08

### Fixed

- Fix "Executables" dialog text color

## 1.2.2 - 2016-02-08

### Fixed

- Fix image path for sort indicator
- Add "./" to all image paths - it may resolve "missing image" issue

## 1.2.1 - 2016-02-07

### Changed

- Re-minify `vs15 Dark.qss` to solve one minor issue

## 1.2.0 - 2016-02-07

### Added

- Add styles for checkboxes

## 1.1.0 - 2016-02-07

### Added

- Add styles for sliders (e.g. "Configurator" dialog)

### Fixed

- Fix overwrite/overwritten mod rows background color
- Fix spin box styles

## 1.0.0 - 2016-02-06

### Added

- Initial MVP version
