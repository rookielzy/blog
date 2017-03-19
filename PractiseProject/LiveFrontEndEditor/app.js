function compile() {
    const html = document.querySelector('#html');
    const css = document.querySelector('#css');
    const js = document.querySelector('#js');    
    const code = document.querySelector('#code').contentWindow.document;
    // console.log(code);

    document.body.onkeyup = function() {
        code.open();
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value  + "</script>");
        code.close();
    };
}

compile();