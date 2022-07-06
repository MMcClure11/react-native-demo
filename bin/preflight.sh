#!/usr/bin/env bash

set -e

check_failed=0

check_executable() {
  if ! [ -x "$(command -v "$1")" ]; then
    print_error "Could not find \`$1\` exec"
    check_failed=$((check_failed + 1))
  fi
}

check_jdk() {
  if ! $(java -version > /dev/null 2>&1); then
    print_error "Cound not find Java Development Kit"
    check_failed=$((check_failed + 1))
  fi
}

check_path() {
  if ! [[ ":$PATH:" == *":$1:"* ]]; then
    print_error "$1 not found in PATH"
    check_failed=$((check_failed + 1))
  fi
}

check_android_sdk() {
  android_home="$HOME/Library/Android/sdk"
  if ! [[ -z "$ANDROID_HOME" ]]; then
    android_home="$ANDROID_HOME"
  fi

  for p in tools tools/bin platform-tools; do
    check_path "$android_home/$p"
  done
}

print_step() {
  echo
  echo "==> $1"
}

print_error() {
  echo -e "\033[31m! Error:\033[0m $1"
}

print_success() {
  echo -e "\033[32m> Success:\033[0m $1"
}

print_step "Checking prerequisites"

check_executable ack
check_executable asdf
check_executable watchman
check_executable xcodebuild
check_executable emulator

check_jdk

check_android_sdk

if [[ $check_failed = 0 ]]; then
  print_success "All prerequisites installed"

  print_step "Installing asdf plugins..."
  asdf plugin-add nodejs

  print_step "Running asdf..."
  asdf install

  print_success "Preflight finished"
else
  exit 1
fi
