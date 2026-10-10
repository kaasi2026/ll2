# LibreLingoRelive
*a community-owned language-learning platform*

> [!CAUTION]
> Not ready for production use. See [security issues](https://codeberg.org/LibreLingoRelive/LibreLingoRelive/issues/16).

LibreLingo's mission is to create a modern language-learning platform that is owned by the community of its users. All software is licensed under AGPLv3, which guarantees the freedom to run, study, share, and modify the software. Course authors can choose their license freely. 

Here there is an article of [why the original author has built LibreLingo](https://dev.to/kantord/why-i-built-librelingo-280o).

# Why LibreLingoRelive?
LibreLingo is/was an open-source language learning platform originally created by Dániel Kántor. Due to technical issues with the Svelte framework, the project became non-functional a few years ago. Greg later forked the project as LibreLingoCommunity, successfully reviving it. However, due to time constraints, this version also stopped working. In November 2025, we decided to revive LibreLingo once again. We forked the project from LibreLingoCommunity (a fork of a fork) and are now actively maintaining and improving it.

# Documentation

Please read: [LibreLingoRelive Docs](https://codeberg.org/LibreLingoRelive/LibreLingoRelive_Docs)    

## Development

```
(Starting from the root of the repo)

# Install and load LFS (it's necessary for showing images)
git lfs install
git lfs pull 

then add a course or use the test-2 course and copy or clone it to courses.

# back to your root directory and add audio for your course
# if you have once generated the audio it's better to copy paste the folder instead of generating it all the time

PYTHONPATH=src python3.10 src/librelingo_audios/cli.py courses/language-from-language apps/web/static/voice language-from-language

# E.g. like this
 PYTHONPATH=src python3.10 src/librelingo_audios/cli.py courses/fr-from-en apps/web/static/voice fr-from-en

cd src
uv sync

mkdir -p ../apps/web/src/courses/
uv run python3 -m librelingo_json_export.cli $PATH_TO_COURSE_YAML_SOURCE_DIR ../apps/web/src/courses/$CONVERTED_COURSE_NAME

# E.g. like this:
uv run python3 -m librelingo_json_export.cli ~/dev/librelingo/courses/LibreLingo-ES-from-EN ../apps/web/src/courses/converted_ES-from-en

cd ../apps/web
npm ci
npm run dev
```

## Docker Setup

```
(Starting from the root of the repo)

# Install and load LFS (it's necessary for showing images)
git lfs install
git lfs pull 

then add a course or use the test-2 course and copy or clone it to courses.

# Docker build
docker-compose build

# Setup
docker-compose up -d

# Generate audio inside the tools container
docker-compose exec librelingo python3 src/librelingo_audios/cli.py /data/courses/fr-from-en /apps/web/static/voice fr-from-en

The service should be available under http://localhost:5173
```

## Contribution

You can contribute by:

* Help us coding (this repo | read [Contribute.md](https://codeberg.org/LibreLingoRelive/LibreLingoRelive/src/branch/main/Contribute.md)) 
* Help us writing the [Documentation](https://codeberg.org/LibreLingoRelive/LibreLingoRelive_Docs)
* Create your own language course and set it up [Read the Documentation](https://codeberg.org/LibreLingoRelive/LibreLingoRelive_Docs)

## License

LibreLingoRelive is licensed under the AGPL-3.0 license. In addition, course content and other creative content might be licensed under different licenses, such as CC. 
