#!/usr/bin/env bash

set -e

print_step() {
  echo
  echo "==> $1"
}

print_success() {
  echo
  echo -e "\033[32m> Success:\033[0m $1"
}

print_error() {
  echo -e "\033[31m! Error:\033[0m $1"
}

print_usage() {
  echo
  echo "Usage: $(basename "$0") name package"
  echo "  name: PascalCase version of new project name, ex: MyApp"
  echo "  package: Package prefix for new project, ex: com.mycompany"
  echo
}

rename() {
  ack -l "$1" --ignore-file=is:init.sh | \
    xargs sed -i '' -e "s/$1/$2/g"
}

pascal_old="ReactNativeStarter"
package_old="com.reactnativestarter"
tld_old="com"
domain_old="reactnativestarter"

pascal_new=$1
package_new=$2
tld_new="$(echo $package_new | cut -d "." -f1)"
domain_new="$(echo $package_new | cut -d "." -f2)"

if [[ ! -f "package-lock.json" ]]; then
  print_error "Must be run from project root"
  exit 1
fi

if [[ -z $pascal_new ]]; then
  print_error "Missing \`name\` argument"
  print_usage
  exit 1
fi

if [[ -z $package_new ]]; then
  print_error "Missing \`package\` argument"
  print_usage
  exit 1
fi

echo -e "\033[47m\033[36m           < NewAperio >           \033[0m"
echo "React Native Starter Initialization"
echo "-----------------------------------"

print_step "Renaming files"
rename "$pascal_old" "$pascal_new"
rename "$package_old" "$package_new"

mv "ios/$pascal_old" "ios/$pascal_new"
mv "ios/$pascal_old.xcodeproj" "ios/$pascal_new.xcodeproj"
mv "ios/$pascal_new.xcodeproj/xcshareddata/xcschemes/$pascal_old.xcscheme" "ios/$pascal_new.xcodeproj/xcshareddata/xcschemes/$pascal_new.xcscheme"
mv "ios/$pascal_old.xcworkspace" "ios/$pascal_new.xcworkspace"
mv "ios/${pascal_old}Tests" "ios/${pascal_new}Tests"
mv "ios/${pascal_new}Tests/${pascal_old}Tests.m" "ios/${pascal_new}Tests/${pascal_new}Tests.m"

for p in "main" "debug"; do
  if [[ $tld_old != $tld_new ]]; then
    mv "android/app/src/$p/java/$tld_old" "android/app/src/$p/java/$tld_new"
  fi
  mv "android/app/src/$p/java/$tld_new/$domain_old" "android/app/src/$p/java/$tld_new/$domain_new"
done

print_step "Copying blank README"
mv README_starter.md README.md

print_step "Removing starter specific files"
rm CHANGELOG.md
rm LICENSE

print_step "Removing this script"
rm bin/init.sh

print_success "Complete!"
