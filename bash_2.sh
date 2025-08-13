#!/bin/bash

echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "All arguments: $@"
echo "Number of arguments: $#"


#!/usr/bin/env bash

# Show usage/help
usage() {
    echo "Usage: $0 --env ENV --package PACKAGE --tag TAG"
    echo
    echo "  --env ENV          Environment name (e.g., dev, prod)"
    echo "  --package PACKAGE  Package name"
    echo "  --tag TAG          Tag name (e.g., v1.0.0)"
    exit 1
}

# Parse long options
while [[ $# -gt 0 ]]; do
    case "$1" in
        --env)
            ENV="$2"
            shift 2
            ;;
        --package)
            PACKAGE="$2"
            shift 2
            ;;
        --tag)
            TAG="$2"
            shift 2
            ;;
        --help)
            usage
            ;;
        *)
            echo "Unknown option: $1"
            usage
            ;;
    esac
done

# Check for missing arguments
if [[ -z "$ENV" || -z "$PACKAGE" || -z "$TAG" ]]; then
    echo "Error: Missing required options."
    usage
fi

# Output result
echo "/${ENV}/${PACKAGE}/ecr/${TAG}"



# Show usage/help
# usage() {
#     echo "Usage: $0 -a ENV -b PACKAGE -c TAG"
#     echo
#     echo "  -a ENV       Environment name (e.g., dev, prod)"
#     echo "  -b PACKAGE   Package name"
#     echo "  -c TAG       Tag name (e.g., v1.0.0)"
#     exit 1
# }

# # Parse options
# while getopts a:b:c: flag; do
#     case "${flag}" in
#         a) ENV=${OPTARG} ;;
#         b) PACKAGE=${OPTARG} ;;
#         c) TAG=${OPTARG} ;;
#         *) usage ;;  # Handle invalid flags
#     esac
# done

# # Check for missing arguments
# if [[ -z "$ENV" || -z "$PACKAGE" || -z "$TAG" ]]; then
#     echo "Error: Missing required options."
#     usage
# fi

# # Output result
# echo "/${ENV}/${PACKAGE}/ecr/${TAG}"