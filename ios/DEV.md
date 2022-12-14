#  Dev Instructions
## Running on iPhone
https://developer.apple.com/forums/thread/64973
## Notes
* In order to run native code on iPhone, you need this iOS directory and the associated files.
* Before building the iOS specific files please do the follow from the main directory:
```rm -Rf node_modules;arch -x86_64 yarn cache clean;arch -x86_64 yarn install;```
* Then from this iOS directory you can do something like:
```rm -Rf build;rm -Rf Pods;arch -x86_64 pod install --repo-update;```
* You should also import the workspace or project file into XCode and it should look like:
![image](https://user-images.githubusercontent.com/681493/208785290-1a6bbbd6-9ded-4616-ad54-70f915dde6ec.png)
* You can run the app on an iOS simulator or iPhone by hitting the play button (it will take some time for the app to build and deploy)
* Here is a tour of the interface as of today: https://www.youtube.com/watch?v=YwLbjOrIwas
