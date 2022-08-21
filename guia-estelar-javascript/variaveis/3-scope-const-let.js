console.log("existe x antes? " + x); 
// output: ReferenceError: x is not defined

{
    console.log("existe x depois? " + x)
    // output: vai da um erro de inicialização, pois estamos chamando uma váriavel que ainda não foi declarada.
    let x = 0;
}
