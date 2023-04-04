formatoPagoMultiple = () => {
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: false,
        floatPrecision: 16 // or "smart", default is 16
    });
    // Optional - set properties on the document
    doc.setProperties({
        title: 'FORMATO PAGO MÚLTIPLE ' + nombres_Personal + " " + aPaterno_Personal + " " + aMaterno_Personal,
        subject: 'FORMATO PAGO MÚLTIPLE',
        author: 'VIVEVOLANDO',
        creator: 'Christopher S.'
    });
    //doc.text("Hello world!", 10, 10);


    doc.addImage(formatoImg, 0, 0, 215.891, 279.389);

    doc.setFontSize(11);

    
    switch (month) {
        case 'Jan':
            doc.text(126, 44, day + ' de Enero de ' + year);
            // doc.text(112, 44, 'Enero');
            break;
        case 'Feb':
            // doc.text(112, 44, 'Febrero');
            doc.text(126, 44, day + ' de Febrero de ' + year);
            break;
        case 'Mar':
            // doc.text(112, 44, 'Marzo');
            doc.text(126, 44, day + ' de Marzo de ' + year);
            break;
        case 'Apr':
            // doc.text(112, 44, 'Abril');
            doc.text(126, 44, day + ' de Abril de ' + year);
            break;
        case 'May':
            // doc.text(112, 44, 'Mayo');
            doc.text(126, 44, day + ' de Mayo de ' + year);
            break;
        case 'Jun':
            // doc.text(112, 44, 'Junio');
            doc.text(126, 44, day + ' de Junio de ' + year);
            break;
        case 'Jul':
            // doc.text(112, 44, 'Julio');
            doc.text(126, 44, day + ' de Julio de ' + year);
            break;
        case 'Aug':
            // doc.text(112, 44, 'Agosto');
            doc.text(126, 44, day + ' de Agosto de ' + year);
            break;
        case 'Sep':
            // doc.text(112, 44, 'Septiembre');
            doc.text(126, 44, day + ' de Septiembre de ' + year);
            break;
        case 'Oct':
            // doc.text(112, 44, 'Octubre');
            doc.text(126, 44, day + ' de Octubre de ' + year);
            break;
        case 'Nov':
            // doc.text(112, 44, 'Noviembre');
            doc.text(126, 44, day + ' de Noviembre de ' + year);
            break;
        case 'Dec':
            // doc.text(112, 44, 'Diciembre');
            doc.text(126, 44, day + ' de Diciembre de ' + year);
            break;
        default:
            doc.text(112, 44, 'No existe el mes');
    }


    doc.setFontSize(11);
    doc.text(46, 52.7, nombres_Personal + ' ' + aPaterno_Personal + ' ' + aMaterno_Personal);

    if(razon_Social.length < 44 ){
        doc.setFontSize(11);
        doc.text(19, 86.5, razon_Social);
    }else{
        doc.setFontSize(10);
        doc.text(19, 86.5, razon_Social);
    }
    
    doc.setFontSize(11);
    doc.text(152, 86.5, RFC_Personal);

    doc.setFontSize(10);

    if (/^\d+$/.test(noExt_Personal) == true){
        if (noInt_Personal != '') {
            doc.text(19, 95.8, 'CALLE ' + calle_Personal + ' N. EXT. ' + noExt_Personal + ' N. INT. ' + noInt_Personal);
            doc.text(19, 99.8, 'COLONIA ' + colonia_Personal);
        }
        else {
            doc.text(19, 95.8, 'CALLE ' + calle_Personal + ' N. EXT. ' + noExt_Personal);
            doc.text(19, 99.8, 'COLONIA ' + colonia_Personal);
        }
    }else{
        if (noInt_Personal != '') {
            doc.text(19, 95.8, 'CALLE ' + calle_Personal + ' ' + noExt_Personal + ' N. INT. ' + noInt_Personal);
            doc.text(19, 99.8, 'COLONIA ' + colonia_Personal);
        }
        else {
            doc.text(19, 95.8, 'CALLE ' + calle_Personal + ' ' + noExt_Personal);
            doc.text(19, 99.8, 'COLONIA ' + colonia_Personal);
        }
    }
    

    doc.setFontSize(11);

    doc.text(19, 120, tel_Personal);

    doc.text(72, 120, mun_Personal);

    doc.text(19, 133, cp_Personal);

    doc.text(72, 133, cd_Personal + ', ' + entfed_Personal);


    doc.text(27, 153, cantidad_1);
    doc.text(46, 153, clave_venta1);
    doc.setFontSize(10);
    if( conceptos_venta1.length < 40 ){
        doc.text(71, 153, conceptos_venta1);
    }else{
        doc.setFontSize(8.5);
        doc.text(71, 153, conceptos_venta1);
    }
    doc.setFontSize(11);
    doc.text(170, 153, '$' + tarifa_venta1);

    if (clave_venta2 != 'SELECCIONA...' && clave_venta2 != '') {
        doc.text(27, 168, cantidad_2);
        doc.text(46, 168, clave_venta2);
        doc.setFontSize(10);
        if( conceptos_venta2.length < 40 ){
            doc.text(71, 168, conceptos_venta2);
        }else{
            doc.setFontSize(8.5);
            doc.text(71, 168, conceptos_venta2);
        }
        doc.setFontSize(11);
        doc.text(170, 168, '$' + (tarifa_venta2));
    }

    if (clave_venta3 != 'SELECCIONA...' && clave_venta3 != '') {
        doc.text(27, 183, cantidad_3);
        doc.text(46, 183, clave_venta3);
        doc.setFontSize(10);
        if( conceptos_venta3.length < 40 ){
            doc.text(71, 183, conceptos_venta3);
        }else{
            doc.setFontSize(8.5);
            doc.text(71, 183, conceptos_venta3);
        }
        doc.setFontSize(11);
        doc.text(170, 183, '$' + tarifa_venta3);
    }

    if (clave_venta4 != 'SELECCIONA...' && clave_venta4 != '') {
        doc.text(27, 198, cantidad_4);
        doc.text(46, 198, clave_venta4);
        doc.setFontSize(10);
        if( conceptos_venta4.length < 40 ){
            doc.text(71, 198, conceptos_venta4);
        }else{
            doc.setFontSize(8.5);
            doc.text(71, 198, conceptos_venta4);
        }
        doc.setFontSize(11);
        doc.text(170, 198, '$' + tarifa_venta4);
    }

    if (clave_venta5 != 'SELECCIONA...' && clave_venta5 != '') {
        doc.text(27, 213, cantidad_5);
        doc.text(46, 213, clave_venta5);
        doc.setFontSize(10);
        if( conceptos_venta5.length < 40 ){
            doc.text(71, 213, conceptos_venta5);
        }else{
            doc.setFontSize(8.5);
            doc.text(71, 213, conceptos_venta5);
        }
        doc.setFontSize(11);
        doc.text(170, 213, '$' + tarifa_venta5);
    }

    doc.text(170, 225, '$' + importe);

    window.open(doc.output('bloburl'));

}