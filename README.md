# About

This library serves as a foundation for all other *ws* libraries. It provides simple interfaces for registration and retrieval of singletons objects, helping developers write cleaner source codes.

Note that all singletons are handled as constants, thus making reassignments impossible. However, since this library is built on top of the premise of registering only JavaScript objects, it is possible to change an object's values, as if it was a class object.

To use this library, first you will need to define an "*application.json*" file, containing all configuration data to be used in your application.

# Contributors

Ricardo Fuzeto ([email](mailto:ricardofuzeto@gmail.com?subject=About%20ws-boot)): idea conception and initial development stages