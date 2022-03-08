/**
 *
 * @type { String }
 */
let a = "hallo";

// a = 0;


/**
 * Logs the arg
 * @param { "Drama Lama" / "hi" } arg - must be non-empty. (String literal type)
 */
const foo = arg => {
    console.log(arg);
}

foo("Drama Lama");
// foo(9); // rises a warning

/**
 *
 * @param { String | Number | void } arg - must be non-empty
 */
const foo2 = arg => {
    console.log(arg);
}

foo2("chchc");
foo2(3);