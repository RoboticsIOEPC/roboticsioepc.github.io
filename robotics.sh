#!/usr/bin/env bash

# Step 1: Build Hugo
echo "Building Hugo..."
hugo

# Step 2: Copy contents of public directory to ../roboticsioepc.github.io
echo "Copying contents to roboticsioepc.github.io directory..."
cp -r public/* ../roboticsioepc.github.io/

# Step 3: Navigate to the roboticsioepc.github.io directory
echo "Navigating to roboticsioepc.github.io directory..."
cd ../roboticsioepc.github.io

# Step 4: Add all changes
echo "Adding changes to git..."
git add .

# Step 5: Commit changes
echo "Committing changes..."
git commit -m "Update website"

# Step 6: Push changes to GitHub
echo "Pushing changes to GitHub..."
git push origin main

echo "Script execution completed."
