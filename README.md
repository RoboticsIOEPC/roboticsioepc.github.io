# robotics.ioepc.edu.np
Website of the Robotics Club.

> Built using Hugo Static Site Generator using the [Hugoplate](https://github.com/zeon-studio/hugoplate) theme.

## To setup the Environment
### Install on generic systems.
```bash
go # go language
hugo # hugo static site generator
node # nodejs package and package manager
```
### In linux/macos using nix
1. Install nix using determinate system nix installer.
> Run the following command
```bash
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
```
2. Go to the  project directory and run `direnv allow`

## To test in localhost
Run `hugo serve` and go to the given address. Make changes to the files and save them to see live changes.

# For Authors
## To redirect students to forms for registration:
1. go to `content/english/` from the base directory.
2. open ` _index.md` in a text editor.
3. edit:
```toml
  button:
    enable: true
    label: "Register"
    link: "/closed"  
```
to 
```toml
  button:
    enable: true
    label: "Be a Member" # your desired label
    link: "https://docs.google.com/forms/u/0/" # your desired link to the form  
```


## To add new posts:
1. go to `content/english/blog/` from the base directory.
2. go to a catagory of the post inside one of the directory from `achievement`, `activities` or `projects`.
3. make a markdown file like `we_won_yantra_twice.md` and open it.
4. Put the images to be attached on `assets/images/<your own folder>/<image name>.png`
5. Put the following template:
```md
---
title: "Yantra 9.0"
meta_title: ""
description: "<Another Yantra Event Won>"
date: 2099-03-14
image: "/images/<your own folder>/<image name>.jpg"
categories: ["Participation", "Achievements"]
author: "<your name>"
tags: ["competition, winner"]
draft: false
---

< write your article here >  
```
6. Edit the template and finally push the changes.
