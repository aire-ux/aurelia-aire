
develop.all() {

  lerna run build &
  lerna run start &
  npm run start --workspace site/aurelia-aire/aurelia-aire-site &

  wait
}