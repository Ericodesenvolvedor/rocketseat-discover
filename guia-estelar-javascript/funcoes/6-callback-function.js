function sayMyName(name) {
    name();
}

sayMyName(() => {
    console.log('eric');
})