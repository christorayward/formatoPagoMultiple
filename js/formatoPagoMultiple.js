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
    doc.text(170, 153, '$' + importe1);

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
        doc.text(170, 168, '$' + importe2);
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
        doc.text(170, 183, '$' + importe3);
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
        doc.text(170, 198, '$' + importe4);
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
        doc.text(170, 213, '$' + importe5);
    }

    doc.text(170, 225, '$' + importe);

    // doc.rect(71.399, 15.698, 102.782, 19.597, 'S');
    // doc.setFontSize(12);
    // doc.setFontType('bold');
    // doc.text(74.534, 21.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    // doc.text(86.43, 26.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    // doc.text(74.45, 32.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    // doc.setFontSize(12);
    // doc.setFontType('normal');
    // doc.text(29.846, 40.055, 'DGAC');
    // doc.setFontSize(15);
    // doc.setFontType('bold');
    // doc.text(100.805, 46.253, 'CEDULA 6');
    // doc.setFontSize(12);
    // doc.text(91.738, 52.693, 'CEDULA DE ALUMNO');
    // doc.setFontSize(9);
    // doc.text(65.133, 57.209, 'PARA ALTA DE CURSOS EN LOS CENTROS DE CAPACITACIÓN');
    // doc.setFontType('normal');
    // doc.setFontSize(8);
    // doc.text(20.245,69.386,'UTILIZAR MÁQUINA DE ESCRIBIR O LETRA DE MOLDE');
    // doc.text(20.245,73.088,'PARA SU ELABORACIÓN:');
    // doc.setLineWidth(0.3); //By default, the value equals 0.2 mm
    // doc.rect(117.551,62.835,74.401,11.761);
    // doc.rect(118.25,63.532,72.982,10.359);
    // doc.setLineWidth(0.2);
    // doc.text(126.009, 67.658, 'SOLO PARA SER LLENADO POR LA DGAC.');
    // doc.text(136.85, 71.341, 'DIRECCIÓN DE LICENCIAS');
    // doc.setFontSize(9);
    // doc.text(20.186, 80.626, '(01) AEROPUERTO: _____________________________  FECHA: _____________  No. ENTRADA:');
    // doc.setLineWidth(0.5);
    // doc.rect(168.18,76.361,28.056,6.37);
    // doc.setLineWidth(0.2);
    // doc.setFontType('bold');
    // doc.text(122.639,89.083,'REVAL. /RECUP.                     RECUPERACIÓN')
    // doc.text(20.186,93.551,'(02) FORMACIÓN          CAPACITACIÓN       CONVALIDACIÓN             DE LICENCIA                          CAPACIDAD')
    // doc.rect(27.538,96.509,11.175,5.384);
    // doc.rect(59.794,96.509,11.175,5.384);
    // doc.rect(92.571,96.509,11.175,5.384);
    // doc.rect(131.017,96.509,11.175,5.384);
    // doc.rect(167.264,96.509,11.175,5.384);
    // doc.rect(19.936,107.574,178.301,42.622);
    // doc.setFontType('normal');
    // doc.text(22.077,110.439,'(02 BIS)');
    // doc.setFontType('bold');
    // doc.text(34.465,110.439,'ANTECEDENTES:');
    // doc.setLineWidth(0.5);
    // doc.rect(50.125,113.21,33.772,6.251);
    // doc.rect(50.125,122.196,33.772,6.251);
    // doc.setLineWidth(0.2);
    // doc.setFontType('normal');
    // doc.setFontSize(8);
    // doc.text(22.007,118.176,'CLAVE CENTRO:                                                                 NOMBRE DEL CENTRO:  ______________________________');
    // doc.text(22.007,125.458,'CLAVE CURSO:                                                                   NOMBRE DE CURSO:      ______________________________');
    // doc.text(22.007,134.771,'CLAVE GRUPO:    ________________________               NOMBRE DEL GRUPO:     ______________________________');
    // doc.line(20.105,139.262,198.068,139.262);
    // doc.setFontSize(9);
    // doc.text(22.007,142.264,'No. PERMISO DEL                                          FECHA                                      FECHA');
    // doc.text(22.007,145.905,'ALUMNO:       ______________________      INICIO: _________________   TERMINACIÓN:______________________');
    // doc.rect(19.936,154.563,177.751,93.043);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(21.648, 155.009, 41.869, 3.175, 'F');
    // doc.text(22.048,157.309,'(03)');
    // doc.setFontType('bold');
    // doc.text(28.685,157.309,'DATOS PERSONALES:');
    // doc.setFontType('normal');
    // doc.text(22.048,163.437,'NOMBRE ______________________________________________________________________________________');
    // doc.text(aPaterno_Personal,50,163.2);
    // doc.text(aMaterno_Personal,80,163.2);
    // doc.text(nombres_Personal, 124,163.2);
    // doc.setFontSize(7);
    // doc.text(52.113,166.705,'A.PATERNO                        A. MATERNO                                                     NOMBRE (S)');
    // doc.setFontSize(9);
    // doc.setFontType('bold');
    // doc.text(23.013,172.408,'RFC.                                                                                     CURP:');
    // doc.setFontType('normal');
    // doc.text(28.013,172.408,'      _______________________________________                 ___________________________________________')
    // doc.text(RFC_Personal,45,172.2);
    // doc.text(CURP_Personal,130,172.2);
    // doc.text(45.96, 176.063,'( Con Homoclave )                                                                             ( Si lo posee )');
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(22.115, 181.278, 35.869, 3.175, 'F');
    // doc.setFontType('bold');
    // doc.text(22.115,183.634,'DOMICILIO PERSONAL:');
    // doc.setFontType('normal');
    // doc.text(22.007, 190.039,'CALLE:  ____________________________________________  No. EXTERIOR: __________ No. INT ___________');
    // doc.text(calle_Personal, 40,189.9);
    // doc.text(noExt_Personal, 142,189.9);
    // doc.text(noInt_Personal, 173,189.9);
    // doc.text(22.007, 197.32,'COLONIA: __________________________________________  COD. POSTAL: _____________________________');
    // doc.text(colonia_Personal, 42,197.1);
    // doc.text(cp_Personal, 143,197.1);
    // doc.text(22.007, 204.601,'DELEG/MUNICIPIO:    _______________________________     TELEFONO:   ______________________________');
    // doc.text(mun_Personal,58,204.4);
    // doc.text(tel_Personal,140,204.4);
    // doc.text(22.007, 212.301,'CIUDAD:    _________________________________________    ENTIDAD FED:   ____________________________');
    // doc.text(cd_Personal,42,212.1);
    // doc.text(entfed_Personal,142,212.1);
    // doc.text(22.007, 220.001,'LUGAR DE NACIMIENTO:       __________________________   NACIONALIDAD: _____________________________');
    // doc.text(lugarNacimiento_Personal,69,219.8);
    // doc.text(nacionalidad_Personal,145,219.8);
    // doc.text(22.007, 227.001,'No. CARTILLA SERVICIO MILITAR NACIONAL:____________   FECHA LIBERAC: _____________________________');
    // doc.text(noCartilla_Personal,94,226.8);
    // doc.text(fechaLiberacion_Personal,145,226.8);
    // doc.text(22.007, 234.701,'OBSERVACIONES CARTILLA: _______________________________________________________________________');
    // doc.text(observacionesCartilla_Personal,70,234.5);
    // doc.setFontSize(8);
    // doc.text(105,238.101,'(Solo para trámite inicial)');
    // doc.setFontSize(9);
    // doc.text(22.007, 243.201,'ESTADO CIVIL   ___________________________________________________________________________________');
    // doc.text(edoCivil_Personal,50,243.0);

    // doc.setFont('calibrib');
    // doc.setFontSize(11);
    // doc.text(20.00, 265.804, 'DGAC-MIL-CED-6');
    // doc.setFont('calibri');
    // doc.setFontType('normal');
    // doc.text(176.589, 261.201, 'Página 1 de 3');

    // //Página 2//
    // doc.addPage("letter", "p");
    // doc.addImage(sctImg, 13.386, 14.383, 56.473, 20.997);
    // doc.addImage(dgacImg, 178.135, 14.845, 22.0, 22.0);
    // doc.rect(71.399, 15.698, 102.782, 19.597, 'S');
    // doc.setFontSize(12);
    // doc.setFontType('bold');
    // doc.setFont('Helvetica');
    // doc.text(74.534, 21.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    // doc.text(86.43, 26.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    // doc.text(74.45, 32.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');


    // doc.rect(19.936, 43.743, 178.301, 19.008);
    // doc.setFontSize(9);
    // doc.setFontType('normal');
    // doc.text(24.583, 47.816, '(04)');
    // doc.setFontType('bold');
    // doc.text(31.183, 47.816, 'DATOS EMPRESA, INSTITUCIÓN, O CENTRO DE FORMACIÓN, CAPACITACIÓN Y ADIESTRAMIENTO:');
    // doc.text(22.033, 55.169,'CLAVE                                          NOMBRE:      ________________________________________________________');
    // doc.setLineWidth(0.5);
    // doc.rect(36.951, 52.140, 28.981, 6.244);
    // doc.setLineWidth(0.2);
    // doc.rect(19.936,75.043,177.751,29.418);
    // doc.setFontType('normal');
    // doc.text(22.077,78.170,'(05)');
    // doc.setFontType('bold');
    // doc.text(28.685,78.170,'DATOS LICENCIAS:');
    // doc.setFontType('normal');
    // doc.text(22.077,85.908,'CLASE DE LICENCIA:______________________   NUMERO:_________________   No. PERMISO:__________________');
    // doc.text(22.077,92.842,'FECHA EXPEDICIÓN ACTUAL:                                                FECHA VENCIMIENTO:');
    // doc.setLineWidth(0.5);
    // doc.rect(69.23,88.864,37.624,6.756);
    // doc.rect(149.751,88.053,43.368,7.426);
    // doc.text(22.077,100.223,'RESULTADO EXAMEN TEORICO:   _________________      RESULTADO EXA. PRACTICO.:');
    // doc.rect(157.436,97.173,35.684,6.244);
    // doc.setLineWidth(0.2);
    // doc.rect(19.936,117.376,177.751,41.391);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(22.678, 121.553,95.172, 3.175, 'F');
    // doc.text(22.678,123.732,'(06)');
    // doc.setFontType('bold');
    // doc.text(29.278,123.732,'DATOS ESTUDIOS ESCOLARES: (solo para trámite inicial)');
    // doc.text(163.989,127.547,'AÑOS');
    // doc.line(19.936,128.179,197.517,128.179);
    // doc.text(59.968,131.749,'NOMBRE INSTITUCIÓN EDUCATIVA                                                          DE      A       CERT.');
    // doc.line(19.936,133.047,197.517,133.047);
    // doc.setFontType('normal');
    // doc.setDrawColor(0)
    // doc.setFillColor(255, 236, 154)
    // doc.rect(24.378, 136.953,15.872, 3.275, 'F')
    // doc.text(24.634,139.613,'PRIMARIA');
    // doc.line(52.54,140.275,197.517,140.275);
    // doc.text(nombEsc_Primaria,55,139.6);
    // doc.text(deEsc_Primaria,164.5,138.6);
    // doc.text(aEsc_Primaria,174,138.6);
    // doc.text(certEsc_Primaria,189,138.6);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(24.378, 142.953,21.372, 3.275, 'F');
    // doc.text(24.634,145.832,'SECUNDARIA');
    // doc.line(52.54,146.571,197.517,146.571);
    // doc.text(nombEsc_Secundaria,55,146.0);
    // doc.text(deEsc_Secundaria,164.5,145.2);
    // doc.text(aEsc_Secundaria,174,145.2);
    // doc.text(certEsc_Secundaria,189,145.2);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(24.378, 149.253,25.572, 3.275, 'F');
    // doc.text(24.634,152.028,'PREPARATORIA');
    // doc.line(52.54,152.751,197.517,152.751);
    // doc.text(nombEsc_Preparatoria,55,152.028);
    // doc.text(deEsc_Preparatoria,164.5,151.428);
    // doc.text(aEsc_Preparatoria,174,151.428);
    // doc.text(certEsc_Preparatoria,189,151.428);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(24.378, 155.253,38.572, 3.275, 'F');
    // doc.text(24.634,158.030,'ESTUDIOS SUPERIORES');
    // doc.line(162.423,128.279,162.465,158.854);  //Lineas horizontales
    // doc.line(172.414,128.279,172.414,158.854);
    // doc.line(182.489,128.279,182.489,158.854);
    // doc.rect(19.936,171.376,177.751,51.591);
    // doc.text(nombEsc_Superiores,67,157.830);
    // doc.text(deEsc_Superiores,164.5,157.430);
    // doc.text(aEsc_Superiores,174,157.430);
    // doc.text(certEsc_Superiores,189,157.430);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(22.578, 175.553,106.872, 3.175, 'F');
    // doc.text(22.678,178.232,'(07)');
    // doc.setFontType('bold');
    // doc.text(29.278,178.232,'DATOS DE LA PERSONA A NOTIFICAR EN CASO DE ACCIDENTE.');
    // doc.setFontType('normal');
    // doc.text(21.978,185.600,'NOMBRE ______________________________________________________________________________________');
    // doc.text(aPaterno_Acc,47,185.400);
    // doc.text(aMaterno_Acc,93,185.400);
    // doc.text(nombres_Acc,131,185.400);
    // doc.text(45.7,189.600,'A. PATERNO                               A. MATERNO                           NOMBRE (S)');
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(21.578, 193.553,18.372, 3.175, 'F');
    // doc.setFontType('bold');
    // doc.text(21.978,196.3,'DOMICILIO:');
    // doc.setFontType('normal');
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(21.578, 197.353,11.672, 3.175, 'F');
    // doc.rect(115.478, 197.353,23.572, 3.175, 'F');
    // doc.rect(156.878, 197.353,11.872, 3.175, 'F');
    // doc.text(21.978,199.9,'CALLE:  _____________________________________________  No. EXTERIOR:__________ No. INT____________');
    // doc.text(calle_Acc,40,199.7);
    // doc.text(noExt_Acc,142,199.7);
    // doc.text(noInt_Acc,172,199.7);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(21.578, 203.353,15.872, 3.175, 'F');
    // doc.rect(115.278, 203.353,22.972, 3.175, 'F');
    // doc.text(21.978,205.99,'COLONIA:___________________________________________   COD. POSTAL:_____________________________');
    // doc.text(colonia_Acc,43,205.79);
    // doc.text(cp_Acc,142,205.79);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(21.578, 210.79,29.272, 3.175, 'F');
    // doc.rect(113.978, 210.79,18.972, 3.175, 'F');
    // doc.text(21.978,213.29,'DELEG/MUNICIPIO    _________________________________   TELÉFONO:  _______________________________');
    // doc.text(mun_Acc,57,213.09);
    // doc.text(tel_Acc,140,213.09);
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(21.578, 216.39,13.772, 3.175, 'F');
    // doc.rect(114.678, 216.39,22.772, 3.175, 'F');
    // doc.text(21.978,219.09,'CIUDAD:           ______________________________________    ENTIDAD FED:  ____________________________');
    // doc.text(cd_Acc,48,218.89);
    // doc.text(entfed_Acc,142,218.89);

    // doc.setFont('calibrib');
    // doc.setFontSize(11);
    // doc.text(20.00, 265.804, 'DGAC-MIL-CED-6');
    // doc.setFont('calibri');
    // doc.setFontType('normal');
    // doc.text(176.589, 261.201, 'Página 2 de 3');

    // //Página 3//
    // doc.addPage("letter", "p");
    // doc.addImage(sctImg, 13.386, 14.383, 56.473, 20.997);
    // doc.addImage(dgacImg, 178.135, 14.845, 22.0, 22.0);
    // doc.rect(71.399, 15.698, 102.782, 19.597, 'S');
    // doc.setFontSize(12);
    // doc.setFont('Helvetica');
    // doc.setFontType('bold');
    // doc.text(74.534, 21.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    // doc.text(86.43, 26.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    // doc.text(74.45, 32.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    // doc.rect(20, 39.5, 178.0, 90.30);
    // doc.setFontSize(9);
    // doc.setFontType('normal');
    // doc.text(22,42.5,'(08)');
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(21.2, 47.5,17.272, 3.175, 'F');
    // doc.setFontSize(10);
    // doc.text(22,50.2,'NOMBRE:      _______________________________________________________________');
    // doc.text(nombres_Personal+' '+aPaterno_Personal+' '+aMaterno_Personal,50,50.0);
    // doc.text(79.5,66.8,'___________________________');
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 236, 154);
    // doc.rect(103.0, 67.9,12, 3.175, 'F');
    // doc.text(103.6,70.6,'FIRMA');
    // doc.setFontType('normal');
    // doc.setFontSize(9);
    // doc.setFont('ARIALNB');
    // doc.text(21.9,85.2,'BAJO PROTESTA DE DECIR VERDAD, DECLARO  QUE LOS DATOS Y DOCUMENTOS  PROPORCIONADOS PARA  LA OBTENCIÓN DE ESTA');
    // doc.text(21.9,89,'LICENCIA O PERMISO SON  FIDEDIGNOS, APERCIBIDO  DE LAS SANCIONES A  LAS QUE ME HAGO ACREEDOR, EN CASO DE DECLARAR');
    // doc.text(21.9,92.6,'FALSAMENTE   ANTE  AUTORIDAD   DIFERENTE  A   LA  JUDICIAL,  ESTABLECIDAS   EN   LA   LEY  PENAL  Y   EN  LAS  DEMÁS  LEYES  Y');
    // doc.text(21.9,96.2,'REGLAMENTOS APLICABLES.');
    // doc.text(85.5,150.5,'_________________________________');
    // doc.setFontSize(8);
    // doc.setFont('Helvetica');
    // doc.setFontType('normal');
    // doc.text(101.5,154,'NOMBRE Y FIRMA');
    // doc.text(90.5,157.8,'DE LA AUTORIDAD AERONÁUTICA');
    // doc.text(94.4,161.3,'QUE AUTORIZÓ EL TRÁMITE');
    // doc.text(31.2,183.8,'______________________________                                                                             ____________________________');
    // doc.text(38.6,189.2,'NOMBRE Y FIRMA');
    // doc.text(34.7,193.2,'DE LA AUTORIDAD QUE');
    // doc.text(33.2,197.5,'VALIDA LA INFORMACIÓN');
    // doc.setFontSize(10);
    // doc.text(155.2,189.2,'SELLO');
    // doc.setFontSize(9);
    // doc.text(139.8,197.5,'AUTORIDAD AERONÁUTICA');


    // doc.setFont('calibrib');
    // doc.setFontSize(11);
    // doc.text(20.00, 265.804, 'DGAC-MIL-CED-6');
    // doc.setFont('calibri');
    // doc.setFontType('normal');
    // doc.text(176.589, 261.201, 'Página 3 de 3');

    //doc.line(0,0,215.9,279.4);
    //Tamaño carta en mm: 215.9 cm x 279.4 cm
    //doc.line(0,279.4,215.9,0);
    window.open(doc.output('bloburl'));

}
