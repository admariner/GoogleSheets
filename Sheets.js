/* copySheet
  * make copy of sheet and mave it after current sheet
  
  * SS           SpreadSheet
  * strToCopy    Name of sheet to copy
  * strName      Name of new sheet
*/
function copySheet(SS, strToCopy, strName) {

  var SS = SS || SpreadsheetApp.getActiveSpreadsheet();
  var sheet = SS.getSheetByName(strToCopy);
  var newSheet = sheet.copyTo(SS);
  newSheet.setName(strName);
  var index = sheet.getIndex() + 1;  
  SS.setActiveSheet(newSheet);
  SS.moveActiveSheet(index);

}