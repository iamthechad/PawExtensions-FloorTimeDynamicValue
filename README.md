# FloorTimeDynamicValue - Paw Extension

Dynamic value for Paw that generates a timestamp aligned to the previous minute

## Manual installation

* Clone this repository, or simply download the `FloorTimeDynamicValue.js` file.
* In Paw, select `Paw->Extensions->Open Extensions Directory` from the menubar.
* The extensions directory will open in Finder. Create a new folder called `com.megatome.PawExtensions.FloorTimeDynamicValue`
* Copy `FloorTimeDynamicValue.js` into this new folder.
* In Paw, select `Paw->Extensions->Reload All Extensions`

## Usage

* For the desired `URL Parameter`, right-click the `Value` field
* Select `Extensions->Time Floor Dynamic Value` from the menu
* By default, the current time will be used. Desired offset (+/-) can be specified in seconds.

### Example

* An `endTime` parameter using the default value
* A `startTime` parameter with an offset of -3600 seconds to align to a time one hour previous.
