# FFmpeg-Builds-Archive
Store ffmpeg builds from https://github.com/BtbN/FFmpeg-Builds to use in https://github.com/adriabama06/ffmpeg-version-manager/

*Note: This repo weights a lot, use `git clone --depth 1 https://github.com/adriabama06/FFmpeg-Builds-Archive.git` to save space and only download the last changes*

## Adding new builds

1. Clone with sparse checkout
```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/adriabama06/FFmpeg-Builds-Archive.git
cd FFmpeg-Builds-Archive
```

2. Download and place the build files in the version folder (e.g. `8.1.2/`)

3. Stage, commit and push
```bash
git add --sparse <version_folder>
git commit -m "Add FFmpeg builds <version>"
git push origin main
```
