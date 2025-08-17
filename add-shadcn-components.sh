#!/bin/bash

# List of shadcn components to add
components=("button" "input" "card" "dialog" "dropdown-menu" "avatar" "badge" "tooltip" "checkbox" "radio-group" "switch" "select" "slider" "progress" "tabs" "accordion" "toast" "alert" "breadcrumb" "pagination" "skeleton" "table" "typography" "popover" "sidebar" "carousel" "date-picker" "chart")

for component in "${components[@]}"
do
  npx shadcn@latest add $component
done
