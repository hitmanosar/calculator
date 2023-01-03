function each_del() {
  let create_arr = calc.txt.value.split("");

  let check = calc.txt.value.length - 1;

  create_arr.splice(check, 1);

  calc.txt.value = create_arr.join("");

  if (calc.txt.value < 1) {
    calc.txt.value = "";
  }
}
