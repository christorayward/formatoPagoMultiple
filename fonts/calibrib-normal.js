﻿(function (jsPDFAPI) {
var callAddFont = function () {
this.addFileToVFS("calibrib-normal.ttf", font);
this.addFont("calibrib-normal.ttf", "calibrib", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);