ErrStrs = {}; ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation"); try {var idMk = charIDToTypeID( 'Mk  ' );     var desc1104 = new ActionDescriptor();     var idNw = charIDToTypeID( 'Nw  ' );     var idDcmn = charIDToTypeID( 'Dcmn' );     desc1104.putClass( idNw, idDcmn ); executeAction( idMk, desc1104, DialogModes.ALL ); } catch(e){if (e.toString().indexOf(ErrStrs.USER_CANCELLED)!=-1) {;} else{alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}}
